import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContentCardProps {
  title: string;
  description: string;
  date: string;
  path: string;
  tags?: string[];
}

export const ContentCard = ({ title, description, date, path, tags }: ContentCardProps) => {
  return (
    <Link to={path} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-xl border-border">
        <CardHeader className="space-y-4">
          <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono">
            <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</time>
          </div>
          <CardTitle className="text-2xl font-serif group-hover:opacity-60 transition-opacity">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </CardHeader>
        {tags && tags.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs font-mono uppercase tracking-wider">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  );
};
