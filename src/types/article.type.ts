interface ArticleCategories {
    id: number;
    title: string;
}

interface ArticleImage {
    alt: string;
    url: string;
}

export interface Article  {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any;
  featuredImage: ArticleImage;
  publishedDate: string;
  readTime: string;
  postCategories: ArticleCategories[];
  author: string;
}