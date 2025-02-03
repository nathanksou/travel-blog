import fs from "fs";
import path from "path";

type BlogPost = {
  top: string[];
};

// Function to get a single post y slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const filePath = path.join(process.cwd(), "data", `${slug}.json`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
};
