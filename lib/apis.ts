import { createClient, PUBLIC_BUCKET } from "./supabase/server";

type DestinationMeta = {
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

const fetchJsonFromPublicBucket = async (fileName: string) => {
  const supabase = await createClient();

  try {
    // Get the public URL for the given file
    const { data } = await supabase.storage
      .from(PUBLIC_BUCKET)
      .getPublicUrl(fileName);

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
  const data = await fetchJsonFromPublicBucket(FILE_NAME);
  return data || [];
};

// Fetch a single destination post by slug from a public bucket
export const getDestinationBySlug = async (
  slug: string
): Promise<Destination | null> => {
  const FILE_NAME = `${slug}.json`;
  const data = await fetchJsonFromPublicBucket(FILE_NAME);
  return data || null;
};
