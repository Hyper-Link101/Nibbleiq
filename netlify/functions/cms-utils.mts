import { getDeployStore, getStore } from "@netlify/blobs";

export function json(data: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(data), { ...init, headers });
}

export function getCmsStore() {
  const deployContext = Netlify.env.get("CONTEXT");
  if (deployContext === "production") {
    return getStore("nibbleiq-cms", { consistency: "strong" });
  }
  return getDeployStore("nibbleiq-cms");
}

export function isAdminRequest(req: Request): boolean {
  const expected = Netlify.env.get("CMS_ADMIN_PASSWORD") || "";
  if (!expected) return false;

  const authHeader = req.headers.get("authorization") || "";
  const token = authHeader.replace(/^Bearer\\s+/i, "").trim();
  if (!token) return false;

  return token === expected;
}

