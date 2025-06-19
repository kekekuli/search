import ReactECharts from "echarts-for-react";

export default function ChartCanvas({ chartOption }: ChartCanvasProps) {
  return (
    <div style={{ padding: "1rem" }}>
      <ReactECharts option={chartOption} style={{ height: 400 }} />
    </div>
  );
}
