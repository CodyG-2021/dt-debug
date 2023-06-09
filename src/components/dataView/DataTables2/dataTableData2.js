import React, { useEffect } from "react";
import $ from "jquery";
import DataTable from "datatables.net-bs5";
// import JSZip from "jszip";
// import pdfMake from "pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import "datatables.net-buttons-bs5";
// import "datatables.net-buttons/js/buttons.html5";

// DataTable.Buttons.jszip(JSZip);
// DataTable.Buttons.pdfMake(pdfMake);

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

import "../DataTables2/dataTableDataStyle.css";

function DataTableDataTwo() {
  // useEffect(() => {
  //   $(document).ready(function () {
  //     var table = $("#dvTable").DataTable({
  //       retrieve: true,
  //       lengthChange: false,
  //       // dom: 'Bftip',
  //       buttons: ["copy", "excel", "pdf", "colvis"],
  //     });
  //     table
  //       .buttons()
  //       .container()
  //       .appendTo("#dvTable_wrapper .col-md-6:eq(0)");
  //   });
  //   $(document).ready(function () {
  //     var table = $("#dvTable").DataTable({
  //       retrieve: true,
  //       lengthChange: false,
        // scrollY: 275,
        // scrollCollapse: true,
        // dom: 'Bftip',
  //       buttons: ['copy', 'excel', 'pdf', 'colvis'],
  //       // buttons: [ 'copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5']
  //     });
  //     // table
  //     //   .buttons()
  //     //   .container()
  //     //   .appendTo($(".col-sm-12:eq(0)", table.table().container()));
  //   });
  // });
  // import "datatables.net-bs5";
  // import 'datatables.net-buttons-bs5';
  // buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
  // 'copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5',
  
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#ffffff",
        maxHeight: "443px",
        maxWidth: "1645px",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <table
        id="dvTable"
        className="table table-hover table-striped "
        // style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
        {/* <tbody> */}
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011-04-25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011-07-25</td>
            <td>$170,750</td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009-01-12</td>
            <td>$86,000</td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012-03-29</td>
            <td>$433,060</td>
          </tr>
          <tr>
            <td>Airi Satou</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>33</td>
            <td>2008-11-28</td>
            <td>$162,700</td>
          </tr>
          <tr>
            <td>Brielle Williamson</td>
            <td>Integration Specialist</td>
            <td>New York</td>
            <td>61</td>
            <td>2012-12-02</td>
            <td>$372,000</td>
          </tr>
          <tr>
            <td>Herrod Chandler</td>
            <td>Sales Assistant</td>
            <td>San Francisco</td>
            <td>59</td>
            <td>2012-08-06</td>
            <td>$137,500</td>
          </tr>
          <tr>
            <td>Rhona Davidson</td>
            <td>Integration Specialist</td>
            <td>Tokyo</td>
            <td>55</td>
            <td>2010-10-14</td>
            <td>$327,900</td>
          </tr>
          <tr>
            <td>Colleen Hurst</td>
            <td>Javascript Developer</td>
            <td>San Francisco</td>
            <td>39</td>
            <td>2009-09-15</td>
            <td>$205,500</td>
          </tr>
          <tr>
            <td>Sonya Frost</td>
            <td>Software Engineer</td>
            <td>Edinburgh</td>
            <td>23</td>
            <td>2008-12-13</td>
            <td>$103,600</td>
          </tr>
          <tr>
            <td>Jena Gaines</td>
            <td>Office Manager</td>
            <td>London</td>
            <td>30</td>
            <td>2008-12-19</td>
            <td>$90,560</td>
          </tr>
          <tr>
            <td>Quinn Flynn</td>
            <td>Support Lead</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2013-03-03</td>
            <td>$342,000</td>
          </tr>
          <tr>
            <td>Charde Marshall</td>
            <td>Regional Director</td>
            <td>San Francisco</td>
            <td>36</td>
            <td>2008-10-16</td>
            <td>$470,600</td>
          </tr>
          <tr>
            <td>Haley Kennedy</td>
            <td>Senior Marketing Designer</td>
            <td>London</td>
            <td>43</td>
            <td>2012-12-18</td>
            <td>$313,500</td>
          </tr>
          <tr>
            <td>Tatyana Fitzpatrick</td>
            <td>Regional Director</td>
            <td>London</td>
            <td>19</td>
            <td>2010-03-17</td>
            <td>$385,750</td>
          </tr>
          <tr>
            <td>Michael Silva</td>
            <td>Marketing Designer</td>
            <td>London</td>
            <td>66</td>
            <td>2012-11-27</td>
            <td>$198,500</td>
          </tr>
          <tr>
            <td>Paul Byrd</td>
            <td>Chief Financial Officer (CFO)</td>
            <td>New York</td>
            <td>64</td>
            <td>2010-06-09</td>
            <td>$725,000</td>
          </tr>
          <tr>
            <td>Gloria Little</td>
            <td>Systems Administrator</td>
            <td>New York</td>
            <td>59</td>
            <td>2009-04-10</td>
            <td>$237,500</td>
          </tr>
          <tr>
            <td>Bradley Greer</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>41</td>
            <td>2012-10-13</td>
            <td>$132,000</td>
          </tr>
          <tr>
            <td>Dai Rios</td>
            <td>Personnel Lead</td>
            <td>Edinburgh</td>
            <td>35</td>
            <td>2012-09-26</td>
            <td>$217,500</td>
          </tr>
          <tr>
            <td>Jenette Caldwell</td>
            <td>Development Lead</td>
            <td>New York</td>
            <td>30</td>
            <td>2011-09-03</td>
            <td>$345,000</td>
          </tr>
          <tr>
            <td>Yuri Berry</td>
            <td>Chief Marketing Officer (CMO)</td>
            <td>New York</td>
            <td>40</td>
            <td>2009-06-25</td>
            <td>$675,000</td>
          </tr>
          <tr>
            <td>Caesar Vance</td>
            <td>Pre-Sales Support</td>
            <td>New York</td>
            <td>21</td>
            <td>2011-12-12</td>
            <td>$106,450</td>
          </tr>
          <tr>
            <td>Doris Wilder</td>
            <td>Sales Assistant</td>
            <td>Sydney</td>
            <td>23</td>
            <td>2010-09-20</td>
            <td>$85,600</td>
          </tr>
          <tr>
            <td>Angelica Ramos</td>
            <td>Chief Executive Officer (CEO)</td>
            <td>London</td>
            <td>47</td>
            <td>2009-10-09</td>
            <td>$1,200,000</td>
          </tr>
          <tr>
            <td>Gavin Joyce</td>
            <td>Developer</td>
            <td>Edinburgh</td>
            <td>42</td>
            <td>2010-12-22</td>
            <td>$92,575</td>
          </tr>
          <tr>
            <td>Jennifer Chang</td>
            <td>Regional Director</td>
            <td>Singapore</td>
            <td>28</td>
            <td>2010-11-14</td>
            <td>$357,650</td>
          </tr>
          <tr>
            <td>Brenden Wagner</td>
            <td>Software Engineer</td>
            <td>San Francisco</td>
            <td>28</td>
            <td>2011-06-07</td>
            <td>$206,850</td>
          </tr>
          <tr>
            <td>Fiona Green</td>
            <td>Chief Operating Officer (COO)</td>
            <td>San Francisco</td>
            <td>48</td>
            <td>2010-03-11</td>
            <td>$850,000</td>
          </tr>
          <tr>
            <td>Shou Itou</td>
            <td>Regional Marketing</td>
            <td>Tokyo</td>
            <td>20</td>
            <td>2011-08-14</td>
            <td>$163,000</td>
          </tr>
          <tr>
            <td>Michelle House</td>
            <td>Integration Specialist</td>
            <td>Sydney</td>
            <td>37</td>
            <td>2011-06-02</td>
            <td>$95,400</td>
          </tr>
          <tr>
            <td>Suki Burks</td>
            <td>Developer</td>
            <td>London</td>
            <td>53</td>
            <td>2009-10-22</td>
            <td>$114,500</td>
          </tr>
          <tr>
            <td>Prescott Bartlett</td>
            <td>Technical Author</td>
            <td>London</td>
            <td>27</td>
            <td>2011-05-07</td>
            <td>$145,000</td>
          </tr>
          <tr>
            <td>Gavin Cortez</td>
            <td>Team Leader</td>
            <td>San Francisco</td>
            <td>22</td>
            <td>2008-10-26</td>
            <td>$235,500</td>
          </tr>
          <tr>
            <td>Martena Mccray</td>
            <td>Post-Sales support</td>
            <td>Edinburgh</td>
            <td>46</td>
            <td>2011-03-09</td>
            <td>$324,050</td>
          </tr>
          <tr>
            <td>Unity Butler</td>
            <td>Marketing Designer</td>
            <td>San Francisco</td>
            <td>47</td>
            <td>2009-12-09</td>
            <td>$85,675</td>
          </tr>
          <tr>
            <td>Howard Hatfield</td>
            <td>Office Manager</td>
            <td>San Francisco</td>
            <td>51</td>
            <td>2008-12-16</td>
            <td>$164,500</td>
          </tr>
          <tr>
            <td>Hope Fuentes</td>
            <td>Secretary</td>
            <td>San Francisco</td>
            <td>41</td>
            <td>2010-02-12</td>
            <td>$109,850</td>
          </tr>
          <tr>
            <td>Vivian Harrell</td>
            <td>Financial Controller</td>
            <td>San Francisco</td>
            <td>62</td>
            <td>2009-02-14</td>
            <td>$452,500</td>
          </tr>
          <tr>
            <td>Timothy Mooney</td>
            <td>Office Manager</td>
            <td>London</td>
            <td>37</td>
            <td>2008-12-11</td>
            <td>$136,200</td>
          </tr>
          <tr>
            <td>Jackson Bradshaw</td>
            <td>Director</td>
            <td>New York</td>
            <td>65</td>
            <td>2008-09-26</td>
            <td>$645,750</td>
          </tr>
          <tr>
            <td>Olivia Liang</td>
            <td>Support Engineer</td>
            <td>Singapore</td>
            <td>64</td>
            <td>2011-02-03</td>
            <td>$234,500</td>
          </tr>
          <tr>
            <td>Bruno Nash</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>38</td>
            <td>2011-05-03</td>
            <td>$163,500</td>
          </tr>
          <tr>
            <td>Sakura Yamamoto</td>
            <td>Support Engineer</td>
            <td>Tokyo</td>
            <td>37</td>
            <td>2009-08-19</td>
            <td>$139,575</td>
          </tr>
          <tr>
            <td>Thor Walton</td>
            <td>Developer</td>
            <td>New York</td>
            <td>61</td>
            <td>2013-08-11</td>
            <td>$98,540</td>
          </tr>
          <tr>
            <td>Finn Camacho</td>
            <td>Support Engineer</td>
            <td>San Francisco</td>
            <td>47</td>
            <td>2009-07-07</td>
            <td>$87,500</td>
          </tr>
          <tr>
            <td>Serge Baldwin</td>
            <td>Data Coordinator</td>
            <td>Singapore</td>
            <td>64</td>
            <td>2012-04-09</td>
            <td>$138,575</td>
          </tr>
          <tr>
            <td>Zenaida Frank</td>
            <td>Software Engineer</td>
            <td>New York</td>
            <td>63</td>
            <td>2010-01-04</td>
            <td>$125,250</td>
          </tr>
          <tr>
            <td>Zorita Serrano</td>
            <td>Software Engineer</td>
            <td>San Francisco</td>
            <td>56</td>
            <td>2012-06-01</td>
            <td>$115,000</td>
          </tr>
          <tr>
            <td>Jennifer Acosta</td>
            <td>Junior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>43</td>
            <td>2013-02-01</td>
            <td>$75,650</td>
          </tr>
          <tr>
            <td>Cara Stevens</td>
            <td>Sales Assistant</td>
            <td>New York</td>
            <td>46</td>
            <td>2011-12-06</td>
            <td>$145,600</td>
          </tr>
          <tr>
            <td>Hermione Butler</td>
            <td>Regional Director</td>
            <td>London</td>
            <td>47</td>
            <td>2011-03-21</td>
            <td>$356,250</td>
          </tr>
          <tr>
            <td>Lael Greer</td>
            <td>Systems Administrator</td>
            <td>London</td>
            <td>21</td>
            <td>2009-02-27</td>
            <td>$103,500</td>
          </tr>
          <tr>
            <td>Jonas Alexander</td>
            <td>Developer</td>
            <td>San Francisco</td>
            <td>30</td>
            <td>2010-07-14</td>
            <td>$86,500</td>
          </tr>
          <tr>
            <td>Shad Decker</td>
            <td>Regional Director</td>
            <td>Edinburgh</td>
            <td>51</td>
            <td>2008-11-13</td>
            <td>$183,000</td>
          </tr>
          <tr>
            <td>Michael Bruce</td>
            <td>Javascript Developer</td>
            <td>Singapore</td>
            <td>29</td>
            <td>2011-06-27</td>
            <td>$183,000</td>
          </tr>
          <tr>
            <td>Donna Snider</td>
            <td>Customer Support</td>
            <td>New York</td>
            <td>27</td>
            <td>2011-01-25</td>
            <td>$112,000</td>
          </tr>
        </tbody>
        <tfoot className="table-group-divider">
        {/* <tfoot > */}
          {/* <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr> */}
        </tfoot>
      </table>
    </div>
  );
}

