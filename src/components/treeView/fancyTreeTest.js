//* <-------------------Working---------------------------->
import axios from "axios";
import AuthService from "../login/auth";
import "../treeView/fancyTreeStyle.css"
import("jquery.fancytree/dist/skin-lion/ui.fancytree.css"); // CSS or LESS
const $ = require("jquery");
const fancytree = require("jquery.fancytree");

let loggedIn = AuthService.authChecker();
// console.log(`This is on the fancyTree.js: ${loggedIn}`);

function TreeViewTest() {
  $(function () {
    $("#tree").fancytree({
      checkbox: true,
      icon: false,
      selectMode: 3,
      keyboard: true,
      source: axios
        .get(`https://api.pramsplus.com/group-sites`, {
          params: { group: "176" },
          headers: { Authorization: `Bearer ${AuthService.getAuth()}` },
        })
        .then((res) => {
          return res.data;
        }),

      select: function (event, data) {
        //* Display list of selected nodes
        var selNodes = data.tree.getSelectedNodes();
        //* convert to title/key array
        var selKeys = $.map(selNodes, function (node) {
          if (node.key !== "Parent") {
            //* Only grab keys with SID
            return node.key;
          }
        });
        $("#echoSelection2").text(selKeys.join(", "));
      },
    });
    const tree = fancytree.getTree("#tree");
    console.log(tree);

    //* Add Connector lines since there is'nt a built in option
    setTimeout(() => {
      $(".fancytree-container").addClass("fancytree-connectors");
    }, "100");
  });

  return (
    <>
        <>
          <div id="tree"></div>
          {/*//*To see what its selecting */}
          {/* <div>
            Selected keys: <span id="echoSelection2">-</span>
          </div> */}
        </>

      {/* {loggedIn ? (
        <>
          <div id="tree"></div>
          <div>
            Selected keys: <span id="echoSelection2">-</span>
          </div>
        </>
      ) : (
        <div>Not Logged in </div>
      )} */}
    </>
  );
}

export default TreeViewTest;
//* <-------------------Working---------------------------->
// import React, { useEffect } from "react";
// import $ from "jquery";
// import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less'
// import {createTree, version} from 'jquery.fancytree'
// import "jquery.fancytree/dist/modules/jquery.fancytree.edit";
// import "jquery.fancytree/dist/modules/jquery.fancytree.filter";

// function TreeViewTest() {
//   useEffect(() => {
//     const tree = createTree("#tree", {
//       source: {
//         url: "https://cdn.jsdelivr.net/gh/mar10/fancytree@72e03685/demo/ajax-tree-products.json",
//       },
//       extensions: ["edit", "filter"],
//       checkbox: true,
//       selectMode: 3,
//     });
//   }, []);

//   return (
//     <>
//       <div id="tree"></div>
//     </>
//   );
// }

// export default TreeViewTest;

// [
//   { title: "Node 1", key: "1" },
//   {
//     title: "Folder 2",
//     key: "2",
//     folder: true,
//     children: [
//       { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
//       {
//         title: "Node 2.2",
//         key: "4",
//         children: [
//           { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
//           { title: "Node 2.2", key: "4" },
//         ],
//       },
//     ],
//   },
// ]

//* All
// [
//   {
//     title: "All",
//     key: "group_id",
//     children: [
//       { title: "Well 1", key: "124" },
//       { title: "Well 2", key: "125" },
//       { title: "Well 2", key: "125" },
//       { title: "Well 2", key: "125" },
//       { title: "Well 2", key: "125" },
//       { title: "Well 2", key: "125" },
//       { title: "Well 2", key: "125" },
//       { title: "Well 2", key: "125" },
//       { title: "Well 2", key: "125" },
//     ],
//   },
// ],
//* Hierarchy
// [
//   {
//     title: "Demo_CO",
//     key: "Parent",
//     children: [
//       {
//         title: "Battlement Mesa",
//         key: "Parent",
//         children: [
//           {
//             title: "Cozzette",
//             key: "Parent",
//             children: [{ title: "Baden 23-2", key: "123" }],
//           },
//           {
//             title: "Mancos",
//             key: "Parent",
//             children: [{ title: "Hoyt 30-1", key: "124" }],
//           },
//         ],
//       },
//     ],
//   },
// ],
//* Tree
// [
//   {
//     title: "Demo_CO",
//     children: [
//       {
//         title: "Battlement Mesa",
//         children: [
//           {
//             title: "Cozzette",
//             children: [{ title: "Baden 23-2", key: "123" }],
//           },
//           {
//             title: "Mancos",
//             children: [{ title: "Hoyt 30-1", key: "124" }],
//           },
//         ],
//       },
//     ],
//   },
// ],
//* Test

//   {url: "https://cdn.jsdelivr.net/gh/mar10/fancytree@72e03685/demo/ajax-tree-products.json",
// },

// lazyLoad: function (event, data) {
//   data.result = {
//     url: "https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-sub2.json",
//   };
// },

// activate: function (event, data) {
//   $("#statusLine").text(event.type + ": " + data.node);
// },

// function ArrayPuller() {
// axios
//         .get(`https://api.pramsplus.com/group-sites`, {
//           params: { group: "176" },
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => {
//           resArrayObject = res.data;
//           console.log(resArrayObject);
//         }),

// }
