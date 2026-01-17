import { Bug, Radio, UserRound } from "lucide-react";
import { cn, formatDate } from "../../lib/utils";

interface User {
  image: string;
  name: string;
}

interface NotificationType {
  type: "bug" | "user" | "subscription" | "register";
  user?: User;
  description: string;
  time: Date | string;
}

type Props = {
  notification: NotificationType;
  isLast: boolean;
};
export default function NotificationCard({ notification, isLast }: Props) {
  return (
    <div className="relative flex items-start gap-2 p-1">
      <div className="relative flex flex-col items-center">
        <div
          className={cn(
            "w-6 h-6 p-1 flex items-center justify-center overflow-hidden z-10",
            notification.type === "user" ? "rounded-full" : "rounded-lg",
            notification.type === "bug"
              ? "bg-primary-blue"
              : "bg-primary-purple",
          )}
        >
          {notification.type === "user" ? (
            <img
              src={notification.user?.image}
              className="min-w-6 h-6 rounded-full"
            />
          ) : (
            <div className="text-[#1c1c1c]">
              {notification.type === "bug" && <Bug className="w-4 h-4" />}
              {notification.type === "register" && (
                <UserRound className="w-4 h-4" />
              )}
              {notification.type === "subscription" && (
                <Radio className="w-4 h-4" />
              )}
            </div>
          )}
        </div>

        {/* verical line seprator */}
        {!isLast && (
          <span className="absolute top-8 h-3.5 w-px bg-foreground/20" />
        )}
      </div>

      <div className="flex flex-col min-w-0 max-w-48">
        <p className="text-sm truncate">{notification.description}</p>
        <p className="text-xs text-foreground/40">
          {formatDate(notification.time)}
        </p>
      </div>
    </div>
  );
}
