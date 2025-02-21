export type DestinationMeta = {
  slug: string;
  name: string;
  image: string;
};

export type Tip = {
  heading: string;
  details: string;
};

export type Activity = {
  name: string;
  highlights: string[];
};

export type Destination = DestinationMeta & {
  overview: string;
  recommendations: string[];
  activities: Activity[];
  tips: Tip[];
};
