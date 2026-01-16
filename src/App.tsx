import "./app.css";
import Sidebar from "./components/sidebar/sidebar";
import { cn } from "./lib/utils";
import Rightbar from "./components/rightbar/rightbar";
import Dashboard from "./components/dashboard";
import Header from "./components/header/header";
import { useAppSelector } from "./redux/hooks";
import Orders from "./components/orders";

function App() {
  const ui = useAppSelector((state) => state.ui);

  return (
    <div className="relative h-screen max-w-360 mx-auto">
      {/* Layout */}
      <div className={cn("flex h-full transition-all duration-300")}>
        {ui.sidebarOpen && (
          <Sidebar open={ui.sidebarOpen} className={`w-full`} />
        )}

        <div className={cn("w-full transition-all duration-300 p")}>
          <Header />

          <div className="p-7">
            {/* <Dashboard /> */}
            <Orders />
          </div>
        </div>
        {ui.rightbarOpen && (
          <Rightbar open={ui.rightbarOpen} className={`w-full`} />
        )}
      </div>
    </div>
  );
}

export default App;
