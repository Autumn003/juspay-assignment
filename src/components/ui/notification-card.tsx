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
};
export default function NotificationCard({ notification }: Props) {
  return (
    <div className="p-1 rounded-lg flex items-start justify-between gap-2">
      <div
        className={cn(
          "min-w-6 h-6 p-1 flex items-center justify-center overflow-hidden",
          notification.type === "user" ? "rounded-full" : "rounded-lg",
          notification.type === "bug" ? "bg-primary-blue" : "bg-primary-purple"
        )}
      >
        {notification.type === "user" ? (
          <img
            src={notification.user?.image}
            className="min-w-6 h-6 rounded-full object-cover"
          />
        ) : (
          <div>
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

      <div className="flex flex-col min-w-0 max-w-48">
        <p className="text-sm truncate">{notification.description}</p>
        <p className="text-xs text-foreground/40">
          {formatDate(notification.time)}
        </p>
      </div>
    </div>
  );
}
