// Public read API for the website's availability board (see docs/base44-integration/PUBLIC-API.md).
// Maps the Unit entity to the shape the site expects (unit_number -> unit).
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
    const rows = await base44.asServiceRole.entities.Unit.list();
    const units = (rows || [])
      .map((r) => ({
        project: r.project,
        unit: r.unit_number,
        building: r.building,
        floor: Number(r.floor) || 0,
        rooms: Number(r.rooms) || 0,
        sqm: Number(r.sqm) || 0,
        price: r.price != null ? Number(r.price) : undefined,
        status: r.status || "available",
        image: r.image,
        exposure: r.exposure,
        external_id: r.external_id,
        order: Number(r.order) || 0,
      }))
      .sort((a, b) => a.order - b.order);
    return Response.json(
      { units },
      { headers: { ...CORS, "Cache-Control": "public, max-age=120" } },
    );
  } catch (e) {
    return Response.json(
      { error: String((e as Error)?.message || e) },
      { status: 500, headers: CORS },
    );
  }
});
