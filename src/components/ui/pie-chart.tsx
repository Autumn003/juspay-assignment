import { Pie, PieChart } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data

// #endregion
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
        maxWidth: "100px",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="70%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={2}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </PieChart>
  );
}
