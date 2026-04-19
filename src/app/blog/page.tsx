import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";
import { Container } from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Siddharth",
  description: "Writing on machine learning, backend systems, and software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-14">
      <Container>
        <section className="py-20 sm:py-28">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-3">
            Blog
          </h1>
          <p className="text-sm text-muted mb-10">
            Writing on machine learning, backend systems, and things I find interesting.
          </p>

          {posts.length === 0 ? (
            <p className="text-sm text-muted">No posts yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}
