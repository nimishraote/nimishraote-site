const POSTHOG_PROJECT_TOKEN = "phc_qdV8n3ssv4kjMgCAbMyx5EwuUSDrNJAcAHipoGAJK9TG";
const POSTHOG_INGEST_URL = "https://us.i.posthog.com/i/v0/e/";

export async function GET() {
  const response = await fetch(POSTHOG_INGEST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: POSTHOG_PROJECT_TOKEN,
      event: "analytics_smoke_test",
      distinct_id: "nimishraote-preview-smoke-test",
      properties: {
        source: "vercel-preview",
        path: "/api/posthog-smoke",
      },
    }),
  });

  const text = await response.text();

  return Response.json({
    ok: response.ok,
    posthog_status: response.status,
    posthog_response: text,
  });
}
