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
    <article className="feed-item group relative border border-border p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-200">
      <Link 
        to={path} 
        className="absolute inset-0 z-10"
        aria-label={`Read more about ${title}`}
      />
      
      <div className="flex flex-col gap-3 sm:gap-4">
        {coverImage && (
          <div className="relative w-full aspect-[4/3] sm:aspect-[10/8] overflow-hidden rounded-sm">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2 text-xs sm:text-sm text-muted-foreground">
            <time dateTime={date}>{formattedDate}</time>
            {readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readingTime} min read
              </span>
            )}
          </div>

          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-semibold mb-2 sm:mb-3 group-hover:opacity-70 transition-opacity leading-tight">
            {title}
          </h1>

          <p className="par text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-[10px] sm:text-xs pointer-events-none px-1.5 sm:px-2 py-0.5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
