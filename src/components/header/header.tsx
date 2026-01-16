import {
  Bell,
  History,
  PanelLeftDashed,
  PanelRightDashed,
  Star,
  Sun,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  closeSearchbox,
  closeSidebar,
  openSearchbox,
  toggleRightbar,
  toggleSidebar,
} from "../../redux/slices/ui-slice";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { useTheme } from "../../lib/theme-toggler";
import SearchBox from "../ui/search-box";
import SearchButton from "../ui/search-button";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const ui = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="h-17 bg-background border-b border-foreground/10 z-100 flex items-center justify-between py-5 px-7">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            className="w-7 h-7 p-1"
            onClick={() => dispatch(toggleSidebar())}
          >
            <PanelLeftDashed size={20} />
          </button>
          <button
            className="w-7 h-7 p-1"
            onClick={() => console.log("Star button clicked!")}
          >
            <Star size={20} />
          </button>
        </div>
        <div className="md:block hidden">
          <BreadcrumbDemo />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <SearchButton />
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 p-1" onClick={toggleTheme}>
            <Sun size={20} />
          </button>
          <button
            className="w-7 h-7 p-1"
            onClick={() => console.log("Activities button clicked!")}
          >
            <History size={20} />
          </button>
          <button
            className="w-7 h-7 p-1"
            onClick={() => console.log("Notifications button clicked!")}
          >
            <Bell size={20} />
          </button>
          <button
            className="w-7 h-7 p-1"
            onClick={() => dispatch(toggleRightbar())}
          >
            <PanelRightDashed size={20} />
          </button>
        </div>
      </div>
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity
          lg:hidden
          ${
            ui.sidebarOpen || ui.rightbarOpen || ui.searchboxOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => dispatch(closeSidebar())}
      />

      {ui.searchboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
          onClick={() => dispatch(closeSearchbox())}
        />
      )}

      <SearchBox
        isDialogOpen={ui.searchboxOpen}
        setIsDialogOpen={openSearchbox}
        className="fixed top-1/2 left-1/2 z-70 aspect-3/1 w-11/12 max-w-xl -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="/dashboard/default" className="text-foreground/40">
              Dashboard
            </a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-foreground/40" />
        <BreadcrumbItem>
          <BreadcrumbPage>Default</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
