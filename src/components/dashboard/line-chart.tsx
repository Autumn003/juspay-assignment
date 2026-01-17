import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Line,
  LineChart,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", current: 16, previous: 10 },
  { name: "Feb", current: 10, previous: 19 },
  { name: "Mar", current: 13, previous: 16 },
  { name: "Apr", current: 18, previous: 13 },
  { name: "May", current: null, previous: 16 },
  { name: "Jun", current: null, previous: 25 },
];

// Projected data for dashed line
const projectedData = [
  { name: "Jan", current: null, previous: null },
  { name: "Feb", current: null, previous: null },
  { name: "Mar", current: null, previous: null },
  { name: "Apr", current: 18, previous: null },
  { name: "May", current: 21, previous: null },
  { name: "Jun", current: 21, previous: null },
];

const YaxisCordinates = [0, 10, 20, 30];

export default function StackedBarChart() {
  return (
    <div className="w-full h-58">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20 }}>
          <CartesianGrid
            vertical={false}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth={1}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            dy={10}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            padding={{ left: 20, right: 10 }}
          />

          <YAxis
            width={40}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            tickFormatter={(value) => `${value}M`}
            domain={[0, 30]}
            ticks={YaxisCordinates}
            dy={-5}
            dx={-5}
          />

          {/* Current Week - Black solid line */}
          <Line
            type="natural"
            dataKey="current"
            stroke="var(--color-primary-brand)"
            strokeWidth={2.5}
            dot={false}
            connectNulls={false}
          />

          {/* Previous Week - Blue solid line */}
          <Line
            type="natural"
            dataKey="previous"
            stroke="var(--color-secondary-cyan)"
            strokeWidth={2.5}
            dot={false}
            connectNulls={true}
          />

          {/* Projected dashed line */}
          <Line
            type="natural"
            data={projectedData}
            dataKey="current"
            stroke="var(--color-primary-brand)"
            strokeWidth={2.5}
            strokeDasharray="7 7"
            dot={false}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
