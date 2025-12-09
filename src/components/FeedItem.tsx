import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeedItemProps {
  title: string;
  description: string;
  date: string;
  path: string;
  tags?: string[];
  coverImage?: string;
  readingTime?: number;
}

export const FeedItem = ({
  title,
  description,
  date,
  path,
  tags,
  coverImage,
  readingTime
}: FeedItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <article className="feed-item group relative border border-border p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all duration-200 rounded-sm">
      <Link 
        to={path} 
        className="absolute inset-0 z-10"
        aria-label={`Read more about ${title}`}
      />
      
      <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
        {coverImage && (
          <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[10/8] overflow-hidden rounded-sm -mx-3 -mt-3 sm:-mx-4 sm:-mt-4 md:-mx-6 md:-mt-6 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] md:w-[calc(100%+3rem)]">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="flex-1 space-y-2 sm:space-y-2.5 md:space-y-3">
          <div className="flex items-center justify-between text-[10px] sm:text-xs md:text-sm text-muted-foreground font-mono">
            <time dateTime={date}>{formattedDate}</time>
            {readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {readingTime} min
              </span>
            )}
          </div>

          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-semibold group-hover:opacity-70 transition-opacity leading-snug">
            {title}
          </h2>

          <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-1.5 relative z-20 pt-1">
              {tags.map((tag) => (
                <Link 
                  key={tag} 
                  to={`/knowledge/${tag}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-[9px] sm:text-[10px] md:text-xs px-1.5 py-0.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer font-mono lowercase"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
