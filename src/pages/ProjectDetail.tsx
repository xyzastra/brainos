import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample project data - in a real app, this would come from a database or API
const projects = {
  "1": {
    id: "1",
    title: "Personal Knowledge Base",
    description: "A React-based knowledge management system for organizing projects, ideas, and journal entries with a clean, reader-first design.",
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    content: `
## Overview

This project represents a complete redesign of how I manage and organize my personal knowledge. Built with modern React, TypeScript, and Tailwind CSS, it provides a minimalist, distraction-free interface for capturing thoughts, documenting projects, and tracking professional growth.

## Key Features

- **Projects Section**: Showcase technical work with detailed documentation
- **Idea Dumps**: Capture raw thoughts before they're refined
- **Journal**: Document personal reflections and learnings
- **Resume**: Centralized professional information

## Technical Implementation

The application is built on:
- React 18 with TypeScript for type safety
- Vite for blazing-fast development
- Tailwind CSS for utility-first styling
- React Router for client-side routing

## Design Philosophy

The design follows a minimalist black and white aesthetic inspired by hugo-brewm, emphasizing typography and content over decoration. The goal is to create a reading experience that's both professional and personal.

## Future Enhancements

- Markdown support for rich content editing
- Search functionality across all sections
- Tag-based filtering and organization
- Dark mode support
- Export functionality for backup
    `
  },
  "2": {
    id: "2",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.",
    date: "2024-02-20",
    tags: ["D3.js", "React", "API Integration"],
    content: `
## Project Background

This dashboard was created to visualize complex business metrics in real-time, allowing stakeholders to make data-driven decisions quickly and effectively.

## Technical Stack

- React for component architecture
- D3.js for advanced data visualization
- WebSocket for real-time data updates
- REST API integration for data fetching

## Key Challenges

The main challenge was optimizing performance when rendering thousands of data points while maintaining smooth interactions and updates.

## Results

The dashboard reduced the time to insight by 60% and is now used daily by the entire organization.
    `
  },
  "3": {
    id: "3",
    title: "Automation Toolkit",
    description: "Collection of Python scripts for automating repetitive tasks and improving workflow efficiency.",
    date: "2024-01-10",
    tags: ["Python", "Automation", "CLI"],
    content: `
## Purpose

A suite of command-line tools designed to automate common development workflows and reduce manual work.

## Scripts Included

- File organization and cleanup
- Batch image processing
- Git workflow automation
- Development environment setup

## Impact

These tools save approximately 5 hours per week across the team, allowing developers to focus on higher-value work.
    `
  }
};
const ProjectDetail = () => {
  const {
    id
  } = useParams();
  const project = id ? projects[id as keyof typeof projects] : null;
  if (!project) {
    return <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-8 py-24 max-w-4xl text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </main>
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-[11px] py-[11px]">
        <Link to="/projects" className="inline-flex items-center text-sm mb-8 hover:opacity-60 transition-opacity uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        
      </main>
    </div>;
};
export default ProjectDetail;