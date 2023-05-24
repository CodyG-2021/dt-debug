import React from "react";
import dayjs from "dayjs";
import {
  Sparklines,
  SparklinesLine,
  // SparklinesCurve,
  // SparklinesSpots,
  // SparklinesBars,
} from "react-sparklines";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";
import "../utils/styles.css";

const GraphContainer = styled.div`
  border: 2px solid black;
  border-radius: 25px;
  max-width: 300px;
  margin: auto;
`;

function OilResult(props) {
  // ? Get the last key of the returned data
  // ? console.log(Object.keys(props.results)[Object.keys(props.results).length-1]);
  // console.log(props.results);
  console.log(Object.values(props.results));
  // console.log(Object.keys(props.results).length)
  function alertMe() {
    alert(`Hello`);
  }

  let resultsLength = Object.keys(props.results).length;

  let arrayHolderOil = [];
  let arrayHolderGas = [];
  let arrayHolderWtr = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for (let i = 0; i < resultsLength; i++) {
    arrayHolderOil.push(props.results[i].oil);
  }
  // console.log(arrayHolderOil);
  for (let i = 0; i < resultsLength; i++) {
    arrayHolderGas.push(props.results[i].gas);
  }
  for (let i = 0; i < resultsLength; i++) {
    arrayHolderWtr.push(props.results[i].water);
  }

  //------------------------------------------------------------

  let todayBbls = props.results[7].oil;
  // console.log(todayBbls)
  let yesterdayBbls = props.results[6].oil;
  // console.log(yesterdayBbls)
  let trueCheck = Boolean(todayBbls > yesterdayBbls);

  function todayVsYestPercentage(yesterdayBbls, todayBbls) {
    if (yesterdayBbls === 0) {
      return 100;
    } else if (yesterdayBbls === todayBbls) {
      return 0;
    } else {
      return ((100 * yesterdayBbls) / todayBbls).toFixed(0);
    }
  }
  // ? My test
  // function percentage( testY, testT){
  //   if (testY === 0) {
  //     return 100;
  //   } else {
  //     return (( 100 * testY) / testT).toFixed(0);
  //   }
  // };

  // console.log(`This is the function : ${percentage( 0, 102.25)}`);
  //--------------------------------------------------------------

  let sevenDayAvg = Math.round(arrayHolderOil.reduce(reducer) / resultsLength);
  let trueCheckSevenDayAvg = Boolean(todayBbls > sevenDayAvg);

  function todayVsSevenDayPercentage(sevenDayAvg, todayBbls) {
    if (sevenDayAvg === 0) {
      return 100;
    } else if (yesterdayBbls === todayBbls) {
      return 0;
    } else {
      return ((100 * sevenDayAvg) / todayBbls).toFixed(0);
    }
  }

  return (
    <div className="container-fluid justify-content-center">
      <h1 className="text-center">Oil</h1>
      <div className="row align-items-start">
        <div className="col-2">
          <BiIcons.BiLeftArrowCircle
            onClick={alertMe}
            size={35}
            style={{ marginLeft: 65, marginTop: 4 }}
            className="dateSelectorLR"
          />
        </div>
        <div className="col-8">
          <h5 className="text-center">
            {dayjs(props.results[7].date).format("MM/DD/YYYY")}
          </h5>
        </div>
        <div className="col-2">
          <BiIcons.BiRightArrowCircle
            onClick={alertMe}
            size={35}
            style={{ marginLeft: -60, marginTop: 4 }}
            className="dateSelectorLR"
          />
        </div>
      </div>
      <div className="row">
        <h1 className="col" align="center">
          {props.results[7].oil}
        </h1>
      </div>

      <GraphContainer className="row">
        <Sparklines data={arrayHolderOil} margin={6}>
        {/* <SparklinesBars style={{ fill: "#41c3f9" }} /> */}
          <SparklinesLine
            style={{ strokeWidth: 3, stroke: "green", fill: "none" }}
          />
          {/* <SparklinesSpots
            size={4}
            style={{ stroke: "blue", strokeWidth: 3, fill: "white" }}
          /> */}
        </Sparklines>
      </GraphContainer>
      <div className="row justify-content-center" style={{marginTop: "15px"}}>
        <div className="col text-center">
          <h5>Today vs Yest.</h5>
        </div>
        <div className="col text-center">
          <h5>Today vs Yest.</h5>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm text-end">
          {trueCheck ? (
            <FaIcons.FaArrowAltCircleUp size={45} style={{ color: "green" }} />
          ) : (
            <FaIcons.FaArrowAltCircleDown size={45} style={{ color: "red" }} />
          )}
        </div>
        <div className="col-sm">
          <h2>{`${todayVsYestPercentage(yesterdayBbls, todayBbls)}%`}</h2>
        </div>
        <div className="col-sm text-end">
          {trueCheckSevenDayAvg ? (
            <FaIcons.FaArrowAltCircleUp size={45} style={{ color: "green" }} />
          ) : (
            <FaIcons.FaArrowAltCircleDown size={45} style={{ color: "red" }} />
          )}
        </div>
        <div className="col-sm">
          <h2>{`${todayVsSevenDayPercentage(sevenDayAvg, todayBbls)}%`}</h2>
        </div>
      </div>
    </div>
  );
}

export default OilResult;

// ? http://borisyankov.github.io/react-sparklines/ for more sparkline types
