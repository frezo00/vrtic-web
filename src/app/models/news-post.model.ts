export interface NewsPost {
  title: string;
  category: string;
  createdBy: string;
  datePosted: string;
}

export interface NewsPostWithID extends NewsPost {
  id: string;
}
