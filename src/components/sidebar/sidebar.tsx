import { cn } from "../../lib/utils";
import { ExpandableMenu } from "../ui/expandable-menu";
import Tab from "../ui/tab";
import { user, tabs, dashboardNavigations, pages } from "../content";
import UserCard from "../ui/user-card";
import { closeSidebar } from "../../redux/slices/ui-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setActiveNav } from "../../redux/slices/navigation-slice";

type Props = {
  className?: string;
  open: any;
};

export default function Sidebar({ className, open }: Props) {
  const active = useAppSelector((state) => state.navigation.activeNav);
  const dispatch = useAppDispatch();

  console.log(active);

  return (
    <aside
      className={cn(
        `z-50 bg-background h-full max-w-53 transition-transform duration-300 fixed lg:static top-0 left-0 border-r border-foreground/10 overflow-y-auto no-scrollbar`,
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        className
      )}
    >
      <div className="py-5 px-4 flex flex-col gap-4 h-full">
        {/* Mobile close */}
        <button
          onClick={() => dispatch(closeSidebar())}
          className="lg:hidden self-end text-sm px-2 py-1"
        >
          ✕
        </button>

        {/* User */}
        <section className="w-45">
          <UserCard user={user} />
        </section>

        {/* Tabs */}
        <section className="pb-3 w-45">
          <Tab items={tabs} />
        </section>

        {/* Dashboard */}
        <section className="w-45">
          <h2 className="text-sm py-1 px-3 text-foreground/40">Dashboard</h2>
          <div className="space-y-1">
            {dashboardNavigations.map((item) => (
              <ExpandableMenu
                key={item.id}
                item={item}
                activeId={active}
                onSelect={(id) => {
                  dispatch(setActiveNav(id));
                }}
              />
            ))}
          </div>
        </section>

        {/* Pages */}
        <section className="w-45">
          <h2 className="text-sm py-1 px-3 text-foreground/40">Pages</h2>
          <div className="space-y-1">
            {pages.map((item) => (
              <ExpandableMenu
                key={item.id}
                item={item}
                activeId={active}
                onSelect={(id) => {
                  dispatch(setActiveNav(id));
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
