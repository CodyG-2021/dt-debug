import React from "react";
import dayjs from "dayjs";
import {
  Sparklines,
  // SparklinesLine,
  // SparklinesCurve,
  // SparklinesSpots,
  SparklinesBars,
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

function GasResult(props) {
  // Get the last key of the returned data
  // console.log(Object.keys(props.results)[Object.keys(props.results).length-1]);
  // console.log(props.results);
  // TODO: this one day needs to update the date to move between cards, unfortunately also means that the api puller needs to be per card and not just one big pull
  function alertMe() {
    alert(`Hello`);
  }

  let resultsLength = Object.keys(props.results).length;

  let arrayHolderGas = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for (let i = 0; i < resultsLength; i++) {
    arrayHolderGas.push(props.results[i].gas);
  }

  //------------------------------------------------------------
  let todayGas = props.results[7].gas;
  // console.log(todayGas)
  let yesterdayGas = props.results[6].gas;
  // console.log(yesterdayGas)
  let trueCheck = Boolean(todayGas > yesterdayGas);

  function todayVsYestPercentage(yesterdayGas, todayGas) {
    if (yesterdayGas === 0) {
      return 100;
    } else if (yesterdayGas === todayGas ) {
      return 0;
    } else {
      return ((100 * yesterdayGas) / todayGas).toFixed(0);
    }
  }
  //--------------------------------------------------------------

  let sevenDayAvg = Math.round(arrayHolderGas.reduce(reducer) / resultsLength);
  let trueCheckSevenDayAvg = Boolean(todayGas > sevenDayAvg);

  function todayVsSevenDayPercentage(sevenDayAvg, todayGas) {
    if (sevenDayAvg === 0) {
      return 100;
    } else if (sevenDayAvg === todayGas) {
      return 0;
    } else {
      return ((100 * sevenDayAvg) / todayGas).toFixed(0);
    }
  }

  return (
    <div className="container-fluid justify-content-center">
      <h1 className="text-center">Gas</h1>
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
          {props.results[7].gas}
        </h1>
      </div>

      <GraphContainer className="row">
        <Sparklines data={arrayHolderGas} margin={6}>
        <SparklinesBars style={{ fill: "red" }} />
          {/* <SparklinesLine
            style={{ strokeWidth: 3, stroke: "green", fill: "none" }}
          /> */}
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
          <h2>{`${todayVsYestPercentage(yesterdayGas, todayGas)}%`}</h2>
        </div>
        <div className="col-sm text-end">
          {trueCheckSevenDayAvg ? (
            <FaIcons.FaArrowAltCircleUp size={45} style={{ color: "green" }} />
          ) : (
            <FaIcons.FaArrowAltCircleDown size={45} style={{ color: "red" }} />
          )}
        </div>
        <div className="col-sm">
          <h2>{`${todayVsSevenDayPercentage(sevenDayAvg, todayGas)}%`}</h2>
        </div>
      </div>
    </div>
  );
}

export default GasResult;