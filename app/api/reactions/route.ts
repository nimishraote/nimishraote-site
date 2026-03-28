import { NextRequest, NextResponse } from "next/server";

type ReactionKey = "insightful" | "very_true" | "funny";

type SupabaseReactionRow = {
  article_id?: string;
  insightful_count?: number | null;
  very_true_count?: number | null;
  funny_count?: number | null;
};

const validReactionKeys: ReactionKey[] = ["insightful", "very_true", "funny"];

function getEnv() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing Supabase environment variables.");
  }

  return { supabaseUrl, serviceRoleKey };
}

function buildHeaders(serviceRoleKey: string) {
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json",
  };
}

function normalizeCounts(row?: SupabaseReactionRow | null) {
  return {
    insightful: Number(row?.insightful_count ?? 0),
    very_true: Number(row?.very_true_count ?? 0),
    funny: Number(row?.funny_count ?? 0),
  };
}

async function fetchReactionRow(articleId: string) {
  const { supabaseUrl, serviceRoleKey } = getEnv();

  const response = await fetch(
    `${supabaseUrl}/rest/v1/article_reactions?article_id=eq.${encodeURIComponent(
      articleId
    )}&select=article_id,insightful_count,very_true_count,funny_count`,
    {
      method: "GET",
      headers: buildHeaders(serviceRoleKey),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase read failed: ${errorText}`);
  }

  const data = (await response.json()) as SupabaseReactionRow[];
  return data[0] ?? null;
}

export async function GET(request: NextRequest) {
  const articleId = request.nextUrl.searchParams.get("articleId");

  if (!articleId) {
    return NextResponse.json({ error: "articleId is required." }, { status: 400 });
  }

  try {
    const row = await fetchReactionRow(articleId);
    return NextResponse.json({ counts: normalizeCounts(row) });
  } catch (error) {
    console.error("GET /api/reactions failed", error);
    return NextResponse.json({ error: "Could not load reactions." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      articleId?: string;
      reactionKey?: ReactionKey;
    };

    const articleId = body.articleId?.trim();
    const reactionKey = body.reactionKey;

    if (!articleId || !reactionKey) {
      return NextResponse.json(
        { error: "articleId and reactionKey are required." },
        { status: 400 }
      );
    }

    if (!validReactionKeys.includes(reactionKey)) {
      return NextResponse.json({ error: "Invalid reactionKey." }, { status: 400 });
    }

    const { supabaseUrl, serviceRoleKey } = getEnv();

    const rpcResponse = await fetch(
      `${supabaseUrl}/rest/v1/rpc/increment_article_reaction`,
      {
        method: "POST",
        headers: buildHeaders(serviceRoleKey),
        body: JSON.stringify({
          p_article_id: articleId,
          p_reaction_key: reactionKey,
        }),
        cache: "no-store",
      }
    );

    if (!rpcResponse.ok) {
      const errorText = await rpcResponse.text();
      console.error("Supabase RPC error:", errorText);
      return NextResponse.json(
        { error: `Supabase RPC failed: ${errorText}` },
        { status: 500 }
      );
    }

    const rawData = await rpcResponse.json();
    const updatedRow = Array.isArray(rawData) ? rawData[0] : rawData;

    return NextResponse.json({
      counts: normalizeCounts(updatedRow),
    });
  } catch (error) {
    console.error("POST /api/reactions failed", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Could not save reaction.",
      },
      { status: 500 }
    );
  }
}