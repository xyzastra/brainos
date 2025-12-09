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
    title: "Lucid Dream Journal Interface",
    description:
      "An audio-first journal app designed to be used with eyes closed immediately upon waking to capture dream details.",
    date: "2024-04-02",
    tags: ["Health", "Audio", "Experimental"],
    readingTime: 3,
  },
  {
    id: "5",
    title: "AR Interior Design Overlay",
    description:
      "Real-time augmented reality tool that removes existing furniture from the camera feed to visualize new layouts cleanly.",
    date: "2024-03-30",
    tags: ["AR", "Computer Vision", "Design"],
    readingTime: 4,
  },
  {
    id: "4",
    title: "Micro-Vertical Urban Farming",
    description:
      "A modular IoT system designed for high-density apartment living that automates the growth of essential herbs and microgreens.",
    date: "2024-03-25",
    tags: ["IoT", "Sustainability", "Hardware"],
    readingTime: 3,
  },
  {
    id: "1",
    title: "AI-Powered Learning Assistant",
    description:
      "Concept for an adaptive learning platform that personalizes content based on individual learning patterns and pace.",
    date: "2024-03-18",
    tags: ["AI", "Education", "Concept"],
    readingTime: 3,
  },
  {
    id: "2",
    title: "Decentralized Knowledge Sharing",
    description:
      "Exploring blockchain-based systems for preserving and sharing knowledge across communities without centralized control.",
    date: "2024-03-10",
    tags: ["Blockchain", "Web3", "Community"],
    readingTime: 4,
  },
  {
    id: "3",
    title: "Productivity Through Gamification",
    description:
      "Ideas for incorporating game mechanics into daily productivity tools to increase motivation and engagement.",
    date: "2024-02-28",
    tags: ["Gamification", "Productivity", "UX"],
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
