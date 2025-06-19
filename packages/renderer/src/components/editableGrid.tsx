import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react-wrapper";
import { registerAllModules } from "handsontable/registry";

import "handsontable/styles/handsontable.min.css";
import "handsontable/styles/ht-theme-main.min.css";

registerAllModules();

export default function EditableGrid() {
  return (
    <div className="ht-theme-main-dark-auto w-full h-full">
      <HotTable
        data={[
          ["", "Tesla", "Volvo", "Toyota", "Ford"],
          ["2019", 10, 11, 12, 13],
          ["2020", 20, 11, 14, 13],
          ["2021", 30, 15, 12, 13],
        ]}
        rowHeaders={true}
        colHeaders={true}
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation" // for non-commercial use only
        minCols={20}
        minRows={50}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
