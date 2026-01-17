import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { dashboardNavigations, pages } from "../constants/content";

type BreadcrumbItem = {
  label: string;
  url?: string;
};

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(dateInput: string | Date): string {
  const now = new Date();
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) {
    return "Just now";
  }

  if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  }

  if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  }

  const isSameDay =
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth() &&
    now.getDate() === date.getDate();

  if (isSameDay) {
    return `Today ${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })}`;
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    yesterday.getFullYear() === date.getFullYear() &&
    yesterday.getMonth() === date.getMonth() &&
    yesterday.getDate() === date.getDate();

  if (isYesterday) {
    return "Yesterday";
  }

  if (diffDays < 7) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  }

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const allNavs = [...dashboardNavigations, ...pages];

  // first ry top-level match
  for (const nav of allNavs) {
    if ("url" in nav && nav.url === pathname) {
      return [{ label: "Dashboard", url: "/" }, { label: nav.label }];
    }

    // then try child match
    if (nav.children) {
      const child = nav.children.find((c) => c.url === pathname);
      if (child) {
        return [
          { label: "Dashboard", url: "/" },
          { label: nav.label },
          { label: child.label },
        ];
      }
    }
  }

  // fallback
  return [{ label: "Dashboard" }];
}
