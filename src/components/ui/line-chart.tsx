import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Line,
  LineChart,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", current: 15, previous: 8 },
  { name: "Feb", current: 8, previous: 18 },
  { name: "Mar", current: 8, previous: 11 },
  { name: "Apr", current: 16, previous: 13 },
  { name: "May", current: null, previous: 12 },
  { name: "Jun", current: null, previous: 21 },
];

// Projected data for dashed line
const projectedData = [
  { name: "Jan", current: null, previous: null },
  { name: "Feb", current: null, previous: null },
  { name: "Mar", current: null, previous: null },
  { name: "Apr", current: 16, previous: null },
  { name: "May", current: 24, previous: null },
  { name: "Jun", current: 16, previous: null },
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
            type="monotone"
            dataKey="current"
            stroke="var(--color-primary-brand)"
            strokeWidth={2.5}
            dot={false}
            connectNulls={false}
          />

          {/* Previous Week - Blue solid line */}
          <Line
            type="monotone"
            dataKey="previous"
            stroke="var(--color-secondary-cyan)"
            strokeWidth={2.5}
            dot={false}
            connectNulls={true}
          />

          {/* Projected dashed line */}
          <Line
            type="monotone"
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
