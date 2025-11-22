export interface Prompt {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  category: string;
  content: string;
  coverImage: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  visible: boolean;
  createdAt: string;
  createdBy: {
    id?: string;
    name: string;
    avatar: string;
  };
}
