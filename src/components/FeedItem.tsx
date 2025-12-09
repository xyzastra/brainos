import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";

interface FeedItemProps {
  title: string;
  description: string;
  date: string;
  path: string;
  tags?: string[];
  coverImage?: string;
  readingTime?: number;
}

export const FeedItem = ({ title, description, date, path, tags, coverImage, readingTime }: FeedItemProps) => {
  return (
    <Link to={path} className="group block">
      <article className="h-full flex flex-col justify-between border border-border p-4 sm:p-5 md:p-6 rounded-lg hover:border-foreground/50 transition-colors bg-card text-card-foreground">
        {coverImage && (
          <div className="relative w-full aspect-[4/3] sm:aspect-[10/8] overflow-hidden rounded-sm mb-3 sm:mb-4">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono mb-2 sm:mb-4">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            {readingTime && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  {readingTime} min
                </span>
              </>
            )}
          </div>
          
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold mb-2 sm:mb-3 group-hover:underline decoration-1 underline-offset-4 leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-border/50">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="inline-flex items-center text-xs sm:text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            Read <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
};
