import React from "react";
import DnD from "../components/dnd/dnd";
import AuthService from ".././components/login/auth";

let loggedIn = AuthService.authChecker();
console.log(`This is on the home.js: ${loggedIn}`);

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center homeCardCont">
        {loggedIn ? <DnD /> : AuthService.redirectLogin()}
      </div>
    </>
  );
};

export default Home;
