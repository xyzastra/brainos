import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { FeedItem } from "@/components/FeedItem";

interface Idea {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: number;
}

// Synced with IdeaDumpDetail data
const ideaDumps: Idea[] = [
  {
    id: "6",
    title: "Hypnagogic Capture Interface",
    description:
      "Leveraging the 'hypnagogic' state—the transition between wakefulness and sleep—for creative problem solving. An audio-first hardware concept.",
    date: "2024-04-02",
    tags: ["Biofeedback", "Audio", "Experimental"],
    readingTime: 3,
  },
  {
    id: "5",
    title: "Diminished Reality Engine",
    description:
      "An AR concept that focuses on removing objects rather than adding them. Using inpainting to visualize interior design without the clutter.",
    date: "2024-03-30",
    tags: ["AR", "Computer Vision", "Design"],
    readingTime: 4,
  },
  {
    id: "4",
    title: "Autonomous Micro-Farming",
    description:
      "A hardware/software stack for high-yield aeroponic vertical gardens designed specifically for standard 600sqft city apartments.",
    date: "2024-03-25",
    tags: ["IoT", "Hardware", "Sustainability"],
    readingTime: 3,
  },
  {
    id: "1",
    title: "Adaptive Knowledge Graphs",
    description:
      "Moving beyond linear courses. A concept for a learning engine that maps student understanding using Knowledge Space Theory.",
    date: "2024-03-18",
    tags: ["AI", "EdTech", "Algorithms"],
    readingTime: 3,
  },
  {
    id: "2",
    title: "The Permaweb Library",
    description:
      "A proposal for a censorship-resistant, community-curated archive of human knowledge stored on the blockchain, immune to 'link rot'.",
    date: "2024-03-10",
    tags: ["Web3", "Arweave", "Archival"],
    readingTime: 4,
  },
  {
    id: "3",
    title: "Flow State Architecture",
    description:
      "Redesigning productivity tools to move beyond simple 'task tracking' and focusing on inducing and sustaining 'flow states'.",
    date: "2024-02-28",
    tags: ["UX", "Psychology", "Productivity"],
    readingTime: 3,
  },
];

const IdeaDumps = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-8 py-24 max-w-6xl">
        <SectionHeader
          title="Idea Dumps"
          description="Raw thoughts, unfiltered concepts, and creative brainstorms. This is where ideas are born before they're refined into full projects."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {ideaDumps.map((idea) => (
            <FeedItem
              key={idea.id}
              title={idea.title}
              description={idea.description}
              date={idea.date}
              path={`/idea-dumps/${idea.id}`}
              tags={idea.tags}
              readingTime={idea.readingTime}
            />
          ))}
        </div>

        {ideaDumps.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No ideas yet. Let your creativity flow!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default IdeaDumps;
