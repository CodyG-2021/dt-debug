import axios from "axios";
import AuthService from "../../login/auth";

const { REACT_APP_PRAMS_BASE_URL } = process.env;
const token = localStorage.getItem("tokenAuth");

// ! Will need to add more for the url for group and range if added.
// ! console.log(`${REACT_APP_PRAMS_BASE_URL}dailysummary?group=169&from=2021-08-24&to=2021-08-31`);

const today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDay();
let dd7 = dd + 7;

console.log(`${yyyy}-${mm}-${dd} then ${dd7}`)

const dataPuller = (endPoint) =>
  axios.get(
    `${REACT_APP_PRAMS_BASE_URL}${endPoint}?group=178&from=${yyyy}-${mm}-${dd}&to=${yyyy}-${mm}-${dd7}`,
    { headers: { Authorization: `Bearer ${AuthService.getAuth()}` } }
  );

//group=169&from=2021-08-26&to=2021-09-02

export default dataPuller;
