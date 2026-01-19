import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Header from "../header/header";
import Rightbar from "../rightbar/rightbar";
import Sidebar from "../sidebar/sidebar";
import {
  closeRightbar,
  closeSearchbox,
  closeSidebar,
  openRightbar,
  openSearchbox,
  openSidebar,
} from "../../redux/slices/ui-slice";
import SearchBox from "../ui/search-box";

export default function Layout() {
  const ui = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // Tailwind md

    const handleLayout = () => {
      if (mediaQuery.matches) {
        dispatch(openSidebar());
        dispatch(openRightbar());
      } else {
        dispatch(closeSidebar());
        dispatch(closeRightbar());
      }
    };

    handleLayout();
    mediaQuery.addEventListener("change", handleLayout);

    return () => mediaQuery.removeEventListener("change", handleLayout);
  }, [dispatch]);

  return (
    <div className="h-screen overflow-y-hidden max-w-360 mx-auto">
      <div className="flex h-full">
        {/* Sidebar */}
        {ui.sidebarOpen && <Sidebar className="z-50" open={ui.sidebarOpen} />}

        {/* Main Area */}
        <div className="flex flex-col flex-1 w-full z-30">
          <Header />
          <main className="flex-1 overflow-y-auto no-scrollbar p-7">
            <Outlet />
          </main>
        </div>

        {/* Rightbar */}
        {ui.rightbarOpen && (
          <Rightbar className="z-50" open={ui.rightbarOpen} />
        )}
      </div>

      {/* Search Box */}
      <SearchBox
        isDialogOpen={ui.searchboxOpen}
        setIsDialogOpen={openSearchbox}
        className="fixed top-1/2 left-1/2 z-70 aspect-3/1 w-11/12 max-w-xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* overlay while searchbox open */}
      {ui.searchboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
          onClick={() => dispatch(closeSearchbox())}
        />
      )}

      {/* overlay while sidebar/rightbar open (mobile only) */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity
          lg:hidden
          ${
            ui.sidebarOpen || ui.rightbarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => {
          dispatch(closeRightbar());
          dispatch(closeSidebar());
        }}
      />
    </div>
  );
}
