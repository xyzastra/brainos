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
    title: "AI-Powered Learning Assistant",
    description:
      "Concept for an adaptive learning platform that personalizes content based on individual learning patterns and pace.",
    date: "2024-03-18",
    tags: ["AI", "Education", "Concept"],
    content: `
## Core Concept

An intelligent learning assistant that adapts to each student's unique learning style, pace, and preferences.

## Key Ideas

- Analyze learning patterns through interaction data
- Personalize content delivery based on comprehension speed
- Identify knowledge gaps automatically
- Suggest optimal study schedules

## Technical Approach

Could leverage machine learning models to:
- Predict difficulty levels for content
- Recommend similar topics
- Track progress over time
- Provide real-time feedback

## Open Questions

- How to balance automation with human teaching?
- Privacy concerns with learning data
- Scalability for different subjects
    `,
  },
  "2": {
    id: "2",
    title: "Decentralized Knowledge Sharing",
    description:
      "Exploring blockchain-based systems for preserving and sharing knowledge across communities without centralized control.",
    date: "2024-03-10",
    tags: ["Blockchain", "Web3", "Community"],
    content: `
## Vision

A decentralized platform where knowledge is owned by creators and preserved forever, without relying on centralized servers.

## Why Blockchain?

- Immutable record of contributions
- Transparent attribution
- Censorship resistance
- Token incentives for quality content

## Challenges to Solve

- Storage costs on-chain
- Content moderation in decentralized system
- User experience complexity
- Adoption barriers

## Potential Solutions

- IPFS for content storage
- On-chain metadata only
- Community-driven curation
- Progressive decentralization
    `,
  },
  "3": {
    id: "3",
    title: "Productivity Through Gamification",
    description:
      "Ideas for incorporating game mechanics into daily productivity tools to increase motivation and engagement.",
    date: "2024-02-28",
    tags: ["Gamification", "Productivity", "UX"],
    content: `
## The Problem

Traditional productivity apps are boring and fail to motivate long-term use.

## Game Elements to Explore

- Achievement systems for completing tasks
- XP and leveling for sustained habits
- Quests for complex projects
- Leaderboards for team challenges
- Daily streaks and rewards

## Psychological Principles

- Instant feedback loops
- Variable reward schedules
- Progress visualization
- Social comparison and cooperation

## Implementation Ideas

- Task difficulty ratings affect XP earned
- Boss battles for major milestones
- Skill trees for different productivity areas
- Customizable avatars and themes
    `,
  },
  "4": {
    id: "4",
    title: "Micro-Vertical Urban Farming",
    description:
      "A modular IoT system designed for high-density apartment living that automates the growth of essential herbs and microgreens.",
    date: "2024-03-25",
    tags: ["IoT", "Sustainability", "Hardware"],
    content: `
## The Concept

A sleek, wall-mounted modular unit that turns unused apartment wall space into a high-yield garden.

## Hardware Components

- Hydroponic misting nozzles (aeroponics)
- Full spectrum LED strips controlled by ambient light sensors
- Raspberry Pi controller for pH and nutrient monitoring
- Recycled ocean-plastic chassis

## The App Ecosystem

- "Plant Recipes": Downloadable growth profiles for specific herbs
- Harvest notifications
- Community marketplace to trade excess yield with neighbors
- Visual time-lapses of plant growth

## Feasibility Issues

- Water leakage risks in rentals
- Energy consumption vs yield value
- Noise from water pumps
    `,
  },
  "5": {
    id: "5",
    title: "AR Interior Design Overlay",
    description:
      "Real-time augmented reality tool that removes existing furniture from the camera feed to visualize new layouts cleanly.",
    date: "2024-03-30",
    tags: ["AR", "Computer Vision", "Design"],
    content: `
## The Pain Point

Current AR apps just place 3D models *on top* of existing clutter. It's hard to visualize a new sofa if the old one is still visible.

## The Solution: Diminished Reality

Using "Inpainting" technology to real-time erase existing objects from the camera feed before rendering new 3D assets.

## Core Features

- Lidar scanning to measure room dimensions instantly
- "Erase Mode": Tap an object to remove it from the view
- Lighting estimation to cast realistic shadows
- Texture matching for the floor where furniture was removed

## Tech Stack Potential

- Apple ARKit / RealityKit
- TensorFlow Lite for object segmentation on-device
- Unity for 3D rendering pipeline
    `,
  },
  "6": {
    id: "6",
    title: "Lucid Dream Journal Interface",
    description:
      "An audio-first journal app designed to be used with eyes closed immediately upon waking to capture dream details.",
    date: "2024-04-02",
    tags: ["Health", "Audio", "Experimental"],
    content: `
## The User Experience

The screen is entirely black (OLED off) to prevent waking the user up fully. Interaction is entirely gesture and voice-based.

## Interaction Model

- Double tap screen to start recording
- Haptic feedback confirms recording status
- Whisper-transcription (optimized for low volume speech)
- AI summarization to tag themes (e.g., "Flying", "Water", "School")

## Data Analysis

- Correlate dream themes with previous day's calendar events
- Sentiment analysis of voice tone
- Sleep cycle integration via HealthKit

## Why this matters?

Dream recall fades within seconds of opening eyes or seeing light. An audio-only, light-free interface maximizes retention.
    `,
  },
};

const IdeaDumpDetail = () => {
  const { id } = useParams();
  const idea = id ? ideaDumps[id] : null;

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
          <li key={`li-${index}`} className="ml-6 my-2 pl-2">
            {trimmed.replace("-", "").trim()}
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
            <h2 key={`h2-${index}`} className="text-3xl font-serif font-bold mt-12 mb-6 text-foreground">
              {trimmed.replace("##", "").trim()}
            </h2>,
          );
        } else {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {trimmed}
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
