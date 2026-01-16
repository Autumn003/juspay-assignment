import { ArrowDownLeft, ArrowUpRight, Dot } from "lucide-react";
import { cn } from "../lib/utils";
import StackedBarChart from "./ui/stacked-bar-chart";
import LineChart from "./ui/line-chart";
import WorldMap from "./ui/world-map";
import ProgressCard from "./ui/progress-card";
import PieChartWithPadding from "./ui/pie-chart";

const cityRevenue = [
  { name: "New York", revenue: 72, coordinates: [40.7128, -74.006] },
  { name: "San Francisco", revenue: 39, coordinates: [37.7749, -122.4194] },
  { name: "Sydney", revenue: 25, coordinates: [-33.8688, 151.2093] },
  { name: "Singapore", revenue: 61, coordinates: [1.3521, 103.8198] },
];

const salesData = [
  { name: "Direct", value: 300.56, fill: "var(--color-primary-brand)" },
  { name: "Sponsored", value: 154.02, fill: "var(--color-secondary-indigo)" },
  { name: "E-mail", value: 48.96, fill: "var(--color-secondary-blue)" },
  { name: "Affiliate", value: 135.18, fill: "var(--color-secondary-mint)" },
];

const salesSources: Array<{
  type: "direct" | "affiliate" | "sponsored" | "email";
  value: number;
}> = [
  {
    type: "direct",
    value: 300.56,
  },
  { type: "affiliate", value: 300.56 },
  {
    type: "sponsored",
    value: 300.56,
  },
  { type: "email", value: 300.56 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-7 w-full">
      <p className="text-sm font-semibold">eCommerce</p>
      <div className="flex gap-7 md:flex-row flex-col">
        <div className="flex flex-col gap-7 h-full w-full">
          <div className="flex gap-7 ">
            <StatCard1
              title="Customer"
              value="3,781"
              delta={11.01}
              className="bg-primary-blue"
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
      <div className="flex gap-7 md:flex-row flex-col">
        <div className="md:w-3/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light">
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
        <div className="md:w-1/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light min-w-50">
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
      <div className="flex gap-7 md:flex-row flex-col">
        <div className="md:w-3/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold">Top Selling Products</p>
          </div>
          <div>
            <TopSellingProductsTable />
          </div>
        </div>
        <div className="md:w-1/4 w-full rounded-2xl p-6 flex flex-col gap-4 bg-primary-light min-w-50">
          <p className="text-sm font-semibold">Total Sales</p>
          <div className="flex justify-center rotate-90">
            <PieChartWithPadding data={salesData} />
          </div>
          <div className="flex flex-col gap-3">
            {salesSources.map((source) => (
              <StatCard2 type={source.type} value={source.value} />
            ))}
          </div>
        </div>
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

const StatCard1 = ({ title, value, delta, className }: StatCardProps) => {
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

const StatCard2 = ({
  type,
  value,
}: {
  type: "direct" | "affiliate" | "sponsored" | "email";
  value: number;
}) => {
  return (
    // <div className={cn("w-full flex flex-col p-6 gap-2 rounded-2xl min-h-28")}>
    <div className="flex items-center justify-between text-xs h-5.5">
      <p className="flex items-center">
        <span>
          <Dot
            size={34}
            className={cn(
              "-mx-2",
              type === "direct" && "text-primary-brand",
              type === "affiliate" && "text-secondary-mint",
              type === "sponsored" && "text-secondary-indigo",
              type === "email" && "text-secondary-blue"
            )}
          />
        </span>
        {(type === "direct" && "Direct") ||
          (type === "affiliate" && "Affiliate") ||
          (type === "sponsored" && "Sponsored") ||
          (type === "email" && "E-Mail")}
      </p>
      <p className="">
        $
        {new Intl.NumberFormat("en-IN", {
          minimumFractionDigits: 2,
        }).format(value)}
      </p>
    </div>
    // </div>
  );
};

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const topSellingProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
  },
  {
    name: "Half Sleeve  Shirt",
    price: 39.99,
    quantity: 64,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
  },
];

function TopSellingProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-foreground/20 text-xs">
          <TableHead className="min-w-56 text-foreground/40">Name</TableHead>
          <TableHead className="text-foreground/40">Price</TableHead>
          <TableHead className="text-foreground/40">Quantity</TableHead>
          <TableHead className="text-foreground/40">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topSellingProducts.map((product) => (
          <TableRow key={product.name} className="border-0 text-xs">
            <TableCell className="">{product.name}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell className="">
              $
              {new Intl.NumberFormat("en-IN", {
                minimumFractionDigits: 2,
              }).format(product.price * product.quantity)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
