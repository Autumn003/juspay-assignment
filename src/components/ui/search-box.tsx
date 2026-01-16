import { useEffect, useRef, useState } from "react";
import { Circle, File, Search, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { dashboardNavigations, pages } from "../content";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeSearchbox, toggleSearchbox } from "../../redux/slices/ui-slice";

export default function SearchBox({ className }: any) {
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const ui = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleKeyDown(event: any) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "/") {
        event.preventDefault();
        dispatch(toggleSearchbox());
      }

      if (event.key === "Escape" && ui.searchboxOpen) {
        dispatch(closeSearchbox());
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ui.searchboxOpen]);

  useEffect(() => {
    if (ui.searchboxOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [ui.searchboxOpen]);

  useEffect(() => {
    if (!ui.searchboxOpen) {
      setSearchQuery("");
    }
  }, [ui.searchboxOpen]);

  useEffect(() => {
    if (ui.searchboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [ui.searchboxOpen]);

  // Flatten navigation items to show children
  const flattenedNavigation = dashboardNavigations.flatMap((item: any) => {
    if (item.children) {
      return item.children.map((child: any) => ({
        ...child,
        parentLabel: item.label,
      }));
    }
    return [item];
  });

  // Flatten pages to show children
  const flattenedPages = pages.flatMap((item: any) => {
    if (item.children) {
      return item.children.map((child: any) => ({
        ...child,
        parentLabel: item.label,
      }));
    }
    return [item];
  });

  // Filter based on search query (searches both parent and child labels)
  const filteredLinks = flattenedNavigation.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.label.toLowerCase().includes(searchLower) ||
      (item.parentLabel && item.parentLabel.toLowerCase().includes(searchLower))
    );
  });

  const filteredInstallation = flattenedPages.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.label.toLowerCase().includes(searchLower) ||
      (item.parentLabel && item.parentLabel.toLowerCase().includes(searchLower))
    );
  });

  const hasResults =
    filteredLinks.length > 0 || filteredInstallation.length > 0;

  return (
    <>
      {ui.searchboxOpen && (
        <div
          className={cn(
            "bg-background text-foreground/50 border-foreground/10 flex h-96 w-full max-w-2xl flex-col rounded-xl border pb-2 shadow-2xl transition-all duration-300",
            className
          )}
          ref={boxRef}
        >
          <div className="border-foreground/10 flex items-center gap-2 border-b px-4 py-3">
            <Search className="text-foreground/20 font-semibold" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-foreground/50 placeholder:text-foreground/10 w-full bg-transparent outline-none"
            />
            <button
              onClick={() => dispatch(closeSearchbox())}
              className="shrink-0"
            >
              <X className="text-foreground/50 hover:bg-foreground/10 cursor-pointer rounded-lg p-1 transition-colors duration-200" />
            </button>
          </div>

          <div className="flex h-full flex-col overflow-y-auto no-scrollbar px-2 py-4">
            {!hasResults && searchQuery && (
              <div className="flex h-full items-center justify-center">
                <p className="text-foreground/50">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}

            {(!searchQuery || filteredLinks.length > 0) && (
              <div>
                {!searchQuery && (
                  <h3 className="text-foreground/50 px-2 text-sm font-semibold mb-2">
                    Navigation
                  </h3>
                )}
                {filteredLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    onClick={() => dispatch(closeSearchbox())}
                    className="hover:bg-foreground/10 text-foreground flex w-full items-center gap-4 rounded-md p-3 text-sm transition-colors duration-200"
                  >
                    <File className="text-foreground/50 h-5 w-5" />
                    <div className="flex flex-col">
                      <span>{item.label}</span>
                      {item.parentLabel && (
                        <span className="text-xs text-foreground/30">
                          {item.parentLabel}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}

            {(!searchQuery || filteredInstallation.length > 0) && (
              <div>
                {filteredInstallation.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    onClick={() => dispatch(closeSearchbox())}
                    className="hover:bg-foreground/10 text-foreground flex w-full items-center gap-4 rounded-md p-3 text-sm transition-colors duration-200"
                  >
                    <Circle className="text-foreground/50 h-5 w-5" />
                    <div className="flex flex-col">
                      <span>{item.label}</span>
                      {item.parentLabel && (
                        <span className="text-xs text-foreground/20">
                          {item.parentLabel}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
