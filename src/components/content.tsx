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
    url: "/dashboard/default",
    icon: <User size={18} />,
  },
  {
    id: "ecommerce",
    label: "eCommerce",
    icon: <Folder size={18} />,
    children: [
      { id: "ecommerce-child1", label: "Option 1", url: "/" },
      { id: "ecommerce-child2", label: "Option 2", url: "/" },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: <Building2 size={18} />,
    children: [
      { id: "projects-child1", label: "Option 1", url: "/" },
      { id: "projects-child2", label: "Option 2", url: "/" },
    ],
  },
  {
    id: "courses",
    label: "Online Courses",
    icon: <Newspaper size={18} />,
    children: [
      { id: "courses-child1", label: "Option 1", url: "/" },
      { id: "courses-child2", label: "Option 2", url: "/" },
    ],
  },
];

export const pages = [
  {
    id: "user",
    label: "User Profile",
    icon: <User size={18} />,
    children: [
      { id: "overview", label: "Overview", url: "/" },
      { id: "projects", label: "Projects", url: "/" },
      { id: "campaigns", label: "Campaigns", url: "/" },
      { id: "documents", label: "Documents", url: "/" },
      { id: "followers", label: "Followers", url: "/" },
    ],
  },
  {
    id: "account",
    label: "Account",
    icon: <Folder size={18} />,
    children: [
      { id: "account-child1", label: "Option 1", url: "/" },
      { id: "account-child2", label: "Option 2", url: "/" },
    ],
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: <Building2 size={18} />,
    children: [
      { id: "corporate-child1", label: "Option 1", url: "/" },
      { id: "corporate-child2", label: "Option 2", url: "/" },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    icon: <Newspaper size={18} />,
    children: [
      { id: "blog-child1", label: "Option 1", url: "/" },
      { id: "blog-child2", label: "Option 2", url: "/" },
    ],
  },
  {
    id: "social",
    label: "Social",
    icon: <Share2 size={18} />,
    children: [
      { id: "social-child1", label: "Option 1", url: "/" },
      { id: "social-child2", label: "Option 2", url: "/" },
    ],
  },
];

export const notifications = [
  {
    type: "bug" as const,
    description: "You have a bug that needs to be resolve.",
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
    id: "1",
    name: "Hemant Sharma",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: "2",
    name: "Robert Phill",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: "2",
    name: "Dillip Singh",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: "3",
    name: "Harsh Roy",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: "4",
    name: "Natali Craig",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: "5",
    name: "Andi Lane",
    image: "https://i.pravatar.cc/300",
  },
];

// export const orderList = [
//   {
//     orderId: "#CM9081",
//     userName: "Natali Craig",
//     userImage: "Female15.png",
//     projectName: "Landing Page",
//     address: "Meadow Lane Oakland",
//     date: new Date(),
//     status: "IN_PROGRESS",
//     status_text: "In Progress",
//     status_color: "#8a8cd9",
//   },
//   {
//     orderId: "#CM9082",
//     userName: "Kate Morrison",
//     userImage: "Female09.png",
//     projectName: "CRM Admin Pages",
//     address: "Larry San Francisco",
//     date: "2026-01-15T17:59:10.123Z",
//     status: "COMPLETE",
//     status_text: "Complete",
//     status_color: "#4aa785",
//   },
//   {
//     orderId: "#CM9083",
//     userName: "Drew Cano",
//     userImage: "Male08.png",
//     projectName: "Client Project",
//     address: "Bagwell Avenue Ocala",
//     date: "2026-01-16T17:59:10.123Z",
//     status: "PENDING",
//     status_text: "Pending",
//     status_color: "#59a8d4",
//   },
//   {
//     orderId: "#CM9084",
//     userName: "Orlando Diggs",
//     userImage: "Male06.png",
//     projectName: "Admin Dashboard",
//     address: "Washburn Baton Rouge",
//     date: "2026-01-17T17:59:10.123Z",
//     status: "APPROVED",
//     status_text: "Approved",
//     status_color: "#ffc555",
//   },
//   {
//     orderId: "#CM9085",
//     userName: "Andie Lane",
//     userImage: "Female08.png",
//     projectName: "App Landing Page",
//     address: "Nest Lane Olivette",
//     date: "2026-01-17T04:59:10.123Z",
//     status: "REJECTED",
//     status_text: "Rejected",
//     status_color: "#1c1c1c",
//     dark_status_color: "rgba(255, 255, 255, 0.4)",
//   },
//   {
//     orderId: "#CM9086",
//     userName: "Natali Craig",
//     userImage: "Female15.png",
//     projectName: "Landing Page",
//     address: "Meadow Lane Oakland",
//     date: "2026-01-16T07:10:10.123Z",
//     status: "IN_PROGRESS",
//     status_text: "In Progress",
//     status_color: "#8a8cd9",
//   },
//   {
//     orderId: "#CM9087",
//     userName: "Kate Morrison",
//     userImage: "Female09.png",
//     projectName: "CRM Admin Pages",
//     address: "Larry San Francisco",
//     date: "2026-01-17T17:59:10.123Z",
//     status: "COMPLETE",
//     status_text: "Complete",
//     status_color: "#4aa785",
//   },
//   {
//     orderId: "#CM9088",
//     userName: "Drew Cano",
//     userImage: "Male08.png",
//     projectName: "Client Project",
//     address: "Bagwell Avenue Ocala",
//     date: "2026-01-11T17:59:10.123Z",
//     status: "PENDING",
//     status_text: "Pending",
//     status_color: "#59a8d4",
//   },
//   {
//     orderId: "#CM9089",
//     userName: "Orlando Diggs",
//     userImage: "Male06.png",
//     projectName: "Admin Dashboard",
//     address: "Washburn Baton Rouge",
//     date: "2025-01-14T17:59:10.123Z",
//     status: "APPROVED",
//     status_text: "Approved",
//     status_color: "#ffc555",
//   },
//   {
//     orderId: "#CM9090",
//     userName: "Andie Lane",
//     userImage: "Female08.png",
//     projectName: "App Landing Page",
//     address: "Nest Lane Olivette",
//     date: "2026-01-14T17:59:10.123Z",
//     status: "REJECTED",
//     status_text: "Rejected",
//     status_color: "#1c1c1c",
//     dark_status_color: "rgba(255, 255, 255, 0.4)",
//   },
// ];

export type OrderStatus =
  | "IN_PROGRESS"
  | "COMPLETE"
  | "PENDING"
  | "APPROVED"
  | "REJECTED";

export interface Order {
  orderId: string;
  userName: string;
  userImage: string;
  projectName: string;
  address: string;
  date: string | Date;
  status: OrderStatus;
  status_text: string;
  status_color: string;
  dark_status_color?: string;
}

export const initialOrders: Order[] = [
  {
    orderId: "#CM9081",
    userName: "Natali Craig",
    userImage: "Female15.png",
    projectName: "Landing Page",
    address: "Meadow Lane Oakland",
    date: new Date(),
    status: "IN_PROGRESS",
    status_text: "In Progress",
    status_color: "#8a8cd9",
  },
  {
    orderId: "#CM9082",
    userName: "Kate Morrison",
    userImage: "Female09.png",
    projectName: "CRM Admin Pages",
    address: "Larry San Francisco",
    date: "2026-01-15T17:59:10.123Z",
    status: "COMPLETE",
    status_text: "Complete",
    status_color: "#4aa785",
  },
  {
    orderId: "#CM9083",
    userName: "Drew Cano",
    userImage: "Male08.png",
    projectName: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "2026-01-16T17:59:10.123Z",
    status: "PENDING",
    status_text: "Pending",
    status_color: "#59a8d4",
  },
  {
    orderId: "#CM9084",
    userName: "Orlando Diggs",
    userImage: "Male06.png",
    projectName: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "2026-01-17T17:59:10.123Z",
    status: "APPROVED",
    status_text: "Approved",
    status_color: "#ffc555",
  },
  {
    orderId: "#CM9085",
    userName: "Andie Lane",
    userImage: "Female08.png",
    projectName: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "2026-01-17T04:59:10.123Z",
    status: "REJECTED",
    status_text: "Rejected",
    status_color: "#1c1c1c",
    dark_status_color: "rgba(255, 255, 255, 0.4)",
  },
  {
    orderId: "#CM9086",
    userName: "Natali Craig",
    userImage: "Female15.png",
    projectName: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "2026-01-16T07:10:10.123Z",
    status: "IN_PROGRESS",
    status_text: "In Progress",
    status_color: "#8a8cd9",
  },
  {
    orderId: "#CM9087",
    userName: "Kate Morrison",
    userImage: "Female09.png",
    projectName: "CRM Admin Pages",
    address: "Larry San Francisco",
    date: "2026-01-17T17:59:10.123Z",
    status: "COMPLETE",
    status_text: "Complete",
    status_color: "#4aa785",
  },
  {
    orderId: "#CM9088",
    userName: "Drew Cano",
    userImage: "Male08.png",
    projectName: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "2026-01-11T17:59:10.123Z",
    status: "PENDING",
    status_text: "Pending",
    status_color: "#59a8d4",
  },
  {
    orderId: "#CM9089",
    userName: "Orlando Diggs",
    userImage: "Male06.png",
    projectName: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "2025-01-14T17:59:10.123Z",
    status: "APPROVED",
    status_text: "Approved",
    status_color: "#ffc555",
  },
  {
    orderId: "#CM9090",
    userName: "Andie Lane",
    userImage: "Female08.png",
    projectName: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "2026-01-14T17:59:10.123Z",
    status: "REJECTED",
    status_text: "Rejected",
    status_color: "#1c1c1c",
    dark_status_color: "rgba(255, 255, 255, 0.4)",
  },
];
