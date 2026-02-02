import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://www.bdggamelink.in/</loc>
    <lastmod>2026-02-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://www.bdggamelink.in/bdg-win</loc>
    <lastmod>2026-02-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
