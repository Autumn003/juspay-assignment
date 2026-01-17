import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Header from "../header/header";
import Rightbar from "../rightbar/rightbar";
import Sidebar from "../sidebar/sidebar";
import {
  closeRightbar,
  closeSearchbox,
  closeSidebar,
  openSearchbox,
} from "../../redux/slices/ui-slice";
import SearchBox from "../ui/search-box";

export default function Layout() {
  const ui = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

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

      <SearchBox
        isDialogOpen={ui.searchboxOpen}
        setIsDialogOpen={openSearchbox}
        className="fixed top-1/2 left-1/2 z-70 aspect-3/1 w-11/12 max-w-xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* overlay while seachbox open */}
      {ui.searchboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
          onClick={() => dispatch(closeSearchbox())}
        />
      )}

      {/* overlay while sidebar/rightbar open */}
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
