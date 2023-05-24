import React, { useEffect } from "react";
import TreeViewTest from "../../treeView/fancyTreeTest";
import DataTableDataTwo from "../DataTables2/dataTableData2";

export function DataViewStage() {
  //   document.addEventListener("DOMContentLoaded", function () {
  //   let table = new DataTable('#example', {
  //     scrollY: '200px',
  //     scrollCollapse: true,
  //     paging: false,
  //   });
  // });
  return (
    <>
      <div className="row">
        <div
          className="col"
          style={{
            maxWidth: "215px",
            marginLeft: "22px",
            backgroundColor: "#002F65",
          }}
        >
          <TreeViewTest />
        </div>
        <div className="col" style={{ maxWidth: "100%", marginLeft: "5px" }}>
          <div
            className="row"
            style={{
              height: "444px",
              backgroundColor: "purple",
              // marginLeft: "0px",
            }}
          >
            <label>
              Show{" "}
              <select
                name="example_length"
                aria-controls="example"
                className=""
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              {" "}entries
            </label>
          </div>
          <div
            className="row"
            style={{
              height: "443px",
              backgroundColor: "green",
              // marginLeft: "0px",
            }}
          >
            <DataTableDataTwo />
          </div>
        </div>
      </div>
    </>
  );
}
