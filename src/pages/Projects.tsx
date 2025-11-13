import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { FeedItem } from "@/components/FeedItem";
import { Carousel, CarouselItem } from "@/components/Carousel";
import flowLinesVertical from "@/assets/flow-lines-vertical.svg";

// Sample project data with cover images
const projects = [
  {
    id: "1",
    title: "Personal Knowledge Base",
    description: "A React-based knowledge management system for organizing projects, ideas, and journal entries with a clean, reader-first design.",
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    coverImage: flowLinesVertical,
    readingTime: 5,
  },
  {
    id: "2",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.",
    date: "2024-02-20",
    tags: ["D3.js", "React", "API Integration"],
    readingTime: 8,
  },
  {
    id: "3",
    title: "Automation Toolkit",
    description: "Collection of Python scripts for automating repetitive tasks and improving workflow efficiency.",
    date: "2024-01-10",
    tags: ["Python", "Automation", "CLI"],
    readingTime: 6,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-8 py-24 max-w-6xl">
        <SectionHeader
          title="Projects"
          description="A showcase of technical projects, experiments, and builds that represent my journey in software development and creative problem-solving."
        />

        {/* Featured Projects Carousel */}
        {projects.length > 3 && (
          <section className="mb-16">
            <h3 className="text-2xl font-serif font-semibold mb-6">Featured</h3>
            <Carousel>
              {projects.slice(0, 3).map((project) => (
                <CarouselItem key={project.id}>
                  <FeedItem
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    path={`/projects/${project.id}`}
                    tags={project.tags}
                    coverImage={project.coverImage}
                    readingTime={project.readingTime}
                  />
                </CarouselItem>
              ))}
            </Carousel>
          </section>
        )}

        {/* All Projects Grid */}
        <section>
          <h3 className="text-2xl font-serif font-semibold mb-6">All Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <FeedItem
                key={project.id}
                title={project.title}
                description={project.description}
                date={project.date}
                path={`/projects/${project.id}`}
                tags={project.tags}
                coverImage={project.coverImage}
                readingTime={project.readingTime}
              />
            ))}
          </div>
        </section>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects yet. Start building!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;
