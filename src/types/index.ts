export interface BoatModel {
  id: string;
  name: string;
  number: string;
  tagline: string;
  description: string;
  image: string;
  specs?: {
    length?: string;
    beam?: string;
    draft?: string;
    weight?: string;
    maxSpeed?: string;
    cruisingSpeed?: string;
    range?: string;
    passengers?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface LightshipCenter {
  id: string;
  name: string;
  location: string;
  image: string;
}
