import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/* Pre-generate all blog post routes at build time */
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} — Siddharth`, description: post.description };
  } catch {
    return {};
  }
}

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
        },
      ],
    ],
  },
} as Parameters<typeof MDXRemote>[0]["options"];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="pt-14">
      <div className="mx-auto w-full max-w-[730px] px-6 sm:px-8">

        {/* Back link */}
        <div className="pt-10 pb-2">
          <Link
            href="/blog"
            className="text-xs text-muted hover:text-foreground transition-colors duration-150"
          >
            ← All posts
          </Link>
        </div>

        {/* Post header */}
        <header className="py-8 border-b border-border">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-4 leading-snug">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* MDX content */}
        <article className="prose py-10">
          <MDXRemote source={post.content} options={mdxOptions} />
        </article>

        {/* Footer nav */}
        <div className="pb-20 border-t border-border pt-8">
          <Link
            href="/blog"
            className="text-xs text-muted hover:text-foreground transition-colors duration-150"
          >
            ← Back to all posts
          </Link>
        </div>

      </div>
    </main>
  );
}
