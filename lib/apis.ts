import { createClient, PRIVATE_BUCKET } from "./supabase/server";

export type DestinationMeta = {
  slug: string;
  name: string;
  image: string;
};

type Destination = {
  slug: string;
  name: string;
  overview: string;
  recommendations: string[];
  tips: {
    heading: string;
    details: string;
  }[];
};

const fetchJsonFromPublicBucket = async <T>(
  fileName: string
): Promise<T | null> => {
  const supabase = await createClient();

  try {
    // Get the signed URL for the given file
    const { data, error } = await supabase.storage
      .from(PRIVATE_BUCKET)
      .createSignedUrl(fileName, 60 * 60);

    if (error) {
      console.error(`Error generating signed URL for ${fileName}:`, error);
      throw error;
    }

    // Fetch and return the content of the file
    const response = await fetch(data.signedUrl);
    return await response.json();
  } catch (e) {
    console.error(`Error fetching or parsing ${fileName}:`, e);
    return null;
  }
};

// Fetch all destination meta from a private bucket
export const getAllDestinationMeta = async (): Promise<DestinationMeta[]> => {
  const FILE_NAME = "destinations.json";
  const data = await fetchJsonFromPublicBucket<DestinationMeta[]>(FILE_NAME);
  return data || [];
};

// Fetch a single destination by slug from a private bucket
export const getDestinationBySlug = async (
  slug: string
): Promise<Destination | null> => {
  const FILE_NAME = `${slug}.json`;
  const data = await fetchJsonFromPublicBucket<Destination>(FILE_NAME);
  return data || null;
};