export default DataTableDataTwo;

// document.addEventListener("DOMContentLoaded", function () {
//   let table = new DataTable("#example");
// });

// <div className="container">
//   <>
//     <div id="example_wrapper" className="dataTables_wrapper">
//       <div className="dataTables_length" id="example_length">
//         <label>
//           Show{" "}
//           <select
//             name="example_length"
//             aria-controls="example"
//             className=""
//           >
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//             <option value="100">100</option>
//           </select>{" "}
//           entries
//         </label>
//       </div>
//       <div id="example_filter" className="dataTables_filter">
//         <label>
//           Search:
//           <input
//             type="search"
//             className=""
//             placeholder=""
//             aria-controls="example"
//           />
//         </label>
//       </div>
//       <table
//         id="example"
//         className="display dataTable"
//         style={{ width: "100%" }}
//         aria-describedby="example_info"
//       >
//         <thead>
//           <tr>
//             <th
//               className="sorting sorting_asc"
//               tabIndex="0"
//               aria-controls="example"
//               rowSpan="1"
//               colSpan="1"
//               aria-sort="ascending"
//               aria-label="Name: activate to sort column descending"
//               style={{ width: "133.406px" }}
//             >
//               Name
//             </th>
//             <th
//               className="sorting"
//               tabIndex="0"
//               aria-controls="example"
//               rowSpan="1"
//               colSpan="1"
//               aria-label="Position: activate to sort column ascending"
//               style={{ width: "221.578px" }}
//             >
//               Position
//             </th>
//             <th
//               className="sorting"
//               tabIndex="0"
//               aria-controls="example"
//               rowSpan="1"
//               colSpan="1"
//               aria-label="Office: activate to sort column ascending"
//               style={{ width: "98.75px" }}
//             >
//               Office
//             </th>
//             <th
//               className="sorting"
//               tabIndex="0"
//               aria-controls="example"
//               rowSpan="1"
//               colSpan="1"
//               aria-label="Age: activate to sort column ascending"
//               style={{ width: "40.0156px" }}
//             >
//               Age
//             </th>
//             <th
//               className="sorting"
//               tabIndex="0"
//               aria-controls="example"
//               rowSpan="1"
//               colSpan="1"
//               aria-label="Start date: activate to sort column ascending"
//               style={{ width: "87.1719px" }}
//             >
//               Start date
//             </th>
//             <th
//               className="sorting"
//               tabIndex="0"
//               aria-controls="example"
//               rowSpan="1"
//               colSpan="1"
//               aria-label="Salary: activate to sort column ascending"
//               style={{ width: "74.7812px" }}
//             >
//               Salary
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="odd">
//             <td className="sorting_1">Airi Satou</td>
//             <td>Accountant</td>
//             <td>Tokyo</td>
//             <td>33</td>
//             <td>2008-11-28</td>
//             <td>$162,700</td>
//           </tr>
//           <tr className="even">
//             <td className="sorting_1">Angelica Ramos</td>
//             <td>Chief Executive Officer (CEO)</td>
//             <td>London</td>
//             <td>47</td>
//             <td>2009-10-09</td>
//             <td>$1,200,000</td>
//           </tr>
//           <tr className="odd">
//             <td className="sorting_1">Ashton Cox</td>
//             <td>Junior Technical Author</td>
//             <td>San Francisco</td>
//             <td>66</td>
//             <td>2009-01-12</td>
//             <td>$86,000</td>
//           </tr>
//           <tr className="even">
//             <td className="sorting_1">Bradley Greer</td>
//             <td>Software Engineer</td>
//             <td>London</td>
//             <td>41</td>
//             <td>2012-10-13</td>
//             <td>$132,000</td>
//           </tr>
//           <tr className="odd">
//             <td className="sorting_1">Brenden Wagner</td>
//             <td>Software Engineer</td>
//             <td>San Francisco</td>
//             <td>28</td>
//             <td>2011-06-07</td>
//             <td>$206,850</td>
//           </tr>
//           <tr className="even">
//             <td className="sorting_1">Brielle Williamson</td>
//             <td>Integration Specialist</td>
//             <td>New York</td>
//             <td>61</td>
//             <td>2012-12-02</td>
//             <td>$372,000</td>
//           </tr>
//           <tr className="odd">
//             <td className="sorting_1">Bruno Nash</td>
//             <td>Software Engineer</td>
//             <td>London</td>
//             <td>38</td>
//             <td>2011-05-03</td>
//             <td>$163,500</td>
//           </tr>
//           <tr className="even">
//             <td className="sorting_1">Caesar Vance</td>
//             <td>Pre-Sales Support</td>
//             <td>New York</td>
//             <td>21</td>
//             <td>2011-12-12</td>
//             <td>$106,450</td>
//           </tr>
//           <tr className="odd">
//             <td className="sorting_1">Cara Stevens</td>
//             <td>Sales Assistant</td>
//             <td>New York</td>
//             <td>46</td>
//             <td>2011-12-06</td>
//             <td>$145,600</td>
//           </tr>
//           <tr className="even">
//             <td className="sorting_1">Cedric Kelly</td>
//             <td>Senior Javascript Developer</td>
//             <td>Edinburgh</td>
//             <td>22</td>
//             <td>2012-03-29</td>
//             <td>$433,060</td>
//           </tr>
//         </tbody>
//         <tfoot>
//           <tr>
//             <th rowSpan="1" colSpan="1">
//               Name
//             </th>
//             <th rowSpan="1" colSpan="1">
//               Position
//             </th>
//             <th rowSpan="1" colSpan="1">
//               Office
//             </th>
//             <th rowSpan="1" colSpan="1">
//               Age
//             </th>
//             <th rowSpan="1" colSpan="1">
//               Start date
//             </th>
//             <th rowSpan="1" colSpan="1">
//               Salary
//             </th>
//           </tr>
//         </tfoot>
//       </table>
//       <div
//         className="dataTables_info"
//         id="example_info"
//         role="status"
//         // aria-live="polite"
//       >
//         Showing 1 to 10 of 57 entries
//       </div>
//       <div
//         className="dataTables_paginate paging_simple_numbers"
//         id="example_paginate"
//       >
//         <a
//           className="paginate_button previous disabled"
//           aria-controls="example"
//           aria-disabled="true"
//           role="link"
//           data-dt-idx="previous"
//           tabIndex="-1"
//           id="example_previous"
//         >
//           Previous
//         </a>
//         <span>
//           <a
//             className="paginate_button current"
//             aria-controls="example"
//             role="link"
//             aria-current="page"
//             data-dt-idx="0"
//             tabIndex="0"
//           >
//             1
//           </a>
//           <a
//             className="paginate_button "
//             aria-controls="example"
//             role="link"
//             data-dt-idx="1"
//             tabIndex="0"
//           >
//             2
//           </a>
//           <a
//             className="paginate_button "
//             aria-controls="example"
//             role="link"
//             data-dt-idx="2"
//             tabIndex="0"
//           >
//             3
//           </a>
//           <a
//             className="paginate_button "
//             aria-controls="example"
//             role="link"
//             data-dt-idx="3"
//             tabIndex="0"
//           >
//             4
//           </a>
//           <a
//             className="paginate_button "
//             aria-controls="example"
//             role="link"
//             data-dt-idx="4"
//             tabIndex="0"
//           >
//             5
//           </a>
//           <a
//             className="paginate_button "
//             aria-controls="example"
//             role="link"
//             data-dt-idx="5"
//             tabIndex="0"
//           >
//             6
//           </a>
//         </span>
//         <a
//           className="paginate_button next"
//           aria-controls="example"
//           role="link"
//           data-dt-idx="next"
//           tabIndex="0"
//           id="example_next"
//         >
//           Next
//         </a>
//       </div>
//     </div>
//   </>
// </div>
