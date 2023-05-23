import DataTable from "datatables.net-bs5";
import DataTableDataTwo from "../components/dataView/DataTables2/dataTableData2";
import { useEffect } from "react";

export function DataView() {
  useEffect(() => {
    let table = new DataTable(document.getElementById("example"));
    console.log(table);
  })
  return (
    <>
      <DataTableDataTwo />
    </>
  );
}
