import axios from "axios";

// const parseCookie = (str) =>
//   str
//     .split(";")
//     .map((v) => v.split("="))
//     .reduce((acc, v) => {
//       acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
//       return acc;
//     }, {});

let cookieArrayHolder = [];

class AuthService {
  parseCookie = (str) => (str) ? 
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {})
    :
    [];

  getAuth() {
    cookieArrayHolder.push(this.parseCookie(document.cookie));
    console.log(`This is the get auth on auth.js ${cookieArrayHolder[0].tokenA}`);
    return cookieArrayHolder[0].tokenA;
  }
  //* Checks the refresh token
  isValid() {
    cookieArrayHolder.push(this.parseCookie(document.cookie));
    console.log(cookieArrayHolder[0].tokenR);
    let tokenRCheck = cookieArrayHolder[0].tokenR;
    axios
      .post("https://api.pramsplus.com/refresh", {
        refreshToken: tokenRCheck,
      })
      .then((res) => {
        let validStatus = res.valid;
        console.log(validStatus);
        cookieArrayHolder = [];
        let tokenR = res.data.refreshToken;
        let tokenA = res.data.accessToken;
        let userId = res.data.userId;
        document.cookie = `tokenR=${tokenR}`;
        document.cookie = `tokenA=${tokenA}`;
        document.cookie = `userId=${userId}`;
        return validStatus;
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        alert("Something is wrong with the isValid Auth");
        // window.location.assign("/login");
      });
  }
  authChecker() {
    let authT = this.getAuth();
    console.log(`This is the authT variable: ${authT}`);
    console.log(`This is the session storage on auth.js ${sessionStorage.getItem("tA")}`);
    if (authT === sessionStorage.getItem("tA")) {
      return true;
    }
    return false;
  }
  redirectLogin() {
    window.location.assign("/login");
  }
  logout() {
    console.log("Did I Click???")
    document.cookie = `tokenR=null`;
    document.cookie = `tokenA=null`;
    document.cookie = `userId=null`;
    this.redirectLogin();
  }
}

export default new AuthService();
