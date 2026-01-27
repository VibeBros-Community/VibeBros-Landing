import { Metadata } from "next";
import { notFound } from "next/navigation";
import type React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";
import { BackButton } from "@/components/ui/back-button";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog-posts";
import { splitMarkdownIntoSections } from "@/lib/blog-sections";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vibebros.dev";

type BlogParams = Promise<{ slug: string }>;

const markdownComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-12 mb-4 text-3xl font-extrabold tracking-tight text-white" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-10 mb-3 text-2xl font-bold text-white" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="mb-6 text-lg leading-8 text-baltic-blue-100" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-6 list-disc space-y-2 pl-6 text-baltic-blue-100" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6 text-baltic-blue-100" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 leading-7" {...props} />
  ),
  a: ({ href, ...props }: React.ComponentPropsWithoutRef<"a">) => {
    const isExternal = typeof href === "string" && href.startsWith("http");
    return (
      <a
        href={href}
        {...props}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="font-semibold text-cerulean-300 underline decoration-cerulean-400/60 underline-offset-4 hover:text-cerulean-200"
      />
    );
  },
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mb-8 overflow-x-auto rounded-xl border border-baltic-blue-800 bg-baltic-blue-950/80 p-5 text-sm leading-6 text-baltic-blue-100"
      {...props}
    />
  ),
  code: ({ className, ...props }: React.ComponentPropsWithoutRef<"code">) => {
    const isInline = typeof className !== "string" || !className.includes("language-");
    return (
      <code
        className={
          isInline
            ? "rounded-md bg-baltic-blue-900/80 px-1.5 py-1 text-[0.95em] text-cerulean-200"
            : className
        }
        {...props}
      />
    );
  },
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mb-8 border-l-4 border-cerulean-400/70 bg-baltic-blue-900/40 px-6 py-4 text-lg italic text-baltic-blue-100"
      {...props}
    />
  ),
  hr: (props: React.ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-10 border-baltic-blue-800" {...props} />
  ),
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="mb-10 overflow-x-auto rounded-xl border border-baltic-blue-800">
      <table className="min-w-full border-collapse bg-baltic-blue-950/60 text-left" {...props} />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-baltic-blue-800 px-4 py-3 text-sm font-bold uppercase tracking-wide text-baltic-blue-200" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-baltic-blue-900 px-4 py-3 align-top text-baltic-blue-100" {...props} />
  ),
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: BlogParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found - VibeBros Blog",
    };
  }

  return {
    title: `${post.title} - VibeBros Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: { params: BlogParams }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const sections = splitMarkdownIntoSections(post.content);

  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <BackButton />
        <Navbar />
        <article className="pt-32 pb-20">
          <div className="container max-w-4xl">
            <div className="mb-12">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-bold bg-cerulean-500/10 text-cerulean-400 border border-cerulean-500/20">
                  {post.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-baltic-blue-400">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="space-y-10">
              <div className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30 backdrop-blur-sm">
                <p className="text-xl text-baltic-blue-200 leading-relaxed">{post.excerpt}</p>
              </div>

              {sections.length > 1 ? (
                <nav className="p-6 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30 backdrop-blur-sm">
                  <p className="text-sm font-bold uppercase tracking-wide text-baltic-blue-400 mb-4">
                    On this page
                  </p>
                  <div className="grid gap-2 md:grid-cols-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="text-baltic-blue-200 hover:text-cerulean-300 transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </div>
                </nav>
              ) : null}

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30 backdrop-blur-sm"
                >
                  <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-invert prose-cerulean max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {section.content}
                    </ReactMarkdown>
                  </div>
                </section>
              ))}

              <div className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30 backdrop-blur-sm">
                <p className="text-lg text-baltic-blue-300">
                  Want more tutorials, recaps, and deep dives? Join the{" "}
                  <a
                    href="https://discord.gg/p6UWRMrj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cerulean-400 hover:underline font-bold"
                  >
                    VibeBros Discord community
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
