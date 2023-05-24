import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
// import "../leftNav/leftNav3.css";
import "../leftNav/sideBar.css";
import AuthService from "../../login/auth";

let loggedIn = AuthService.authChecker();

function testLogout() {
  //? Not sure why it has to be in a function to work properly.
  AuthService.logout();
}

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: "#002F65", height: "60px" }}
      >
        <div className="container-fluid">
          <div className="row gx-0">
            <div
              className="col"
              id="sideBar"
              style={{
                width: "50px",
                height: "100%",
                backgroundColor: "#002F65",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "10",
              }}
            >
              <div
                className="row gx-0"
                style={{
                  height: "60px",
                  width: "100%",
                }}
              >
                {/* //* Profile Button-------------------------------------- */}
                <div className="dropdown">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/49164880?s=400&u=d10fa805aff2dc11a7151acebfac1450c8346ba4&v=4"
                      alt="mdo"
                      className="rounded-circle"
                    />
                  </a>
                  <ul className="dropdown-menu text-small shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                {/* //* Profile Button End-------------------------------------- */}
              </div>
              {/* //* Home Button ----------------------------------------- */}
              <div
                className="row"
                id="Home-Button"
                style={{
                  // backgroundColor: "#0dcaf0",
                  color: "#FFFFFF",
                  marginTop: "15px",
                }}
              >
                <div className="dropdown">
                  <div>
                    <AiIcons.AiOutlineHome
                    id="HomeButton"
                      style={{
                        height: "40px",
                        width: "40px",
                        marginLeft: "5px",
                        color: "#FFFFFF",
                      }}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    />
                  </div>
                  <div className="dropdown-content">
                    <a href="/">Link 1</a>
                  </div>
                </div>
              </div>
              {/* //* Home Button End----------------------------------------- */}
              {/* //* Home Button ----------------------------------------- */}
              <div
                className="row"
                id="Home-Button"
                style={{
                  // backgroundColor: "#0dcaf0",
                  color: "#FFFFFF",
                  marginTop: "15px",
                }}
              >
                <div className="dropdown">
                  <div>
                    <AiIcons.AiOutlineDashboard
                      style={{
                        height: "40px",
                        width: "40px",
                        marginLeft: "5px",
                        color: "#FFFFFF",
                      }}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    />
                  </div>
                  <div className="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/testTree">Link 2</a>
                  </div>
                </div>
              </div>
              {/* //* Home Button End----------------------------------------- */}
              {/* //* Home Button ----------------------------------------- */}
              <div
                className="row"
                id="Home-Button"
                style={{
                  // backgroundColor: "#0dcaf0",
                  color: "#FFFFFF",
                  marginTop: "15px",
                }}
              >
                <div className="dropdown">
                  <div>
                    <AiIcons.AiOutlineBarChart
                      style={{
                        height: "40px",
                        width: "40px",
                        marginLeft: "5px",
                        color: "#FFFFFF",
                      }}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    />
                  </div>
                  <div className="dropdown-content">
                    <a href="/dataView">Data View</a>
                  </div>
                </div>
              </div>
              {/* //* Home Button End----------------------------------------- */}
              {/* //* Home Button ----------------------------------------- */}
              <div
                className="row"
                id="Home-Button"
                style={{
                  // backgroundColor: "#0dcaf0",
                  color: "#FFFFFF",
                  marginTop: "15px",
                }}
              >
                <div className="dropdown">
                  <div>
                    <AiIcons.AiOutlineBook
                      style={{
                        height: "40px",
                        width: "40px",
                        marginLeft: "5px",
                        color: "#FFFFFF",
                      }}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    />
                  </div>
                  <div className="dropdown-content">
                    <a href="/">Link 1</a>
                  </div>
                </div>
              </div>
              {/* //* Home Button End----------------------------------------- */}
            </div>
          </div>
          <form className="d-flex" role="search" id="searchBox">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <div className="col d-flex justify-content-end">
            {loggedIn ? (
              <button
                id="log-out"
                type="button"
                className="btn btn-secondary"
                onClick={testLogout}
              >
                Log Out
              </button>
            ) : (
              <button
                id="log-In"
                type="button"
                className="btn btn-primary"
                onClick={AuthService.redirectLogin}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

{
  /* <AiIcons.AiOutlineHome style={{height: "50px", color: "#FFFFFF"}}/> */
}

{
  /* <IconContext.Provider value={{ color: "#fff" }}>
<div className="navbar-top">
  <div className="row navbar-top justify-content-between">
    <div className="col d-flex justify-content-start">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
    </div>
    <div className="col d-flex justify-content-center">
      <img
        src="PP_logo_192.png"
        alt="Prams Plus Logo"
        width="75"
        height="75"
        className="logo"
      />
    </div>
    <div className="col d-flex justify-content-end">
      {loggedIn ? (
        <button
          id="log-out"
          type="button"
          className="btn btn-secondary"
          onClick={testLogout}
          style={{
            width: "85px",
            height: "50px",
            marginTop: "15px",
            marginRight: "10px",
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          id="log-In"
          type="button"
          className="btn btn-primary"
          onClick={AuthService.redirectLogin}
          style={{
            width: "75px",
            height: "50px",
            marginTop: "15px",
            marginRight: "10px",
          }}
        >
          Log In
        </button>
      )}
    </div>
  </div>
</div>
<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
  <ul className="nav-menu-items" onClick={showSidebar}>
    <li className="navbar-toggle">
      <Link to="#" className="menu-bars-x">
        <AiIcons.AiOutlineClose />
      </Link>
    </li>
    {SidebarData.map((item, index) => {
      return (
        <li key={index} className={item.cName}>
          <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      );
    })}
  </ul>
</nav>
</IconContext.Provider>
<Outlet /> */
}
