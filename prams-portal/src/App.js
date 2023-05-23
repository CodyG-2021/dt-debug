import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/navbars/leftNav/leftNav3";
import ChartTest from "./components/chartTest/chartTest";
import { DataView } from "./pages/dataView";
import ErrorPage from "./pages/404Page";
import { MeterCalibration } from "./pages/MeterCalibration";
// import TreeViewTest from "./components/treeView/fancyTreeTest";
import TreeViewTest from "./components/treeView/fancyTreeTest";
import TestFree from "./pages/testFree";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ position: "absolute", top: "60px", left: "40px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testPie" element={<ChartTest />} />
          <Route path="/testTable" element={<DataView />} />
          <Route path="/testForm" element={<MeterCalibration />} />
          <Route path="/testTree" element={<TreeViewTest />} />
          <Route path="/testFree" element={<TestFree />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
