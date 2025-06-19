export async function fetchTableData(): Promise<TableAbstract> {
  return {
    columns: ["日期", "销量", "利润", "客户数"],
    rows: [
      ["2025-06-01", 100, 30, 5],
      ["2025-06-02", 150, 50, 7],
      ["2025-06-03", 120, 40, 6],
      ["2025-06-04", 170, 60, 8],
      ["2025-06-05", 200, 80, 9],
    ],
  };
}

export async function fetchChartOption(
  tableData: TableAbstract,
): Promise<ChartOption> {
  const response = await fetch("http://localhost:3001/chart-option", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tableData }),
  });

  if (!response.ok) {
    throw new Error("获取图表配置失败");
  }

  return await response.json();
}
