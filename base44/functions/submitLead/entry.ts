// Public lead intake from the website's contact forms (see docs/base44-integration/PUBLIC-API.md).
// Validates name+phone, clamps field lengths, and stores a Lead entity record.
import { createClientFromRequest } from "npm:@base44/sdk";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

function clean(v: unknown, max: number): string {
  return String(v ?? "").trim().slice(0, max);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }
  if (req.method !== "POST") {
    return Response.json({ error: "method not allowed" }, { status: 405, headers: CORS });
  }
  try {
    const body = await req.json().catch(() => null);
    const name = clean(body?.name, 120);
    const phone = clean(body?.phone, 40);
    if (!name || !phone) {
      return Response.json(
        { error: "name and phone are required" },
        { status: 400, headers: CORS },
      );
    }
    const lead = {
      name,
      phone,
      email: clean(body?.email, 160),
      project: clean(body?.project, 160),
      rooms: clean(body?.rooms, 60),
      budget: clean(body?.budget, 60),
      timeline: clean(body?.timeline, 80),
      message: clean(body?.message, 2000),
      source: clean(body?.source, 40) || "website",
    };
    const base44 = createClientFromRequest(req);
    const created = await base44.asServiceRole.entities.Lead.create(lead);
    return Response.json({ ok: true, id: created?.id }, { status: 201, headers: CORS });
  } catch (e) {
    return Response.json(
      { error: String((e as Error)?.message || e) },
      { status: 500, headers: CORS },
    );
  }
});
