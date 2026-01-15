import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "Jan", uv: 17, pv: 5 },
  { name: "Feb", uv: 21, pv: 5 },
  { name: "Mar", uv: 19, pv: 3 },
  { name: "Apr", uv: 22, pv: 7 },
  { name: "May", uv: 16, pv: 3 },
  { name: "Jun", uv: 21, pv: 5 },
];

const YaxisCordinates = [0, 10, 20, 30];

export default function StackedBarChart() {
  return (
    <div className="w-full h-42">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          {/* Custom grid lines */}
          {YaxisCordinates.map((v) => (
            <ReferenceLine key={v} y={v} stroke="rgba(0,0,0,0.06)" />
          ))}

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            dy={10}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />

          <YAxis
            width={28}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            tickFormatter={(value) => `${value}M`}
            domain={[0, 30]}
            ticks={YaxisCordinates}
            dy={-5}
            padding={{ top: 12 }}
          />

          <Bar
            dataKey="uv"
            stackId="a"
            fill="var(--color-secondary-cyan)"
            barSize={22}
          />
          <Bar
            dataKey="pv"
            stackId="a"
            fill="var(--color-secondary-cyan)"
            fillOpacity={0.4}
            barSize={22}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
