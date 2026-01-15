import { getCmsStore, isAdminRequest, json } from "./cms-utils.mts";

export default async (req: Request) => {
  if (req.method === "GET") {
    const store = getCmsStore();
    const articles = (await store.get("articles", { type: "json" })) ?? [];
    return json(articles);
  }

  if (req.method === "POST") {
    if (!isAdminRequest(req)) {
      return json({ error: "Unauthorized" }, { status: 401 });
    }

    const articles = await req.json().catch(() => null);
    if (!Array.isArray(articles)) {
      return json({ error: "Invalid payload" }, { status: 400 });
    }

    const store = getCmsStore();
    await store.setJSON("articles", articles);
    return json({ ok: true });
  }

  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "GET, POST" },
  });
};
