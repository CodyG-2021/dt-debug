import React, { useState } from "react";
import "../components/login/login.css";
import axios from "axios";

function Login(props) {
  //* Create state variables for the fields in the form
  //* We are also setting their initial values to an empty string
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    //* Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;
    //* Based on the input type, we set the state of that type
    if (inputType === "companyName") {
      setCompanyName(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };
  const handleFormSubmit = (event) => {
    //* Stop page from reloading on submit
    event.preventDefault();
    //* Axios post must use the key in the parameter
    axios
      .post("https://api.pramsplus.com/auth", {
        company: companyName,
        username: userName,
        password: password,
      })
      .then((res) => {
        //* Updated 2-20-23 to capture refresh token and  user ID
        let tokenR = res.data.refreshToken;
        let tokenA = res.data.accessToken;
        let userId = res.data.userId;
        document.cookie = `tokenR=${tokenR}`;
        document.cookie = `tokenA=${tokenA}`;
        sessionStorage.setItem("tA", tokenA);
        document.cookie = `userId=${userId}`;
        // To test the cooke extracter -----------------
        // const parseCookie = (str) =>
        //   str
        //     .split(";")
        //     .map((v) => v.split("="))
        //     .reduce((acc, v) => {
        //       acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
        //         v[1].trim()
        //       );
        //       return acc;
        //     }, {});

        // let cookieArrayHolder = [];
        // cookieArrayHolder.push(parseCookie(document.cookie));
        // console.log(JSON.stringify(parseCookie(document.cookie)));
        // console.log(cookieArrayHolder[0].tokenA);
        //* When everything is done set the form to null again.
        setCompanyName("");
        setUserName("");
        setPassword("");
        tokenR = " ";
        tokenA = " ";
        userId = " ";
        //* Jump them to the main page
        window.location.assign("/");
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        alert("Incorrect Company, Username, or Password");
        window.location.assign("/login");
      });
  };

  return (
    <>
      <div className="form-signIn text-center">
        <form className="loginForm">
          <img
            className="mb-4"
            src="/images/PP_logo_Working no background.png"
            alt="Prams Logo"
            width="150"
            height="150"
          />
          <h1 className="mb-3 fw-normal title">
            <span className="titleFirst">PRAMS</span>
            <span className="titleLast">Portal</span>
          </h1>
          {/* --- Company Name --- */}
          <div className="form-floating">
            <input
              className="form-control ediName"
              value={companyName}
              name="companyName"
              onChange={handleInputChange}
              type="text"
              id="floatingInput"
              placeholder="Company EDI Name"
            />
            <label for="floatingInput">Company EDI Name</label>
          </div>
          {/* --- UserName --- */}
          <div className="form-floating">
            <input
              className="form-control username"
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="floatingInput"
              placeholder="Username"
            />
            <label for="floatingInput">Username</label>
          </div>
          {/* --- Password --- */}
          <div className="form-floating">
            <input
              className="form-control password"
              value={password}
              name="password"
              onChange={handleInputChange}
              type="password"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          {/* --- Remember Me checkbox --- */}
          {/* TODO: need to figure this section out */}
          {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" />
              Remember me
            </label>
          </div> */}
          {/* --- Login Submit Button--- */}
          <button
            className="w-100 btn btn-lg btn-primary"
            type="button"
            onClick={handleFormSubmit}
          >
            Log In
          </button>
          {/* --- Button trigger modal --- */}
          <button
            type="button"
            className="btn btn-primary help-modal-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            Need Help?
          </button>
          {/* --- Modal--- */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Portal Help
                  </h5>
                </div>
                <div className="modal-body">
                  Call Prams: 303-904-6855 Option 1
                  <br />
                  Email: Support@pramsplus.com
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* --- End of Modal --- */}
          <p className="mt-5 mb-3 text-muted">&copy; Prams Plus 2021</p>
        </form>
      </div>
    </>
  );
}

export default Login;

//NOTES--------------------------------------------------------------------------
// Use 20-React -- 16--ReactForms for help
// Fetching data in 20-React -- 17 ins_fetching_data
// GET SET data to local storage -- 04-web-api -- 21-local-storage
