import { Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const CustomPieTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;

  const { value } = payload[0];

  return (
    <div className="rounded-lg bg-[#1c1c1ccc] text-white px-2 py-1 text-xs backdrop-blur-2xl">
      {((value / 700) * 100).toFixed(2)}%
    </div>
  );
};

export default function PieChartWithPadding({
  isAnimationActive = true,
  data,
}: {
  isAnimationActive?: boolean;
  data: any;
}) {
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "120px",
        aspectRatio: 1,
        outline: 0,
      }}
      responsive
    >
      <Pie
        data={data}
        dataKey="value"
        innerRadius="65%"
        outerRadius="100%"
        cornerRadius="100%"
        paddingAngle={2}
        stroke="none"
        isAnimationActive={isAnimationActive}
      />

      <Tooltip content={<CustomPieTooltip />} />
      <RechartsDevtools />
    </PieChart>
  );
}
