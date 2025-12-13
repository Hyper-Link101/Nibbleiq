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

// Auth Signup (Admin Creation)
app.post("/make-server-94a4ef79/signup", async (c) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );

  try {
    const { email, password } = await c.req.json();
    
    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.error("Error creating user:", error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ data });
  } catch (error) {
    console.error("Signup error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Admin Password Reset
app.post("/make-server-94a4ef79/reset-password", async (c) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );

  try {
    const { email, password } = await c.req.json();
    
    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    // 1. Find the user
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
    
    if (listError) {
      console.error("Error listing users:", listError);
      return c.json({ error: listError.message }, 500);
    }

    const user = users.find((u: any) => u.email === email);
    
    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    // 2. Update the user
    const { data, error: updateError } = await supabase.auth.admin.updateUserById(
      user.id,
      { 
        password: password,
        email_confirm: true,
        user_metadata: { email_verified: true }
      }
    );

    if (updateError) {
      console.error("Error updating user:", updateError);
      return c.json({ error: updateError.message }, 400);
    }

    return c.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Reset error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);