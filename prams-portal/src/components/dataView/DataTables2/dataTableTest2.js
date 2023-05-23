import React, { Component } from "react";
import DataTable from "datatables.net-bs5";
import "jquery";
import DataTableDataTwo from "./dataTableData2";

document.addEventListener("DOMContentLoaded", function () {
  let table = new DataTable("#example");
  console.log(table)
});


class DataTableCompTwo extends Component {
  render() {
    // window.location.reload(true);
    return (
      <>
        <DataTableDataTwo />
      </>
    );
  }
}

export default DataTableCompTwo;
