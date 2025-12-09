import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ArrowRight, BookOpen, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center max-w-5xl">
        <div className="space-y-6 sm:space-y-8 py-12 sm:py-16 md:py-24">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tight text-foreground animate-fade-in">
              BrainOS<span className="text-primary">.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              A digital garden for raw ideas, engineering logs, and ongoing experiments. 
              Documenting the process of building, learning, and failing in public.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6 md:pt-8">
            <Link to="/journal" className="group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-full border border-border p-5 sm:p-6 md:p-8 rounded-lg hover:bg-secondary/30 hover:border-foreground/30 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-foreground" />
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-1.5 sm:mb-2">The Journal</h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Long-form reflections on engineering, mental models, and the "why" behind the code.
                </p>
              </div>
            </Link>

            <Link to="/idea-dumps" className="group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-full border border-border p-5 sm:p-6 md:p-8 rounded-lg hover:bg-secondary/30 hover:border-foreground/30 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Brain className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-foreground" />
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-1.5 sm:mb-2">Idea Dumps</h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Product specs, RFCs, and raw concepts. The "what" and "how" of potential future projects.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} BrainOS. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Index;
