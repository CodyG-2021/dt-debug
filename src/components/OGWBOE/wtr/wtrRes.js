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

function WtrResult(props) {
  function alertMe() {
    alert(`Hello`);
  }

  let resultsLength = Object.keys(props.results).length;

  let arrayHolderWtr = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for (let i = 0; i < resultsLength; i++) {
    arrayHolderWtr.push(props.results[i].water);
  }

  //------------------------------------------------------------
  let todayBbls = props.results[7].water;
  // console.log(todayBbls)
  let yesterdayBbls = props.results[6].water;
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
  //--------------------------------------------------------------

  let sevenDayAvg = Math.round(arrayHolderWtr.reduce(reducer) / resultsLength);
  let trueCheckSevenDayAvg = Boolean(todayBbls > sevenDayAvg);

  function todayVsSevenDayPercentage(sevenDayAvg, todayBbls) {
    if (sevenDayAvg === 0) {
      return 100;
    } else if ( sevenDayAvg === todayBbls) {
      return 0;
    } else {
      return ((100 * sevenDayAvg) / todayBbls).toFixed(0);
    }
  }

  return (
    <div className="container-fluid justify-content-center">
      <h1 className="text-center">Water</h1>
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
          {props.results[7].water}
        </h1>
      </div>

      <GraphContainer className="row">
        <Sparklines data={arrayHolderWtr} margin={6}>
          <SparklinesLine
            style={{ stroke: "#559500", fill: "blue", fillOpacity: "1" }}
          />
        </Sparklines>
      </GraphContainer>
      <div className="row justify-content-center" style={{ marginTop: "15px" }}>
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

export default WtrResult;
