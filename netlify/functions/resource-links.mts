import { getCmsStore, isAdminRequest, json } from "./cms-utils.mts";

export default async (req: Request) => {
  if (req.method === "GET") {
    const store = getCmsStore();
    const links = (await store.get("resource_links", { type: "json" })) ?? [];
    return json(links);
  }

  if (req.method === "POST") {
    if (!isAdminRequest(req)) {
      return json({ error: "Unauthorized" }, { status: 401 });
    }

    const links = await req.json().catch(() => null);
    if (!Array.isArray(links)) {
      return json({ error: "Invalid payload" }, { status: 400 });
    }

    const store = getCmsStore();
    await store.setJSON("resource_links", links);
    return json({ ok: true });
  }

  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "GET, POST" },
  });
};

