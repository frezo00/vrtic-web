export interface NewsPost {
  title: string;
  content: string;
  category: string;
  createdBy: string;
  datePosted: string;
  coverImage: string;
}

export interface NewsPostWithID extends NewsPost {
  id: string;
}
