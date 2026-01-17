import {
  Bell,
  History,
  PanelLeftDashed,
  PanelRightDashed,
  Star,
  Sun,
} from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import {
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
} from "./breadcrumb";
import { useTheme } from "../../lib/theme-toggler";
import SearchButton from "../ui/search-button";
import Button from "../ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="h-17 bg-background border-b border-foreground/10 flex items-center justify-between py-5 px-7 ">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Button
            className="w-7 h-7 p-1"
            onClick={() => dispatch(toggleSidebar())}
          >
            <PanelLeftDashed size={20} />
          </Button>
          <Button
            className="w-7 h-7 p-1"
            onClick={() => console.log("Star button clicked!")}
          >
            <Star size={20} />
          </Button>
        </div>
        <div className="md:block hidden">
          <BreadcrumbDemo />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <SearchButton onClick={() => dispatch(openSearchbox())} />
        <div className="flex items-center gap-2">
          <Button className="w-7 h-7 p-1" onClick={toggleTheme}>
            <Sun size={20} />
          </Button>
          <Button
            className="w-7 h-7 p-1"
            onClick={() => console.log("Activities button clicked!")}
          >
            <History size={20} />
          </Button>
          <Button
            className="w-7 h-7 p-1"
            onClick={() => console.log("Notifications button clicked!")}
          >
            <Bell size={20} />
          </Button>
          <Button
            className="w-7 h-7 p-1"
            onClick={() => dispatch(toggleRightbar())}
          >
            <PanelRightDashed size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

import { useLocation, Link } from "react-router-dom";
import { getBreadcrumbs } from "../../lib/utils";

function BreadcrumbDemo() {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <BreadcrumbItem key={index}>
              {!isLast && item.url ? (
                <>
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.url}
                      className="text-foreground/40 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className="text-foreground/40" />
                </>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
