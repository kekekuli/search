type TableProps = {
  columns: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: Array<Record<string, any>>;
};

type ChartCanvasProps = {
  tableData: TableProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChartOption = any;
