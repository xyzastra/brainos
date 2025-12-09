import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Journal", path: "/journal" },
  { name: "Ideas", path: "/idea-dumps" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

export const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="text-lg sm:text-xl font-serif font-bold tracking-tight">
          BrainOS
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navigation.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={cn(
                "text-xs sm:text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider",
                isActive(item.path) ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-56">
            <div className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider py-2",
                    isActive(item.path) ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
