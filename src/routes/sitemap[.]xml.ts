import { createFileRoute } from "@tanstack/react-router";
import { docs } from "@/lib/docs-catalog";
import { SITE_ORIGIN } from "@/lib/site";
export const Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
  const urls = docs.map(doc => `<url><loc>${SITE_ORIGIN}${doc.path}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${SITE_ORIGIN}/</loc></url>${urls}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
} } } });