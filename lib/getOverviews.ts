import fs from "fs";
import path from "path";

export type BlogOverview = {
  slug: string;
  title: string;
  image: string;
};

// Function to get all overviews
export const getAllOverviews = (): BlogOverview[] => {
  const filePath = path.join(process.cwd(), "data", "overviews.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
};

// Function to get a single overview by slug
export const getOverviewBySlug = (slug: string): BlogOverview | undefined => {
  const overviews = getAllOverviews();
  return overviews.find((overview) => overview.slug === slug);
};
