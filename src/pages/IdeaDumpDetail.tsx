import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ideaDumps = {
  "1": {
    id: "1",
    title: "AI-Powered Learning Assistant",
    description: "Concept for an adaptive learning platform that personalizes content based on individual learning patterns and pace.",
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
    description: "Exploring blockchain-based systems for preserving and sharing knowledge across communities without centralized control.",
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
    description: "Ideas for incorporating game mechanics into daily productivity tools to increase motivation and engagement.",
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
};

const IdeaDumpDetail = () => {
  const { id } = useParams();
  const idea = id ? ideaDumps[id as keyof typeof ideaDumps] : null;

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
        <Link to="/idea-dumps" className="inline-flex items-center text-sm mb-8 hover:opacity-60 transition-opacity uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Idea Dumps
        </Link>

        <article>
          <header className="mb-12 pb-8 border-b border-border">
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-4">
              <time dateTime={idea.date}>
                {new Date(idea.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              {idea.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {idea.description}
            </p>
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

          <div className="prose prose-lg max-w-none">
            {idea.content.split('\n').map((paragraph, index) => {
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

export default IdeaDumpDetail;
