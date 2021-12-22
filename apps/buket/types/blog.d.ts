type preview = boolean;

export interface Author {
  name: string;
  picture: string;
}

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  slug: string;
  content: string;
}
