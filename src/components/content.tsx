import { Building2, Folder, Newspaper, Share2, User } from "lucide-react";

export const user = {
  name: "ByeWind",
  image: "https://i.pravatar.cc/300",
};

export const tabs = [
  {
    label: "Favorites",
    children: [
      { id: "overview", label: "Overview" },
      { id: "projects", label: "Projects" },
    ],
  },
  {
    label: "Recently",
    children: [
      { id: "dashboard", label: "Dashboard" },
      { id: "users", label: "Users" },
    ],
  },
];

export const dashboardNavigations = [
  {
    id: "default",
    label: "Default",
    icon: <User size={18} />,
  },
  {
    id: "ecommerce",
    label: "eCommerce",
    icon: <Folder size={18} />,
    children: [
      { id: "ecommerce-child1", label: "Option 1" },
      { id: "ecommerce-child2", label: "Option 2" },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: <Building2 size={18} />,
    children: [
      { id: "projects-child1", label: "Option 1" },
      { id: "projects-child2", label: "Option 2" },
    ],
  },
  {
    id: "courses",
    label: "Online Courses",
    icon: <Newspaper size={18} />,
    children: [
      { id: "courses-child1", label: "Option 1" },
      { id: "courses-child2", label: "Option 2" },
    ],
  },
];

export const pages = [
  {
    id: "user",
    label: "User Profile",
    icon: <User size={18} />,
    children: [
      { id: "overview", label: "Overview" },
      { id: "projects", label: "Projects" },
      { id: "campaigns", label: "Campaigns" },
      { id: "documents", label: "Documents" },
      { id: "followers", label: "Followers" },
    ],
  },
  {
    id: "account",
    label: "Account",
    icon: <Folder size={18} />,
    children: [
      { id: "account-child1", label: "Option 1" },
      { id: "account-child2", label: "Option 2" },
    ],
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: <Building2 size={18} />,
    children: [
      { id: "corporate-child1", label: "Option 1" },
      { id: "corporate-child2", label: "Option 2" },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    icon: <Newspaper size={18} />,
    children: [
      { id: "blog-child1", label: "Option 1" },
      { id: "blog-child2", label: "Option 2" },
    ],
  },
  {
    id: "social",
    label: "Social",
    icon: <Share2 size={18} />,
    children: [
      { id: "social-child1", label: "Option 1" },
      { id: "social-child2", label: "Option 2" },
    ],
  },
];

export const notifications = [
  {
    type: "bug" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: new Date(),
  },
  {
    type: "bug" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: "2026-01-14T17:59:10.123Z",
  },
  {
    type: "subscription" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: "2026-01-14T01:29:10.123Z",
  },
  {
    type: "bug" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: "2026-01-13T12:29:10.123Z",
  },
];

export const activities = [
  {
    type: "user" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: new Date(),
    user: {
      name: "Hemant Sharma",
      image: "https://i.pravatar.cc/300",
    },
  },
  {
    type: "user" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: "2026-01-14T17:59:10.123Z",
    user: {
      name: "Robert Phill",
      image: "https://i.pravatar.cc/300",
    },
  },
  {
    type: "user" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: "2026-01-14T01:29:10.123Z",
    user: {
      name: "Dillip Singh",
      image: "https://i.pravatar.cc/300",
    },
  },
  {
    type: "user" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: "2026-01-13T12:29:10.123Z",
    user: {
      name: "Elbert Fntch",
      image: "https://i.pravatar.cc/300",
    },
  },
  {
    type: "user" as const,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: "2026-01-10T12:29:10.123Z",
    user: {
      name: "JK Roy",
      image: "https://i.pravatar.cc/300",
    },
  },
];

export const contacts = [
  {
    name: "Hemant Sharma",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Robert Phill",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Dillip Singh",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Harsh Roy",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Natali Craig",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Andi Lane",
    image: "https://i.pravatar.cc/300",
  },
];
