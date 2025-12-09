import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Carousel, CarouselItem } from "@/components/Carousel";
import { FeedItem } from "@/components/FeedItem";
import { Component as RevolutionHero } from "@/components/ui/revolution-hero";
import flowLinesVertical from "@/assets/flow-lines-vertical.svg";

// Sample featured content
const featuredProjects = [
  {
    id: "1",
    title: "Microgrid Resilience Toolkit",
    description: "Open-source framework for designing and simulating decentralized energy systems. Includes load forecasting, storage optimization, and grid-independence scoring.",
    date: "2024-03-15",
    tags: ["microgrids", "solar", "storage"],
    coverImage: flowLinesVertical,
    readingTime: 8,
    type: "project" as const,
  },
  {
    id: "2",
    title: "LCOE Calculator & Visualizer",
    description: "Interactive tool for comparing levelized cost of energy across technologies. Real-time sensitivity analysis with customizable inputs for financing, capacity factors, and degradation.",
    date: "2024-02-20",
    tags: ["lcoe", "financing", "solar"],
    readingTime: 6,
    type: "project" as const,
  },
  {
    id: "3",
    title: "On Building Energy Systems That Last",
    description: "Reflections on why most clean energy projects fail in year five—and the unglamorous infrastructure decisions that separate durable systems from demos.",
    date: "2024-03-20",
    tags: ["grid", "storage", "case-studies"],
    readingTime: 5,
    type: "journal" as const,
  },
];

const Index = () => {
  const sections = [
    {
      title: "Projects",
      description: "Technical projects, experiments, and builds showcasing my work and learning journey.",
      path: "/projects",
    },
    {
      title: "Idea Dumps",
      description: "Raw thoughts, concepts, and brainstorms—a collection of ideas waiting to be refined.",
      path: "/idea-dumps",
    },
    {
      title: "Journal",
      description: "Personal reflections, learnings, and experiences documented over time.",
      path: "/journal",
    },
    {
      title: "Resume",
      description: "Professional experience, skills, and achievements in one place.",
      path: "/resume",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* WebGL Hero */}
      <RevolutionHero />

      <div className="bg-background">
        <Header />

        {/* Featured Content Carousel */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 max-w-6xl border-b border-border">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 sm:mb-6 md:mb-8">Featured</h2>
          <Carousel>
            {featuredProjects.map((item) => (
              <CarouselItem key={`${item.type}-${item.id}`}>
                <FeedItem
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  path={`/${item.type === 'project' ? 'projects' : 'journal'}/${item.id}`}
                  tags={item.tags}
                  coverImage={item.coverImage}
                  readingTime={item.readingTime}
                />
              </CarouselItem>
            ))}
          </Carousel>
        </section>

        {/* Sections Grid */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="group border border-border p-6 sm:p-8 md:p-12 hover:bg-muted transition-colors"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 sm:mb-3 md:mb-4 group-hover:opacity-60 transition-opacity">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm uppercase tracking-widest font-medium">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
