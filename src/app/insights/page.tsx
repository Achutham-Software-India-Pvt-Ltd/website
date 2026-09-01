import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/Cards";
import { blogPosts, blogCategories } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Perspectives on software engineering, QA automation, performance engineering, AI, cloud, IT staffing and engineering leadership.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Engineering Perspectives"
        description="These are sample article concepts illustrating the topics Achutham will publish on — marked as drafts until real articles are written and reviewed."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-body"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
