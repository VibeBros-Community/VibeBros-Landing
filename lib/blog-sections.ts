import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { toString } from "mdast-util-to-string";
import type { RootContent } from "mdast";

export interface BlogSection {
  id: string;
  title: string;
  content: string;
}

const SECTION_HEADING_DEPTH = 2;
const DEFAULT_SECTION_TITLE = "Overview";

const processor = unified().use(remarkParse).use(remarkGfm).use(remarkStringify);

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function stringifyNodes(nodes: RootContent[]): string {
  return processor.stringify({ type: "root", children: nodes }).trim();
}

export function splitMarkdownIntoSections(markdown: string): BlogSection[] {
  const tree = processor.parse(markdown);
  const sections: { title: string; nodes: RootContent[] }[] = [];
  let currentTitle = DEFAULT_SECTION_TITLE;
  let currentNodes: RootContent[] = [];

  for (const node of tree.children) {
    if (node.type === "heading" && node.depth <= SECTION_HEADING_DEPTH) {
      if (currentNodes.length > 0) {
        sections.push({ title: currentTitle, nodes: currentNodes });
      }
      currentTitle = toString(node) || DEFAULT_SECTION_TITLE;
      currentNodes = [];
      continue;
    }
    currentNodes.push(node);
  }

  if (currentNodes.length > 0) {
    sections.push({ title: currentTitle, nodes: currentNodes });
  }

  const slugCounts = new Map<string, number>();

  return sections
    .map((section) => {
      const baseSlug = slugify(section.title) || "section";
      const count = slugCounts.get(baseSlug) ?? 0;
      slugCounts.set(baseSlug, count + 1);
      const id = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
      const content = stringifyNodes(section.nodes);
      return {
        id,
        title: section.title,
        content,
      } satisfies BlogSection;
    })
    .filter((section) => section.content.length > 0);
}

