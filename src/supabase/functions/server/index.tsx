import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Helper to check auth
async function checkAuth(c: any) {
  const authHeader = c.req.header('Authorization');
  if (!authHeader) return false;
  
  const token = authHeader.replace('Bearer ', '');
  
  // Allow the simple shared password for admin access
  if (token === 'nibbleiq2024') {
    return true;
  }
  
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );
  
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return false;
  return true;
}

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-94a4ef79/health", (c) => {
  return c.json({ status: "ok" });
});

// Blog Posts
app.get("/make-server-94a4ef79/blog-posts", async (c) => {
  try {
    const posts = await kv.get("blog_posts");
    return c.json(posts || []);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return c.json([], 500);
  }
});

app.post("/make-server-94a4ef79/blog-posts", async (c) => {
  if (!(await checkAuth(c))) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  try {
    const posts = await c.req.json();
    await kv.set("blog_posts", posts);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error saving blog posts:", error);
    return c.json({ error: "Failed to save posts" }, 500);
  }
});

// Podcasts
app.get("/make-server-94a4ef79/podcasts", async (c) => {
  try {
    const podcasts = await kv.get("podcasts");
    return c.json(podcasts || []);
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return c.json([], 500);
  }
});

app.post("/make-server-94a4ef79/podcasts", async (c) => {
  if (!(await checkAuth(c))) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  try {
    const podcasts = await c.req.json();
    await kv.set("podcasts", podcasts);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error saving podcasts:", error);
    return c.json({ error: "Failed to save podcasts" }, 500);
  }
});

// Resource Links
app.get("/make-server-94a4ef79/resource-links", async (c) => {
  try {
    const links = await kv.get("resource_links");
    return c.json(links || []);
  } catch (error) {
    console.error("Error fetching resource links:", error);
    return c.json([], 500);
  }
});

app.post("/make-server-94a4ef79/resource-links", async (c) => {
  if (!(await checkAuth(c))) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  try {
    const links = await c.req.json();
    await kv.set("resource_links", links);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error saving resource links:", error);
    return c.json({ error: "Failed to save links" }, 500);
  }
});

Deno.serve(app.fetch);