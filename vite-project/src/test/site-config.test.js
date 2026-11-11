import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const read = (rel) => readFileSync(new URL(rel, import.meta.url), "utf8");
const exists = (rel) => existsSync(new URL(rel, import.meta.url));

describe("static site configuration", () => {
  const html = read("../../index.html");
  const headers = read("../../public/_headers");

  it("CSP allows the inline theme script by its exact hash", () => {
    const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1];
    const hash = createHash("sha256").update(inline).digest("base64");
    expect(headers).toContain(`'sha256-${hash}'`);
  });

  it("ships SEO and social preview metadata", () => {
    expect(html).toMatch(/<meta name="description" content=".+"/);
    expect(html).toContain('<link rel="canonical" href="https://krithikmaran.work/"');
    expect(html).toContain('property="og:image" content="https://krithikmaran.work/og-image.png"');
  });

  it("has the public files the metadata and nav point to", () => {
    for (const f of ["resume.pdf", "og-image.png", "apple-touch-icon.png", "robots.txt", "sitemap.xml", "_headers"]) {
      expect(exists(`../../public/${f}`), f).toBe(true);
    }
  });

  it("sends core security headers", () => {
    for (const h of ["Strict-Transport-Security", "X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "Content-Security-Policy"]) {
      expect(headers).toContain(h);
    }
  });
});
