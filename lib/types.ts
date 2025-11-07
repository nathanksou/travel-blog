export type DestinationMeta = {
  slug: string;
  name: string;
  country: string;
  description: string;
  image: string;
};

export type Tip = {
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

export type Recommendation = {
  title: string;
  description: string;
};

export type Destination = DestinationMeta & {
  overviewText: string;
  tips?: Tip[];
  recommendations?: Recommendation[];
  activities?: Activity[];
  suburbs?: Suburb[];
};
