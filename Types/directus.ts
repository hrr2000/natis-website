export interface CommitteeMember {
  name: string;
  rank: number;
  slug: string;
  role: string;
  bio: string;
  about: string;
  photo: string;
}

export interface Article {
  slug: string;
  image: string;
  title: string;
  short_description: string;
  content: string;
}

export interface ContentPage {
  slug: string;
  title: string;
  hero_heading: string;
  hero_description: string;
  keywords: string[];
  content: string;
}