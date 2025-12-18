import { json, isAdminRequest } from "./cms-utils.mts";

export default async (req: Request) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET" },
    });
  }

  if (!isAdminRequest(req)) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  return json({ ok: true });
};

