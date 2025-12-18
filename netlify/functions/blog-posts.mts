import { getCmsStore, isAdminRequest, json } from "./cms-utils.mts";

export default async (req: Request) => {
  if (req.method === "GET") {
    const store = getCmsStore();
    const posts = (await store.get("blog_posts", { type: "json" })) ?? [];
    return json(posts);
  }

  if (req.method === "POST") {
    if (!isAdminRequest(req)) {
      return json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await req.json().catch(() => null);
    if (!Array.isArray(posts)) {
      return json({ error: "Invalid payload" }, { status: 400 });
    }

    const store = getCmsStore();
    await store.setJSON("blog_posts", posts);
    return json({ ok: true });
  }

  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "GET, POST" },
  });
};

