import fs from "fs";
import path from "path";

export type Destination = {
  slug: string;
  name: string;
  image: string;
};

// Function to get all destinations
export const getAllDestinations = (): Destination[] => {
  const filePath = path.join(process.cwd(), "data", "destinations.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
};

// Function to get a single destination by slug
export const getDestinationBySlug = (slug: string): Destination | undefined => {
  const destinations = getAllDestinations();
  return destinations.find((destination) => destination.slug === slug);
};
