export interface NavLink {
  path: string;
  label: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
} 