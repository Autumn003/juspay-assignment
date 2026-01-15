import { ArrowDownLeft, ArrowUpRight, Dot } from "lucide-react";
import { cn } from "../lib/utils";
import StackedBarChart from "./ui/stacked-bar-chart";
import LineChart from "./ui/line-chart";
import WorldMap from "./ui/world-map";
import ProgressCard from "./ui/progress-card";

const cityRevenue = [
  { name: "New York", revenue: 72, coordinates: [40.7128, -74.006] },
  { name: "San Francisco", revenue: 39, coordinates: [37.7749, -122.4194] },
  { name: "Sydney", revenue: 25, coordinates: [-33.8688, 151.2093] },
  { name: "Singapore", revenue: 61, coordinates: [1.3521, 103.8198] },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-7 w-full ">
      <p>Dashboard</p>
      <div className="flex gap-7">
        <div className="flex flex-col gap-7 h-full w-full">
          <div className="flex gap-7 ">
            <StatCard
              title="Customer"
              value="3,781"
              delta={11.01}
              className="bg-primary-blue"
            />
            <StatCard
              title="Orders"
              value="1,219"
              delta={-0.03}
              className="bg-primary-light"
            />
          </div>
          <div className="flex gap-7 ">
            <StatCard
              title="Revenue"
              value="$695"
              delta={15.03}
              className="bg-primary-light"
            />
            <StatCard
              title="Growth"
              value="30.1%"
              delta={0}
              className="bg-primary-purple"
            />
          </div>
        </div>

        <div className="w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light">
          <p className="text-sm font-semibold">Projections vs Actuals</p>
          <div>
            <StackedBarChart />
          </div>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold">Revenue</p>
            <p className="text-foreground/20">|</p>
            <div className="flex py-0.5 pl-1 pr-2 items-center ">
              <Dot size={34} className="-mx-2 text-primary-brand" />
              <p className="text-xs">
                Current Week <span className="font-semibold">$58,211</span>
              </p>
            </div>
            <div className="flex py-0.5 pl-1 pr-2 items-center ">
              <Dot size={34} className="-mx-2 text-secondary-cyan" />
              <p className="text-xs">
                Privious Week <span className="font-semibold">$68,768</span>
              </p>
            </div>
          </div>
          <div>
            <LineChart />
          </div>
        </div>
        <div className="w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light min-w-50 max-w-68">
          <p className="text-sm font-semibold">Revenue by location</p>
          <div className="">
            <WorldMap
              markers={cityRevenue.map((city) => ({
                latitude: city.coordinates[0],
                longitude: city.coordinates[1],
              }))}
            />
          </div>
          {cityRevenue.map((city) => (
            <ProgressCard title={city.name} value={city.revenue} />
          ))}
        </div>
      </div>
      <div className="flex gap-7">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  delta: number;
  className?: string;
};

const StatCard = ({ title, value, delta, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col p-6 gap-2 rounded-2xl min-h-28",
        className
      )}
    >
      <p className="text-sm font-semibold">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">{value}</p>
        <div className="flex items-center gap-1 justify-center text-xs">
          <p>{delta}%</p>
          {delta === 0 ? (
            <div></div>
          ) : (
            <div>
              {delta > 0 ? (
                <ArrowUpRight size={12} />
              ) : (
                <ArrowDownLeft size={12} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
