import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function PostCard({
  slug,
  title,
  date,
  description,
  readingTime,
  tags,
}: PostMeta) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="
        group block border border-border rounded-lg p-5
        transition-colors duration-150 hover:border-foreground/20
      "
    >
      {/* Top row: title + reading time */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-sm font-semibold text-foreground leading-snug">
          {title}
        </h3>
        <span className="text-xs text-muted shrink-0 mt-0.5">{readingTime}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-3">{description}</p>

      {/* Footer row: date + tags */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs text-muted">{formatDate(date)}</span>
        {tags && tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap justify-end">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded-full border border-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
