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

export type Location = {
  name: string;
  blurb: string;
};

export type Suburb = Location & {
  locations?: Location[];
};

export type Destination = DestinationMeta & {
  overviewImage: string;
  overviewText: string;
  tips: Tip[];
  recommendations: string[];
  activities: Activity[];
  suburbs: Suburb[];
};
