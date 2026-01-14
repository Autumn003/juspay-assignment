import { useState } from "react";
import { cn } from "../../lib/utils";
import { ExpandableMenu } from "../ui/expandable-menu";
import Tab from "../ui/tab";
import { user, tabs, dashboardNavigations, pages } from "../content";
import UserCard from "../ui/user-card";

type Props = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ className, open, onClose }: Props) {
  const [active, setActive] = useState("");

  return (
    <aside
      className={cn(
        `z-50 bg-background h-full w-52 md:w-full transition-transform duration-300 fixed md:static top-0 left-0 border-r border-foreground/10 overflow-y-auto no-scrollbar`,
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        className
      )}
    >
      <div className="py-5 px-4 flex flex-col gap-4 h-full">
        {/* Mobile close */}
        <button
          onClick={onClose}
          className="md:hidden self-end text-sm px-2 py-1"
        >
          ✕
        </button>

        {/* User */}
        <section>
          <UserCard user={user} />
        </section>

        {/* Tabs */}
        <section className="pb-3">
          <Tab items={tabs} />
        </section>

        {/* Dashboard */}
        <section>
          <h2 className="text-sm py-1 px-3 text-foreground/40">Dashboard</h2>
          <div className="space-y-1">
            {dashboardNavigations.map((item) => (
              <ExpandableMenu
                key={item.id}
                item={item}
                activeId={active}
                onSelect={(id) => {
                  setActive(id);
                  onClose(); // auto close on mobile
                }}
              />
            ))}
          </div>
        </section>

        {/* Pages */}
        <section>
          <h2 className="text-sm py-1 px-3 text-foreground/40">Pages</h2>
          <div className="space-y-1">
            {pages.map((item) => (
              <ExpandableMenu
                key={item.id}
                item={item}
                activeId={active}
                onSelect={(id) => {
                  setActive(id);
                  onClose();
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
