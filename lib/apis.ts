import { initClient } from "./supabase/client";
import { DestinationMeta, Destination } from "./types";

const BUCKET_NAME = "destinations";

const fetchJsonFromPublicBucket = async <T>(
  fileName: string
): Promise<T | null> => {
  const supabase = initClient();

  try {
    // Get the public URL for the given file
    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);

    // Fetch and return the content of the file
    const response = await fetch(data.publicUrl);
    return await response.json();
  } catch (e) {
    console.error(`Error fetching or parsing ${fileName}:`, e);
    return null;
  }
};

// Fetch all destination meta from a public bucket
export const getAllDestinationMeta = async (): Promise<DestinationMeta[]> => {
  const FILE_NAME = "destinations.json";
  const data = await fetchJsonFromPublicBucket<DestinationMeta[]>(FILE_NAME);
  return data || [];
};

// Fetch a single destination by slug from a public bucket
export const getDestinationBySlug = async (
  slug: string
): Promise<Destination | null> => {
  const FILE_NAME = `${slug}.json`;
  const data = await fetchJsonFromPublicBucket<Destination>(FILE_NAME);
  return data || null;
};
