import { useEffect, useState } from "react";
import { fetchTableData, fetchChartOption } from "./utils";
import ChartCanvas from "./components/canva";
import TableView from "./components/tableView";

export default function App() {
  const [tableData, setTableData] = useState<TableProps | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chartOption, setChartOption] = useState<any>(null);
  const [loadingChart, setLoadingChart] = useState(false);

  useEffect(() => {
    async function loadTable() {
      const table = await fetchTableData();
      setTableData(table);
    }
    loadTable();
  }, []);

  async function onLoadChart() {
    if (!tableData) return;
    setLoadingChart(true);
    try {
      const chart = await fetchChartOption(tableData);
      setChartOption(chart);
    } finally {
      setLoadingChart(false);
    }
  }

  if (!tableData) {
    return <div>加载表格中...</div>;
  }

  return (
    <div className="app-container" style={{ padding: 20 }}>
      {/* 先渲染表格 */}
      <TableView tableData={tableData} />

      {/* 按钮触发图表加载 */}
      {!chartOption && (
        <button
          onClick={onLoadChart}
          disabled={loadingChart}
          style={{ marginTop: 16, padding: "8px 16px" }}
        >
          {loadingChart ? "加载图表中..." : "加载图表"}
        </button>
      )}

      {/* 有了配置才渲染图表 */}
      {chartOption && <ChartCanvas chartOption={chartOption} />}
    </div>
  );
}
