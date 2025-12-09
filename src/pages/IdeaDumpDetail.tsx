import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Idea {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

const ideaDumps: Record<string, Idea> = {
  "1": {
    id: "1",
    title: "Adaptive Knowledge Graphs",
    description:
      "Moving beyond linear courses. A concept for a learning engine that maps student understanding using Knowledge Space Theory to predict optimal learning paths.",
    date: "2024-03-18",
    tags: ["AI", "EdTech", "Algorithms"],
    content: `
## The Problem with Linear Learning

Traditional education treats learning as a straight line. But knowledge is a **graph**. Understanding "React" requires understanding "JavaScript," which requires understanding "Variables."

## The Core Concept

An engine that builds a dynamic **Directed Acyclic Graph (DAG)** of concepts for every user.
- **Node Status:** Track which concepts are "mastered," "ready to learn," or "blocked."
- **Spaced Repetition:** Use interaction data to surface review nodes exactly when the forgetting curve dips.

## Technical Architecture



- **Backend:** Neo4j or similar graph database to store concept relationships.
- **Inference Engine:** Bayesian Knowledge Tracing (BKT) to estimate the probability that a student knows a specific skill based on past performance.
- **Content Generation:** LLMs to generate quizzes dynamically based on the specific "fringe" nodes the student is currently tackling.

## Why this is hard

Balancing the "explore vs. exploit" trade-off. Do we reinforce what they know (confidence) or push them to new nodes (progress)?
    `,
  },
  "2": {
    id: "2",
    title: "The Permaweb Library",
    description:
      "A proposal for a censorship-resistant, community-curated archive of human knowledge stored on the blockchain, immune to 'link rot'.",
    date: "2024-03-10",
    tags: ["Web3", "Arweave", "Archival"],
    content: `
## The Fragility of HTTP

The average lifespan of a webpage is roughly 100 days. "Link rot" is destroying our digital history. Centralized servers go down, companies go bankrupt, and paywalls rise.

## The Solution: Permanent Storage

Using **Arweave** or **IPFS** to create a "pay once, store forever" model.
- **Content Addressing:** Files are retrieved by *what* they are (hash), not *where* they are (URL).
- **Incentive Layer:** A token-curated registry where curators stake tokens to vouch for the quality and accuracy of archived content.

## Challenges

- **The Right to be Forgotten:** How do we handle sensitive data or GDPR requests in an immutable ledger?
- **Searchability:** Indexing decentralized content is significantly harder than crawling a centralized web.
- **Cost:** Storing petabytes of data on-chain is expensive. We need a "hot/cold" storage tiering system.
    `,
  },
  "3": {
    id: "3",
    title: "Flow State Architecture",
    description:
      "Redesigning productivity tools to move beyond simple 'task tracking' and focusing on inducing and sustaining 'flow states' through micro-interactions.",
    date: "2024-02-28",
    tags: ["UX", "Psychology", "Productivity"],
    content: `
## Beyond Gamification

Most "gamified" apps just slap badges on a todo list. That's extrinsic motivation, and it wears off. **Flow** is intrinsic.

## The Loop Design

We need to design for the **Hook Model**:
- **Trigger:** Context-aware notifications (e.g., "You have 20 mins before your next meeting, perfect time for a quick task").
- **Action:** Frictionless entry. Command-K menus, keyboard-first navigation.
- **Variable Reward:** Visual feedback that feels physical. Satisfying "thump" sounds, confetti physics, progress bars that fill up fluidly.

## "Focus Mode" Mechanics



[Image of flow state diagram]


- **The White Noise Layer:** Built-in generative soundscapes that adapt to the user's typing speed.
- **Pomodoro 2.0:** Dynamic timer lengths based on the task complexity, not arbitrary 25-minute blocks.
- **Blocking Distractions:** Hard integrations with OS-level focus modes to kill Slack notifications during sprints.
    `,
  },
  "4": {
    id: "4",
    title: "Autonomous Micro-Farming",
    description:
      "A hardware/software stack for high-yield aeroponic vertical gardens designed specifically for standard 600sqft city apartments.",
    date: "2024-03-25",
    tags: ["IoT", "Hardware", "Sustainability"],
    content: `
## The Hardware Spec

A wall-mounted unit (approx 2ft x 4ft) functioning as a closed-loop ecosystem.
- **Aeroponics:** High-pressure misting nozzles deliver nutrients directly to roots suspended in air. Uses **95% less water** than soil farming.
- **Lighting:** Multispectral LED arrays that adjust the red/blue ratio depending on the plant's growth stage (vegetative vs. flowering).

## The Software Layer



[Image of aeroponics system diagram]


The "Green Thumb" Algorithm:
- **Computer Vision:** A camera inside the unit tracks leaf surface area and color to detect nutrient deficiencies or pests before the human eye can.
- **Recipe Marketplace:** Users download "growth recipes" (specific light/mist schedules) for specific crops like Basil, Arugula, or Strawberries.

## Feasibility Checks

- **Noise:** The water pump needs to be whisper-quiet (<30dB) to live in a studio apartment.
- **Failure States:** If the pump fails, plants die in hours. Needs battery backup and redundant sensors.
    `,
  },
  "5": {
    id: "5",
    title: "Diminished Reality Engine",
    description:
      "An AR concept that focuses on removing objects rather than adding them. Using inpainting to visualize interior design without the clutter.",
    date: "2024-03-30",
    tags: ["AR", "Computer Vision", "Design"],
    content: `
## The Occlusion Problem

Current AR apps allow you to place a virtual IKEA sofa in your room. But if your *old* sofa is still there, the illusion breaks immediately.

## The Tech: Real-Time Inpainting

We need to combine **Lidar Scanning** with **Generative Adversarial Networks (GANs)**.
1.  **Segmentation:** Identify the object to be removed (e.g., the old chair).
2.  **Removal:** Mask the object out of the video feed.
3.  **Hallucination:** The AI looks at the surrounding floor/wall texture and "hallucinates" what should be behind the object to fill the gap.

## Use Cases

- **Real Estate Staging:** Decluttering messy tenant apartments virtually for listing photos.
- **Renovation Planning:** Visualizing a wall removal by erasing the wall in real-time.
    `,
  },
  "6": {
    id: "6",
    title: "Hypnagogic Capture Interface",
    description:
      "Leveraging the 'hypnagogic' state—the transition between wakefulness and sleep—for creative problem solving. An audio-first hardware concept.",
    date: "2024-04-02",
    tags: ["Biofeedback", "Audio", "Experimental"],
    content: `
## The Science

History's greatest thinkers (Edison, Dali) used the hypnagogic state to generate ideas. It's a period of loose associative thinking. The problem is we usually fall asleep and forget them.

## The Interaction Design

A bedside device (no screen) or a haptic pillow.
- **Input:** Voice-activated, but optimized for whispers (using high-gain mics and noise gating).
- **The "Anchor":** A gentle haptic vibration that keeps the user tethered to consciousness without fully waking them up.

## The Data Pipeline

- **Transcription:** On-device speech-to-text (privacy first).
- **Auto-Tagging:** LLM summarization to categorize the "dream logic" into actionable concepts the next morning.
- **Bio-feedback:** Integration with Oura/Apple Watch to detect the exact moment of sleep onset.
    `,
  },
};

const IdeaDumpDetail = () => {
  const { id } = useParams();
  const idea = id ? ideaDumps[id] : null;

  // Helper function to render content with proper HTML structure and bold parsing
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let listBuffer: JSX.Element[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Skip empty lines
      if (!trimmed) return;

      if (trimmed.startsWith("-")) {
        // Collect list items with bold formatting support
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
        } else if (trimmed.startsWith("[Image of")) {
          // Optional: Handle image placeholders if you have an image component
          // For now, we render nothing or a placeholder div
          // This is just to prevent raw text rendering of the tag
        } else {
          // Paragraphs with bold formatting support
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

  if (!idea) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-8 py-24 max-w-4xl text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Idea Not Found</h1>
          <p className="text-muted-foreground mb-8">The idea you're looking for doesn't exist.</p>
          <Link to="/idea-dumps">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Idea Dumps
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
          to="/idea-dumps"
          className="inline-flex items-center text-sm mb-8 hover:opacity-60 transition-opacity uppercase tracking-widest text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Idea Dumps
        </Link>

        <article>
          <header className="mb-12 pb-8 border-b border-border">
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-4">
              <time dateTime={idea.date}>
                {new Date(idea.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
              {idea.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">{idea.description}</p>
            {idea.tags && idea.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {idea.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-mono uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">{renderContent(idea.content)}</div>
        </article>
      </main>
    </div>
  );
};

export default IdeaDumpDetail;
