import { cn } from "../../lib/utils";
import { activities, contacts, notifications } from "../content";
import NotificationCard from "../ui/notification-card";
import UserCard from "../ui/user-card";

type Props = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

export default function Rightbar({ className, open, onClose }: Props) {
  return (
    <aside
      className={cn(
        `z-50 bg-background h-full w-64 md:w-full transition-transform duration-300 fixed md:static top-0 left-0 border-l border-foreground/10 overflow-y-auto no-scrollbar`,
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        className
      )}
    >
      <div className="p-5 flex flex-col gap-6 h-full">
        {/* Mobile close */}
        <button
          onClick={onClose}
          className="md:hidden self-end text-sm px-2 py-1"
        >
          ✕
        </button>
        <div className="flex flex-col gap-2">
          <div className="py-2 px-1 text-sm font-semibold">
            <p>Notifications</p>
          </div>
          {notifications.map((notification) => (
            <NotificationCard notification={notification} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="py-2 px-1 text-sm font-semibold">
            <p>Activities</p>
          </div>
          {activities.map((activity) => (
            <NotificationCard notification={activity} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="py-2 px-1 text-sm font-semibold">
            <p>Contacts</p>
          </div>
          {contacts.map((contact) => (
            <UserCard user={contact} />
          ))}
        </div>
      </div>
    </aside>
  );
}
