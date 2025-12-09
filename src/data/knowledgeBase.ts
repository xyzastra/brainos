export interface Tag {
  id: string;
  name: string;
  description?: string;
  contentCount: number;
}

export interface Category {
  id: string;
  name: string;
  tags: Tag[];
}

export const knowledgeBase: Category[] = [
  {
    id: "energy",
    name: "Energy Systems",
    tags: [
      { id: "solar", name: "Solar Power", contentCount: 12, description: "Photovoltaic and concentrated solar technologies" },
      { id: "grid", name: "Grid Infrastructure", contentCount: 8, description: "Power distribution and smart grid systems" },
      { id: "storage", name: "Energy Storage", contentCount: 15, description: "Batteries, hydrogen, and mechanical storage" },
      { id: "nuclear", name: "Nuclear Energy", contentCount: 6, description: "Fission and fusion power generation" },
      { id: "wind", name: "Wind Power", contentCount: 9, description: "Onshore and offshore wind turbines" },
      { id: "microgrids", name: "Microgrids", contentCount: 7, description: "Localized energy distribution networks" },
    ],
  },
  {
    id: "policy",
    name: "Policy & Governance",
    tags: [
      { id: "regulation", name: "Energy Regulation", contentCount: 11, description: "Policy frameworks for energy markets" },
      { id: "carbon-pricing", name: "Carbon Pricing", contentCount: 5, description: "Cap-and-trade and carbon tax mechanisms" },
      { id: "incentives", name: "Clean Energy Incentives", contentCount: 14, description: "Tax credits, subsidies, and grants" },
      { id: "international", name: "International Agreements", contentCount: 4, description: "Climate treaties and cooperation" },
      { id: "permitting", name: "Permitting Reform", contentCount: 6, description: "Streamlining infrastructure approvals" },
    ],
  },
  {
    id: "technology",
    name: "Technology & Innovation",
    tags: [
      { id: "ai-ml", name: "AI/ML Applications", contentCount: 18, description: "Machine learning for energy optimization" },
      { id: "iot", name: "IoT & Sensors", contentCount: 10, description: "Connected devices for monitoring" },
      { id: "blockchain", name: "Blockchain Energy", contentCount: 3, description: "Distributed ledger for energy trading" },
      { id: "ev", name: "Electric Vehicles", contentCount: 13, description: "EVs and charging infrastructure" },
      { id: "heat-pumps", name: "Heat Pumps", contentCount: 7, description: "Efficient heating and cooling systems" },
    ],
  },
  {
    id: "economics",
    name: "Economics & Markets",
    tags: [
      { id: "lcoe", name: "LCOE Analysis", contentCount: 9, description: "Levelized cost of energy calculations" },
      { id: "financing", name: "Project Financing", contentCount: 11, description: "Funding mechanisms for energy projects" },
      { id: "markets", name: "Energy Markets", contentCount: 16, description: "Wholesale and retail market dynamics" },
      { id: "ppa", name: "Power Purchase Agreements", contentCount: 8, description: "Long-term energy contracts" },
    ],
  },
  {
    id: "decentralization",
    name: "Decentralized Systems",
    tags: [
      { id: "p2p-energy", name: "Peer-to-Peer Energy", contentCount: 5, description: "Direct energy trading between prosumers" },
      { id: "community-solar", name: "Community Solar", contentCount: 7, description: "Shared solar installations" },
      { id: "virtual-power-plants", name: "Virtual Power Plants", contentCount: 4, description: "Aggregated distributed resources" },
      { id: "der", name: "Distributed Energy Resources", contentCount: 12, description: "Small-scale generation and storage" },
    ],
  },
  {
    id: "education",
    name: "Education & Research",
    tags: [
      { id: "curriculum", name: "Energy Curriculum", contentCount: 6, description: "Educational frameworks and courses" },
      { id: "research-methods", name: "Research Methods", contentCount: 8, description: "Approaches to energy research" },
      { id: "case-studies", name: "Case Studies", contentCount: 14, description: "Real-world implementation examples" },
      { id: "data-sources", name: "Data Sources", contentCount: 5, description: "Databases and datasets for analysis" },
    ],
  },
];

// Helper to get all tags flattened
export const getAllTags = (): Tag[] => {
  return knowledgeBase.flatMap((cat) => cat.tags);
};

// Helper to find tag by ID
export const getTagById = (id: string): Tag | undefined => {
  return getAllTags().find((tag) => tag.id === id);
};

// Helper to get category by tag ID
export const getCategoryByTagId = (tagId: string): Category | undefined => {
  return knowledgeBase.find((cat) => cat.tags.some((tag) => tag.id === tagId));
};
