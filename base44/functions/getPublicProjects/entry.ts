// Public read API for the website's projects grid (see docs/base44-integration/PUBLIC-API.md).
// No auth: returns only the display fields of the Project entity, with CORS open
// so the static site (or any preview origin) can fetch it.
import { createClientFromRequest } from "npm:@base44/sdk";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }
  try {
    const base44 = createClientFromRequest(req);
    const rows = await base44.asServiceRole.entities.Project.list();
    const projects = (rows || [])
      .map((r) => ({
        title: r.title,
        location: r.location,
        cat: r.cat,
        sale: r.sale,
        stage: Number(r.stage) || 1,
        image: r.image,
        gallery: r.gallery || [],
        description: r.description,
        facts: r.facts || [],
        featured: !!r.featured,
        order: Number(r.order) || 0,
        external_id: r.external_id,
      }))
      .sort((a, b) => a.order - b.order);
    return Response.json(
      { projects },
      { headers: { ...CORS, "Cache-Control": "public, max-age=300" } },
    );
  } catch (e) {
    return Response.json(
      { error: String((e as Error)?.message || e) },
      { status: 500, headers: CORS },
    );
  }
});
