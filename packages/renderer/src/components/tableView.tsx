interface TableViewProps {
  tableData: TableAbstract;
}

export default function TableView({ tableData }: TableViewProps) {
  return (
    <table className="w-full border border-gray-300 border-collapse">
      <thead>
        <tr className="bg-gray-100">
          {tableData.columns.map((col) => (
            <th
              key={col}
              className="border border-gray-300 px-4 py-2 text-center font-semibold"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row, i) => (
          <tr key={i} className="even:bg-gray-50">
            {row.map((cell, j) => (
              <td
                key={j}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
