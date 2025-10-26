import { fetchJsonFromLocalData } from "./local";
import { DestinationMeta, Destination } from "./types";

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
