import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { knowledgeBase, Category, Tag } from "@/data/knowledgeBase";
import { ChevronDown, ChevronRight } from "lucide-react";

const INITIAL_VISIBLE = 10;

const CategorySection = ({ category }: { category: Category }) => {
  const [expanded, setExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const visibleTags = showAll ? category.tags : category.tags.slice(0, INITIAL_VISIBLE);
  const hasMore = category.tags.length > INITIAL_VISIBLE;

  return (
    <section className="mb-6 md:mb-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-foreground font-serif text-lg md:text-xl font-medium mb-3 hover:opacity-70 transition-opacity w-full text-left"
      >
        {expanded ? (
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
        )}
        {category.name}
        <span className="text-muted-foreground text-sm font-mono ml-auto">
          {category.tags.length}
        </span>
      </button>

      {expanded && (
        <div className="pl-4 md:pl-6 border-l border-border">
          <ul className="space-y-1">
            {visibleTags.map((tag) => (
              <TagItem key={tag.id} tag={tag} />
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-muted-foreground hover:text-foreground mt-2 font-mono uppercase tracking-wider"
            >
              {showAll ? "Show Less" : `Load More (${INITIAL_VISIBLE}/${category.tags.length})`}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

const TagItem = ({ tag }: { tag: Tag }) => {
  return (
    <li>
      <Link
        to={`/knowledge/${tag.id}`}
        className="group flex items-baseline gap-2 py-1 text-sm md:text-base hover:text-foreground transition-colors"
      >
        <span className="text-foreground group-hover:opacity-70 transition-opacity">
          {tag.name}
        </span>
        <span className="text-muted-foreground text-xs font-mono">
          ({tag.contentCount})
        </span>
      </Link>
    </li>
  );
};

const Knowledge = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = knowledgeBase
    .map((category) => ({
      ...category,
      tags: category.tags.filter((tag) =>
        tag.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.tags.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8 md:py-16 max-w-7xl">
        <SectionHeader
          title="Knowledge Base"
          description="Concepts, frameworks, and ideas organized by domain. Click any tag to explore related content."
        />

        <div className="mt-6 md:mt-8 mb-8 md:mb-12">
          <input
            type="text"
            placeholder="Search tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCategories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <p className="text-muted-foreground text-center py-12">
            No tags found matching "{searchQuery}"
          </p>
        )}
      </main>
    </div>
  );
};

export default Knowledge;
