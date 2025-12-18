import { getCmsStore, isAdminRequest, json } from "./cms-utils.mts";

export default async (req: Request) => {
  if (req.method === "GET") {
    const store = getCmsStore();
    const podcasts = (await store.get("podcasts", { type: "json" })) ?? [];
    return json(podcasts);
  }

  if (req.method === "POST") {
    if (!isAdminRequest(req)) {
      return json({ error: "Unauthorized" }, { status: 401 });
    }

    const podcasts = await req.json().catch(() => null);
    if (!Array.isArray(podcasts)) {
      return json({ error: "Invalid payload" }, { status: 400 });
    }

    const store = getCmsStore();
    await store.setJSON("podcasts", podcasts);
    return json({ ok: true });
  }

  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "GET, POST" },
  });
};

