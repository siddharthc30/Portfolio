import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

/**
 * Returns metadata for all posts, sorted newest first.
 * Reads only frontmatter — does not parse MDX body.
 */
export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        tags: data.tags as string[] | undefined,
        readingTime: rt.text,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

/**
 * Returns full post data including raw MDX content for a given slug.
 * Throws if the file does not exist.
 */
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: data.tags as string[] | undefined,
    readingTime: rt.text,
    content,
  };
}

/** Formats an ISO date string to a human-readable form. */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
