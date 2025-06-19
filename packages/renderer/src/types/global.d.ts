type TableAbstract = {
  columns: string[];
  rows: (string | number)[][];
};

type ChartCanvasProps = {
  tableData: TableAbstract;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChartOption = any;
