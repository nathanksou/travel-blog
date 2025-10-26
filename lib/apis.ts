import { readFile } from "fs/promises";
import { join } from "path";
import { DestinationMeta, Destination } from "./types";

// Helper function to fetch JSON from local data directory
const fetchJsonFromLocalData = async <T>(
  fileName: string
): Promise<T | null> => {
  try {
    const filePath = join(process.cwd(), "data", fileName);
    const fileContent = await readFile(filePath, "utf-8");
    return JSON.parse(fileContent) as T;
  } catch (e) {
    console.error(`Error reading or parsing ${fileName}:`, e);
    return null;
  }
};

// Fetch all destination metadata from local data
export const getAllDestinationMeta = async (): Promise<DestinationMeta[]> => {
  const FILE_NAME = "destinations.json";
  const data = await fetchJsonFromLocalData<DestinationMeta[]>(FILE_NAME);
  return data || [];
};

// Fetch a single destination by slug from local data
export const getDestinationBySlug = async (
  slug: string
): Promise<Destination | null> => {
  const FILE_NAME = `${slug}.json`;
  const data = await fetchJsonFromLocalData<Destination>(FILE_NAME);
  return data || null;
};
