import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { FeedItem } from "@/components/FeedItem";
import { ColumnLayout } from "@/components/ColumnLayout";

interface JournalEntry {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: number;
}

// Sample journal entries data
const journalEntries: JournalEntry[] = [
  {
    id: "4",
    title: "The Art of Slow Programming",
    description:
      "Counter-intuitive lessons on why slowing down the coding process and resisting the urge to 'ship fast' actually leads to faster, more stable releases.",
    date: "2024-04-15",
    tags: ["Philosophy", "Coding", "Productivity"],
    readingTime: 5,
  },
  {
    id: "5",
    title: "Digital Minimalism Reset",
    description:
      "My experience taking a 7-day dopamine detox from social media and how it drastically improved my ability to perform deep work.",
    date: "2024-04-05",
    tags: ["Lifestyle", "Focus", "Mental Health"],
    readingTime: 7,
  },
  {
    id: "6",
    title: "Designing for Accessibility First",
    description:
      "Moving beyond compliance: how thinking about screen readers and keyboard navigation changed the way I structure my React components.",
    date: "2024-03-28",
    tags: ["A11y", "Design", "Engineering"],
    readingTime: 4,
  },
  {
    id: "1",
    title: "Reflections on Building in Public",
    description:
      "Thoughts on sharing my learning journey openly and the unexpected benefits of transparency in the development process.",
    date: "2024-03-20",
    tags: ["Learning", "Community", "Growth"],
    readingTime: 4,
  },
  {
    id: "2",
    title: "Overcoming Imposter Syndrome",
    description:
      "Personal insights on dealing with self-doubt in tech and strategies that have helped me move forward confidently.",
    date: "2024-03-12",
    tags: ["Mental Health", "Career", "Personal"],
    readingTime: 6,
  },
  {
    id: "3",
    title: "The Power of Documentation",
    description:
      "Why I started documenting everything and how it has transformed my approach to learning and problem-solving.",
    date: "2024-03-05",
    tags: ["Documentation", "Learning", "Productivity"],
    readingTime: 5,
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-8 py-24 max-w-6xl">
        <SectionHeader
          title="Journal"
          description="Personal reflections, learnings, and experiences captured over time. A space for introspection and growth."
        />

        <ColumnLayout columns={2}>
          {journalEntries.map((entry) => (
            <FeedItem
              key={entry.id}
              title={entry.title}
              description={entry.description}
              date={entry.date}
              path={`/journal/${entry.id}`}
              tags={entry.tags}
              readingTime={entry.readingTime}
            />
          ))}
        </ColumnLayout>

        {journalEntries.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No journal entries yet. Start documenting your journey!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Journal;
