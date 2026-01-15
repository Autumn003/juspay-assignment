import "./app.css";
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { cn } from "./lib/utils";
import Rightbar from "./components/rightbar/rightbar";
import Dashboard from "./components/dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightbarOpen, setRightbarOpen] = useState(false);

  return (
    <div className="relative h-screen max-w-360 mx-auto">
      {/* Mobile overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity
          lg:hidden
          ${
            sidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Layout */}
      <div className={cn("flex h-full transition-all duration-300")}>
        {sidebarOpen && (
          <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            className={`w-full`}
          />
        )}

        <div className={cn("w-full transition-all duration-300 p")}>
          <header className="h-12 flex items-center px-4 border-b gap-2">
            <button onClick={() => setSidebarOpen((o) => !o)}>left</button>
            <button onClick={() => setRightbarOpen((o) => !o)}>right</button>
          </header>

          <div className="p-7">
            <Dashboard />
          </div>
        </div>

        {rightbarOpen && (
          <Rightbar
            open={rightbarOpen}
            onClose={() => setRightbarOpen(false)}
            className={`w-full`}
          />
        )}
      </div>
    </div>
  );
}

export default App;
