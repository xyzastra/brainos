import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const journalEntries = {
  "1": {
    id: "1",
    title: "Reflections on Building in Public",
    description: "Thoughts on sharing my learning journey openly and the unexpected benefits of transparency in the development process.",
    date: "2024-03-20",
    tags: ["Learning", "Community", "Growth"],
    content: `
## Starting the Journey

When I first decided to share my work publicly, I was terrified. What if people judged my code? What if I made mistakes in front of everyone?

## What I've Learned

Building in public has been transformative:

- Accountability drives consistency
- Community feedback accelerates learning
- Documenting helps solidify understanding
- Vulnerability builds genuine connections

## The Unexpected Benefits

The most surprising outcome has been the connections I've made. People reach out to share their own experiences, offer advice, and collaborate on ideas.

## Moving Forward

I'm committed to continuing this practice. The benefits far outweigh the initial discomfort of exposure.

## Key Takeaways

- Start before you're ready
- Share your struggles, not just successes
- Engage with your community authentically
- Document everything—future you will thank present you
    `,
  },
  "2": {
    id: "2",
    title: "Overcoming Imposter Syndrome",
    description: "Personal insights on dealing with self-doubt in tech and strategies that have helped me move forward confidently.",
    date: "2024-03-12",
    tags: ["Mental Health", "Career", "Personal"],
    content: `
## The Struggle is Real

Even after years in tech, I still sometimes feel like I don't belong. That voice saying "you're not good enough" never fully goes away.

## What Changed

Instead of fighting imposter syndrome, I learned to acknowledge it and move forward anyway:

- Recognize it's a sign I'm growing
- Focus on progress, not perfection
- Celebrate small wins
- Build a support network

## Practical Strategies

What actually helps:

- Keep a "wins" journal
- Talk openly about struggles
- Remember: everyone feels this way
- Measure growth by looking back, not ahead

## The Truth

Imposter syndrome doesn't mean you're an imposter. It means you're challenging yourself.
    `,
  },
  "3": {
    id: "3",
    title: "The Power of Documentation",
    description: "Why I started documenting everything and how it has transformed my approach to learning and problem-solving.",
    date: "2024-03-05",
    tags: ["Documentation", "Learning", "Productivity"],
    content: `
## Why Document?

I used to think documentation was a waste of time. I was wrong.

## The Transformation

When I started writing everything down:

- Solutions became reusable
- Learning became deeper
- Communication became clearer
- Knowledge became shareable

## My Documentation System

What works for me:

- Daily work logs
- Project READMEs
- Personal wiki
- Code comments
- This knowledge base

## The Meta Insight

Documenting the documentation process itself has been enlightening. Writing about writing reveals patterns in thinking.

## Advice to My Past Self

Start documenting today. Your future self will thank you. Don't worry about perfection—just start.
    `,
  },
};

const JournalDetail = () => {
  const { id } = useParams();
  const entry = id ? journalEntries[id as keyof typeof journalEntries] : null;

  if (!entry) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-8 py-24 max-w-4xl text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Entry Not Found</h1>
          <p className="text-muted-foreground mb-8">The journal entry you're looking for doesn't exist.</p>
          <Link to="/journal">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Journal
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-8 py-24 max-w-4xl">
        <Link to="/journal" className="inline-flex items-center text-sm mb-8 hover:opacity-60 transition-opacity uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Journal
        </Link>

        <article>
          <header className="mb-12 pb-8 border-b border-border">
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-4">
              <time dateTime={entry.date}>
                {new Date(entry.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              {entry.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {entry.description}
            </p>
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-mono uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            {entry.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('##')) {
                return (
                  <h2 key={index} className="text-3xl font-serif font-bold mt-12 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              if (paragraph.trim().startsWith('-')) {
                return (
                  <li key={index} className="ml-6 my-2">
                    {paragraph.replace('-', '').trim()}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>
      </main>
    </div>
  );
};

export default JournalDetail;
