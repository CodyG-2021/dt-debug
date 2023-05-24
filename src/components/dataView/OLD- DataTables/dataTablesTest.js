import React, { Component } from "react";
import DataTableData from "./tableData";
import DataTable from 'datatables.net-bs5';
import $ from "jquery";


// let table = new DataTable("#example");
$(document).ready(function () {
  $('#example').DataTable();
});

class DataTableComp extends Component {
  // state = {
  //   isLoading: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ isLoading: false });
  //   }, 1000);
  // }
  render() {
    // const { isLoading } = this.state;

    // if (isLoading) {
    //   return <div className="text-center">Loading...</div>;
    // }
    return (
      <>
        <DataTableData />
      </>

    );
  }
}

export default DataTableComp;
