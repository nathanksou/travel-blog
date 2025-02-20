export type DestinationMeta = {
  slug: string;
  name: string;
  image: string;
};

export type Destination = {
  slug: string;
  name: string;
  overview: string;
  recommendations: string[];
  tips: Tip[];
};

export type Tip = {
  heading: string;
  details: string;
};
