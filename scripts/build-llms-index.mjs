import fs from "fs";
import path from "path";

/** ----- config you can tweak ----- */
const INCLUDE_EXTS = [".md"];              // add ".pdf" if you want to list PDFs
const SKIP_DIRS = new Set([".git", "node_modules", ".github"]);
const TOP_SECTIONS = ["prompts", "guides", "cheatsheets"]; // used for short index
/** -------------------------------- */

const repoSlug = process.env.GITHUB_REPOSITORY || "vdeaugustine/VinMemory";
const mcpURL = `https://gitmcp.io/${repoSlug}`;
const today = new Date().toISOString().slice(0, 10);

function walk(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files = files.concat(walk(full, base));
    } else {
      files.push({
        abs: full,
        rel: path.relative(base, full),
        ext: path.extname(e.name).toLowerCase(),
      });
    }
  }
  return files;
}

function fileExists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

function makeLink(relPath) {
  // Normalize Windows backslashes to forward slashes for markdown links
  return relPath.split(path.sep).join("/");
}

function generateShortIndex(root) {
  const lines = [];
  lines.push("# VinMemory");
  lines.push("");
  lines.push("A public, AI-friendly reference library for curated prompts, guides, and cheatsheets.");
  lines.push("Designed to work with [GitMCP](https://gitmcp.io) so AI tools can connect directly.");
  lines.push("");
  lines.push("## Key Sections");

  // Only include sections that actually exist
  for (const section of TOP_SECTIONS) {
    const sectionReadme = path.join(root, section, "README.md");
    if (fileExists(sectionReadme)) {
      lines.push(`- [${capitalize(section)}](${makeLink(path.join(section, "README.md"))}) — ${sectionBlurb(section)}`);
    }
  }

  // Fallback: if none of the standard sections exist yet, list top-level dirs with README.md
  if (!lines.some(l => l.startsWith("- ["))) {
    const dirs = fs.readdirSync(root, { withFileTypes: true })
      .filter(d => d.isDirectory() && !SKIP_DIRS.has(d.name));
    for (const d of dirs) {
      const readme = path.join(root, d.name, "README.md");
      if (fileExists(readme)) {
        lines.push(`- [${capitalize(d.name)}](${makeLink(path.join(d.name, "README.md"))})`);
      }
    }
  }

  lines.push("");
  lines.push("## GitMCP Connection");
  lines.push(`MCP SSE URL: ${mcpURL}`);
  lines.push("");
  lines.push(`Last updated: ${today}`);
  lines.push("");

  return lines.join("\n");
}

function generateFullIndex(root) {
  const files = walk(root, root).filter(f => INCLUDE_EXTS.includes(f.ext));
  // Group by top-level directory (or "root")
  const groups = new Map();
  for (const f of files) {
    const parts = f.rel.split(path.sep);
    const top = parts.length > 1 ? parts[0] : "root";
    if (!groups.has(top)) groups.set(top, []);
    groups.get(top).push(f);
  }

  const lines = [];
  lines.push("# VinMemory — Full AI Index");
  lines.push("");
  lines.push("This is the extended reference index for the VinMemory repository, optimized for AI consumption.");
  lines.push("It lists all significant documents, deep links, and structured categories.");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Print groups in a predictable order
  const ordered = Array.from(groups.keys()).sort((a, b) => a.localeCompare(b));
  for (const g of ordered) {
    const title = g === "root" ? "Root" : capitalize(g);
    lines.push(`## ${title}`);
    const items = groups.get(g)
      .sort((a, b) => a.rel.localeCompare(b.rel));

    for (const f of items) {
      lines.push(`- [${makeLink(f.rel)}](${makeLink(f.rel)})`);
    }
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## GitMCP Connection Info");
  lines.push(`- MCP SSE URL: ${mcpURL}`);
  lines.push("");
  lines.push(`Last updated: ${today}`);
  lines.push("");

  return lines.join("\n");
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function sectionBlurb(name) {
  switch (name) {
    case "prompts": return "Prompt templates and patterns.";
    case "guides": return "Step-by-step workflows and tool instructions.";
    case "cheatsheets": return "Quick reference for commands and syntax.";
    default: return "Documentation.";
  }
}

function main() {
  const repoRoot = process.cwd();

  // Write llms.txt (short)
  const shortTxt = generateShortIndex(repoRoot);
  fs.writeFileSync(path.join(repoRoot, "llms.txt"), shortTxt, "utf8");

  // Write llms-full.txt (full)
  const fullTxt = generateFullIndex(repoRoot);
  fs.writeFileSync(path.join(repoRoot, "llms-full.txt"), fullTxt, "utf8");

  console.log("Updated llms.txt and llms-full.txt");
}

main();
