import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { FeedItem } from "@/components/FeedItem";
import { Badge } from "@/components/ui/badge";
import { getTagById, getCategoryByTagId, getAllTags } from "@/data/knowledgeBase";
import { ArrowLeft } from "lucide-react";

// Mock content data - in a real app this would come from a database
const mockContent = [
  {
    id: "1",
    title: "Building Resilient Microgrids for Rural Communities",
    description: "Exploring distributed energy solutions for off-grid and underserved areas with focus on solar-storage combinations.",
    date: "2024-01-15",
    path: "/projects/microgrids",
    tags: ["microgrids", "solar", "storage", "community-solar"],
    readingTime: 8,
    type: "project",
  },
  {
    id: "2",
    title: "LCOE Trends in Renewable Energy 2024",
    description: "Analysis of levelized cost trajectories for solar, wind, and storage technologies over the past decade.",
    date: "2024-02-20",
    path: "/journal/lcoe-trends",
    tags: ["lcoe", "solar", "wind", "storage"],
    readingTime: 12,
    type: "journal",
  },
  {
    id: "3",
    title: "AI-Driven Grid Optimization Strategies",
    description: "Machine learning approaches for demand forecasting, load balancing, and renewable integration.",
    date: "2024-03-10",
    path: "/projects/ai-grid",
    tags: ["ai-ml", "grid", "der"],
    readingTime: 15,
    type: "project",
  },
  {
    id: "4",
    title: "Virtual Power Plant Architecture Patterns",
    description: "Technical deep-dive into aggregating distributed resources for grid services.",
    date: "2024-01-28",
    path: "/idea-dumps/vpp-patterns",
    tags: ["virtual-power-plants", "der", "grid", "storage"],
    readingTime: 6,
    type: "idea",
  },
  {
    id: "5",
    title: "Community Solar Policy Frameworks",
    description: "Comparative analysis of state-level regulations enabling shared solar programs.",
    date: "2024-02-05",
    path: "/journal/community-solar-policy",
    tags: ["community-solar", "regulation", "incentives"],
    readingTime: 10,
    type: "journal",
  },
];

const KnowledgeTag = () => {
  const { tagId } = useParams<{ tagId: string }>();
  const tag = tagId ? getTagById(tagId) : undefined;
  const category = tagId ? getCategoryByTagId(tagId) : undefined;

  if (!tag) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 md:px-8 py-8 md:py-16 max-w-7xl">
          <Link
            to="/knowledge"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Base
          </Link>
          <h1 className="text-2xl md:text-4xl font-serif text-foreground">Tag Not Found</h1>
          <p className="text-muted-foreground mt-4">
            The tag you're looking for doesn't exist.
          </p>
        </main>
      </div>
    );
  }

  // Filter content by this tag
  const relatedContent = mockContent.filter((item) =>
    item.tags.includes(tagId!)
  );

  // Get related tags (tags that appear alongside this one)
  const relatedTagIds = new Set<string>();
  relatedContent.forEach((item) => {
    item.tags.forEach((t) => {
      if (t !== tagId) relatedTagIds.add(t);
    });
  });
  const relatedTags = getAllTags().filter((t) => relatedTagIds.has(t.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8 md:py-16 max-w-7xl">
        <Link
          to="/knowledge"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 md:mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Knowledge Base
        </Link>

        <header className="mb-8 md:mb-12">
          {category && (
            <span className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-widest">
              {category.name}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-serif text-foreground mt-2">
            {tag.name}
          </h1>
          {tag.description && (
            <p className="text-base md:text-lg text-muted-foreground mt-3 md:mt-4 max-w-2xl">
              {tag.description}
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-2 font-mono">
            {relatedContent.length} related items
          </p>
        </header>

        {relatedTags.length > 0 && (
          <section className="mb-8 md:mb-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-3">
              Related Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedTags.map((relTag) => (
                <Link key={relTag.id} to={`/knowledge/${relTag.id}`}>
                  <Badge
                    variant="outline"
                    className="text-xs font-mono uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {relTag.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4 md:mb-6">
            Content
          </h2>
          {relatedContent.length > 0 ? (
            <div className="space-y-4 md:space-y-6">
              {relatedContent.map((item) => (
                <FeedItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  path={item.path}
                  tags={item.tags}
                  readingTime={item.readingTime}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No content tagged with "{tag.name}" yet.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default KnowledgeTag;
