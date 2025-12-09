import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JournalEntry {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

const journalEntries: Record<string, JournalEntry> = {
  "1": {
    id: "1",
    title: "The ROI of Vulnerability",
    description:
      "Why sharing unfinished work and admitting mistakes publicly has yielded higher returns than any polished portfolio piece.",
    date: "2024-03-20",
    tags: ["Learning", "Community", "Growth"],
    content: `
## The Fear of "Unfinished"

For years, I hoarded my code. I waited until every edge case was covered and every pixel was perfect before clicking publish. I was optimizing for a perception of perfection that didn't exist.

## Shifting to "Building in Public"

I decided to run an experiment: ship the prototype, not the product. The results were immediate and counter-intuitive.

- **Feedback Loops:** By sharing early, I caught architectural flaws weeks before they became technical debt.
- **Network Effects:** People don't connect with polished PR releases; they connect with the struggle. My engagement tripled when I started posting about bugs I couldn't solve.

## The Compound Interest of Transparency

Documenting the journey publicly creates a searchable archive of your growth. It serves as a living resume that says "this is how I solve problems" rather than just "this is what I built."

## Moving Forward

I am now committed to "learning loudly." If I learn a new hook in React, I write about it. If I crash a production database, I write a post-mortem. Vulnerability is a feature, not a bug.
    `,
  },
  "2": {
    id: "2",
    title: "Reframing Imposter Syndrome",
    description:
      "Imposter syndrome isn't a defect; it's a data point. Here is how I learned to use fear as a compass for technical growth.",
    date: "2024-03-12",
    tags: ["Mental Health", "Career", "Mindset"],
    content: `
## The Signal vs. The Noise

We often interpret the feeling of "I don't know what I'm doing" as a signal to stop. I've learned to interpret it as a signal that I am in the right room.

## The Comfort Zone Paradox

If you never feel like an imposter, you are likely over-qualified for your current problems. Growth only happens in the zone of uncertainty.

## Tactical Reframing

I've adopted a few mental models to cope:

- **The "Not Yet" Mindset:** I don't know GraphQL *yet*. The temporal qualifier makes all the difference.
- **Documentation as Defense:** When I feel lost, I document my confusion. Usually, the act of writing down *why* I am confused solves the problem.
- **Curiosity over Competence:** I replaced the need to look smart with the need to be curious. It is much easier to ask "how does this work?" than to pretend you already know.

## Conclusion

The goal isn't to kill imposter syndrome; it's to make friends with it. It keeps you sharp.
    `,
  },
  "3": {
    id: "3",
    title: "Writing is Thinking",
    description:
      "Why documentation is the highest-leverage activity a developer can do, and why it's actually the most critical part of the engineering stack.",
    date: "2024-03-05",
    tags: ["Documentation", "System Design", "Productivity"],
    content: `
## The Myth of "Later"

"I'll write the docs later." This is the biggest lie in software engineering. Documentation isn't a chore to be done after the code is written; it is the design process itself.

## The Rubber Duck Effect

I've found that writing a Request for Comment (RFC) or a technical spec *before* writing code reduces the actual coding time by 50%.

- **Clarity of Thought:** You cannot write clear documentation for muddy logic. If the sentence is hard to write, the code will be hard to maintain.
- **Asynchronous Scale:** Good documentation allows your knowledge to be in two places at once. It answers questions while you sleep.

## My Stack for Thinking

- **Obsidian:** For connecting disparate ideas and building a "second brain."
- **Notion:** For project management and structured team wikis.
- **In-Code Comments:** Explaining the *why*, not the *how*. The code explains the how.

## Final Thought

Code is read 10x more than it is written. Optimize for the reader, even if the reader is just you, six months from now.
    `,
  },
  "4": {
    id: "4",
    title: "Strategic Slowness",
    description:
      "In an industry obsessed with speed, I argue that slowing down the coding process is the only way to actually move fast.",
    date: "2024-04-15",
    tags: ["Philosophy", "Coding", "Performance"],
    content: `
## The Velocity Trap

We confuse "motion" with "progress." typing fast doesn't mean shipping value. In fact, rushing often leads to "negative velocity"—where we spend more time fixing regressions than building features.

## The Navy SEAL Mantra

"Slow is smooth. Smooth is fast."

I applied this to my workflow:
- **Measure Twice, Cut Once:** I spend 40% of my time sketching data structures before I write a single component.
- **TDD (Test Driven Development):** It feels slower to write the test first, but it eliminates the "refresh-click-check" loop that eats up hours of dev time.

## The Results

Since adopting "Slow Programming":
- My bug rate dropped by 60%.
- My code reviews are approved faster because the logic is sound.
- I leave work with more energy because I wasn't panic-fixing all day.

## Conclusion

Speed is a byproduct of accuracy. You can't hack your way to a stable architecture.
    `,
  },
  "5": {
    id: "5",
    title: "Reclaiming Attention",
    description:
      "A deep dive into my 7-day dopamine detox and the cognitive costs of context switching in modern software development.",
    date: "2024-04-05",
    tags: ["Deep Work", "Focus", "Mental Health"],
    content: `
## The Fragmented Mind

I realized I wasn't just distracted; I was chemically dependent on distraction. A notification badge gave me a hit that solving a complex algorithm couldn't compete with.

## The Protocol

I went nuclear for one week:
- **Grayscale Mode:** Turning the phone screen black and white removes the slot-machine appeal.
- **The "Boredom" Rule:** If I'm waiting in line or on a train, I am not allowed to check my phone. I must endure the boredom.

## The Deep Work ROI

The first 48 hours were agonizing. My brain itched for input. But by day 4, something clicked.

- **Sustained Focus:** I wrote a complex API integration in one 3-hour flow state. That usually takes me two days of fragmented work.
- **Emotional Regulation:** The background anxiety of "missing out" vanished.

## The Takeaway

Your attention is your most valuable asset as a knowledge worker. Protect it like you protect your production keys.
    `,
  },
  "6": {
    id: "6",
    title: "Invisible UX: Accessibility",
    description:
      "Moving beyond compliance checklists. How designing for screen readers and keyboard navigation fundamentally improved my UI architecture.",
    date: "2024-03-28",
    tags: ["A11y", "Design", "Engineering"],
    content: `
## Beyond the Checklist

I used to view Accessibility (A11y) as a legal requirement—something to patch in at the end. I was wrong. A11y is a quality metric.

## The Curb-Cut Effect

When you design for disabilities, you improve the experience for everyone.
- **Semantic HTML:** Using proper semantic tags isn't just for screen readers; it makes the code easier to read and boosts SEO significantly.
- **Keyboard Navigation:** Power users hate reaching for the mouse. Building for motor impairments creates a lightning-fast experience for power users.

## My "No-Mouse" Challenge

I challenged myself to navigate my entire application using only \`Tab\` and \`Enter\`. It was a disaster. I had broken outline styles, focus traps, and un-clickable divs.

## The Fix

I stopped using \`div onClick\` and started using \`button\`. I stopped removing focus rings. I started respecting the DOM order.

## Result

The code is cleaner. The app is robust. And it is usable by everyone.
    `,
  },
};

const JournalDetail = () => {
  const { id } = useParams();
  const entry = id ? journalEntries[id] : null;

  // Helper function to render content with proper HTML structure
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let listBuffer: JSX.Element[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Skip empty lines
      if (!trimmed) return;

      if (trimmed.startsWith("-")) {
        // Collect list items
        listBuffer.push(
          <li key={`li-${index}`} className="ml-6 my-2 pl-2 marker:text-foreground/50">
            {trimmed
              .replace("-", "")
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .trim()
              .split(/<\/?strong>/)
              .map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold text-foreground">
                    {part}
                  </strong>
                ) : (
                  part
                ),
              )}
          </li>,
        );
      } else {
        // If we were building a list, flush it now
        if (listBuffer.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc list-outside mb-6 text-lg text-muted-foreground">
              {listBuffer}
            </ul>,
          );
          listBuffer = [];
        }

        // Render headings or paragraphs
        if (trimmed.startsWith("##")) {
          elements.push(
            <h2 key={`h2-${index}`} className="text-3xl font-serif font-bold mt-12 mb-6 text-foreground tracking-tight">
              {trimmed.replace("##", "").trim()}
            </h2>,
          );
        } else {
          // Basic bold parsing for paragraphs
          const parts = trimmed.split(/\*\*(.*?)\*\*/g);
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {parts.map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold text-foreground">
                    {part}
                  </strong>
                ) : (
                  part
                ),
              )}
            </p>,
          );
        }
      }
    });

    // Flush any remaining list items at the end
    if (listBuffer.length > 0) {
      elements.push(
        <ul key="ul-end" className="list-disc list-outside mb-6 text-lg text-muted-foreground">
          {listBuffer}
        </ul>,
      );
    }

    return elements;
  };

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
        <Link
          to="/journal"
          className="inline-flex items-center text-sm mb-8 hover:opacity-60 transition-opacity uppercase tracking-widest text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Journal
        </Link>

        <article>
          <header className="mb-12 pb-8 border-b border-border">
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-4">
              <time dateTime={entry.date}>
                {new Date(entry.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
              {entry.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">{entry.description}</p>
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

          <div className="prose prose-lg max-w-none">{renderContent(entry.content)}</div>
        </article>
      </main>
    </div>
  );
};

export default JournalDetail;
