export interface Post {
  id: number;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "React Router Tips",
    content: "Use Link instead of anchor tags for client-side routing.",
  },
  {
    id: 2,
    title: "State Management",
    content: "Context API vs Redux for managing application state.",
  },
  {
    id: 3,
    title: "The Future of Web",
    content: "AI and React are increasingly working together.",
  },
];