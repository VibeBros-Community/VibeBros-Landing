import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
}

export interface BlogPostWithSlug extends BlogPost {
  slug: string;
}

export type BlogPostSummary = Omit<BlogPostWithSlug, "content">;

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

let postsPromise: Promise<BlogPostWithSlug[]> | null = null;

function requireString(value: unknown, field: string, slug: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid blog frontmatter: "${field}" is required for "${slug}".`);
  }
  return value.trim();
}

function sortByDateDesc(posts: BlogPostWithSlug[]): BlogPostWithSlug[] {
  return posts.sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return bTime - aTime;
  });
}

async function loadPosts(): Promise<BlogPostWithSlug[]> {
  const entries = await readdir(BLOG_DIR, { withFileTypes: true });
  const markdownFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"));

  const posts = await Promise.all(
    markdownFiles.map(async (file) => {
      const slug = file.name.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, file.name);
      const raw = await readFile(filePath, "utf8");
      const parsed = matter(raw);

      const title = requireString(parsed.data.title, "title", slug);
      const date = requireString(parsed.data.date, "date", slug);
      const author = requireString(parsed.data.author, "author", slug);
      const readTime = requireString(parsed.data.readTime, "readTime", slug);
      const category = requireString(parsed.data.category, "category", slug);
      const excerpt = requireString(parsed.data.excerpt, "excerpt", slug);

      if (Number.isNaN(new Date(date).getTime())) {
        throw new Error(`Invalid blog frontmatter: "date" must be a valid date for "${slug}".`);
      }

      return {
        slug,
        title,
        date,
        author,
        readTime,
        category,
        excerpt,
        content: parsed.content.trim() + "\n",
      } satisfies BlogPostWithSlug;
    }),
  );

  return sortByDateDesc(posts);
}

async function getPosts(): Promise<BlogPostWithSlug[]> {
  // Cache the parsed markdown to avoid repeated filesystem work during a request.
  if (!postsPromise) {
    postsPromise = loadPosts();
  }
  return postsPromise;
}

export async function getAllBlogPosts(): Promise<BlogPostWithSlug[]> {
  return getPosts();
}

export async function getAllBlogPostSummaries(): Promise<BlogPostSummary[]> {
  const posts = await getPosts();
  return posts.map(({ content: _content, ...summary }) => summary);
}

export async function getBlogPost(slug: string): Promise<BlogPostWithSlug | null> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

