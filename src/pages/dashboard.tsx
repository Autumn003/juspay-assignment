import { Dot, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "../lib/utils";
import StackedBarChart from "../components/dashboard/stacked-bar-chart";
import LineChart from "../components/dashboard/line-chart";
import WorldMap from "../components/dashboard/world-map";
import ProgressCard from "../components/dashboard/progress-card";
import PieChartWithPadding from "../components/dashboard/pie-chart";
import ProductsTable from "../components/dashboard/products-table";

const cityRevenue = [
  { name: "New York", revenue: 72, coordinates: [40.7128, -74.006] },
  { name: "San Francisco", revenue: 39, coordinates: [37.7749, -122.4194] },
  { name: "Sydney", revenue: 25, coordinates: [-33.8688, 151.2093] },
  { name: "Singapore", revenue: 61, coordinates: [1.3521, 103.8198] },
];

const salesData: Array<{
  name: string;
  value: number;
  type: "direct" | "affiliate" | "sponsored" | "email";
  fill: string;
}> = [
  {
    name: "Direct",
    value: 300.56,
    type: "direct",
    fill: "var(--color-primary-brand)",
  },
  {
    name: "Sponsored",
    value: 154.02,
    type: "affiliate",
    fill: "var(--color-secondary-indigo)",
  },
  {
    name: "E-mail",
    value: 48.96,
    type: "sponsored",
    fill: "var(--color-secondary-blue)",
  },
  {
    name: "Affiliate",
    value: 135.18,
    type: "email",
    fill: "var(--color-secondary-mint)",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-7 w-full">
      <p className="text-sm font-semibold">eCommerce</p>
      <section className="flex gap-7 md:flex-row flex-col">
        <div className="flex flex-col gap-7 h-full w-full">
          <div className="flex gap-7 ">
            <StatCard1
              title="Customer"
              value="3,781"
              delta={11.01}
              className="bg-primary-blue text-[#1c1c1c]"
            />
            <StatCard1
              title="Orders"
              value="1,219"
              delta={-0.03}
              className="bg-primary-light"
            />
          </div>
          <div className="flex gap-7 ">
            <StatCard1
              title="Revenue"
              value="$695"
              delta={15.03}
              className="bg-primary-light"
            />
            <StatCard1
              title="Growth"
              value="30.1%"
              delta={6.08}
              className="bg-primary-purple text-[#1c1c1c]"
            />
          </div>
        </div>

        <div className="w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light">
          <p className="text-sm font-semibold">Projections vs Actuals</p>
          <div>
            <StackedBarChart />
          </div>
        </div>
      </section>
      <section className="flex gap-7 md:flex-row flex-col">
        <div className="md:w-3/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light">
          <div className="flex items-center md:gap-4 gap-2">
            <p className="text-sm font-semibold">Revenue</p>
            <p className="text-foreground/20">|</p>
            <div className="flex py-0.5 pl-1 pr-2 items-center ">
              <Dot size={34} className="md:-mx-2 text-primary-brand" />
              <p className="text-xs">
                Current Week <span className="font-semibold">$58,211</span>
              </p>
            </div>
            <div className="flex py-0.5 pl-1 pr-2 items-center ">
              <Dot size={34} className="md:-mx-2 text-secondary-cyan" />
              <p className="text-xs">
                Privious Week <span className="font-semibold">$68,768</span>
              </p>
            </div>
          </div>

          <div>
            <LineChart />
          </div>
        </div>
        <div className="md:w-1/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light min-w-50">
          <p className="text-sm font-semibold">Revenue by location</p>
          <div className="">
            <WorldMap
              markers={cityRevenue.map((city) => ({
                latitude: city.coordinates[0],
                longitude: city.coordinates[1],
                city: city.name,
                revenue: city.revenue,
              }))}
            />
          </div>
          {cityRevenue.map((city, index) => (
            <ProgressCard key={index} title={city.name} value={city.revenue} />
          ))}
        </div>
      </section>
      <section className="flex gap-7 md:flex-row flex-col">
        <div className="md:w-3/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold">Top Selling Products</p>
          </div>
          <div>
            <ProductsTable />
          </div>
        </div>

        <div className="md:w-1/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light min-w-50">
          <p className="text-sm font-semibold">Total Sales</p>
          <div className="flex justify-center ">
            <PieChartWithPadding data={salesData} />
          </div>
          <div className="flex flex-col gap-3 mx-auto">
            {salesData.map((sale, index) => (
              <StatCard2 key={index} type={sale.type} value={sale.value} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  delta: number;
  className?: string;
};

const StatCard1 = ({ title, value, delta, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col md:p-6 p-4 gap-2 rounded-2xl md:min-h-28",
        className,
      )}
    >
      <p className="text-sm font-semibold">{title}</p>
      <div className="flex hover:flex-row-reverse items-center justify-between">
        <p className="md:text-2xl text-lg font-semibold">{value}</p>
        <div className="flex items-center gap-1 justify-center text-xs">
          <p>
            {delta > 0 && <span>+</span>}
            {delta}%
          </p>
          {delta === 0 ? (
            <div></div>
          ) : (
            <div>
              {delta > 0 ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} className="scale-x-[-1]" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatCard2 = ({
  type,
  value,
}: {
  type: "direct" | "affiliate" | "sponsored" | "email";
  value: number;
}) => {
  return (
    <div className="flex items-center text-xs h-5.5">
      {/* LEFT COLUMN */}
      <p className="flex items-center w-32">
        <Dot
          size={34}
          className={cn(
            "-mx-2",
            type === "direct" && "text-primary-brand",
            type === "affiliate" && "text-secondary-mint",
            type === "sponsored" && "text-secondary-indigo",
            type === "email" && "text-secondary-blue",
          )}
        />
        {(type === "direct" && "Direct") ||
          (type === "affiliate" && "Affiliate") ||
          (type === "sponsored" && "Sponsored") ||
          (type === "email" && "E-Mail")}
      </p>

      {/* RIGHT COLUMN */}
      <p className="tabular-nums">
        $
        {new Intl.NumberFormat("en-IN", {
          minimumFractionDigits: 2,
        }).format(value)}
      </p>
    </div>
  );
};
