import "./app.css";
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { cn } from "./lib/utils";
import Rightbar from "./components/rightbar/rightbar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightbarOpen, setRightbarOpen] = useState(false);
  const LEFT_COLS = 4;
  const RIGHT_COLS = 5;
  const TOTAL_COLS = 24;

  const mainCols =
    TOTAL_COLS -
    (sidebarOpen ? LEFT_COLS : 0) -
    (rightbarOpen ? RIGHT_COLS : 0);

  return (
    <div className="relative h-screen max-w-360 mx-auto">
      {/* Mobile overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity
          md:hidden
          ${
            sidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Layout */}
      <div
        className={cn(
          "grid h-full transition-all duration-300",
          sidebarOpen || rightbarOpen ? "md:grid-cols-24" : "grid-cols-1"
        )}
      >
        {sidebarOpen && (
          <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            className={`md:col-span-${LEFT_COLS}`}
          />
        )}

        <div
          className={cn(
            "w-full transition-all duration-300",
            sidebarOpen || rightbarOpen
              ? `md:col-span-${mainCols}`
              : "md:col-span-24"
          )}
        >
          <header className="h-12 flex items-center px-4 border-b gap-2">
            <button onClick={() => setSidebarOpen((o) => !o)}>left</button>
            <button onClick={() => setRightbarOpen((o) => !o)}>right</button>
          </header>

          <div className="p-4">main</div>
        </div>

        {rightbarOpen && (
          <Rightbar
            open={rightbarOpen}
            onClose={() => setRightbarOpen(false)}
            className={`md:col-span-${RIGHT_COLS}`}
          />
        )}
      </div>
    </div>
  );
}

export default App;
