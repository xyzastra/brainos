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
    title: "Personal Knowledge Base",
    description: "A React-based knowledge management system for organizing projects, ideas, and journal entries with a clean, reader-first design.",
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    coverImage: flowLinesVertical,
    readingTime: 5,
    type: "project" as const,
  },
  {
    id: "2",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.",
    date: "2024-02-20",
    tags: ["D3.js", "React", "API Integration"],
    readingTime: 8,
    type: "project" as const,
  },
  {
    id: "1",
    title: "Reflections on Building in Public",
    description: "Thoughts on sharing my learning journey openly and the unexpected benefits of transparency in the development process.",
    date: "2024-03-20",
    tags: ["Learning", "Community", "Growth"],
    readingTime: 4,
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
        <section className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-10 lg:py-12 max-w-6xl border-b border-border">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6">Featured</h2>
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
