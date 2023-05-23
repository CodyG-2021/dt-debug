import TreeData from "../components/MeterCalibration/treedata";
import MeterForm from "../components/MeterCalibration/form";

export function MeterCalibration() {
  // document.getElementsByClassName('treeview-animated').mdbTreeview();
  return (
    <div className="container-fluid p-0">
      {/* style={{ backgroundColor: "#201f91" }} */}
      <div className="row">
        <div
          className="col-2"
          style={{
            backgroundColor: "lightgrey",
            // height: "100vh",
            height: "800px",
            border: "5px solid black",
            padding: "0px",
            margin: "0px",
          }}
        >
          <TreeData />
        </div>
        <div className="col p-1">
          <div className="card">
            <div className="row">
              <div className="col p-0">
                <h5 className="card-header">Road Runner #1 Meter Tests</h5>
              </div>
              <div className="col-5 p-0">
                <div className="input-group">
                  <span className="input-group-text">Date From To</span>
                  <input
                    type="date"
                    aria-label="First name"
                    className="form-control"
                  />
                  <input
                    type="date"
                    aria-label="Last name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Meter Form Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Created By/Date</th>
                    <th scope="col">Updated By/Date</th>
                    <th scope="col">Approved By/Date</th>
                    <th scope="col">View/Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">03/25/2023</th>
                    <td>Enterprise</td>
                    <td>Field Guy - 3/26/2023</td>
                    <td>Field Guy 2 - 3/27/2023</td>
                    <td>Foreman Guy - 3/28/2023</td>
                    <td>
                      {/* <!-- Button trigger modal --> */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        View/Edit
                      </button>

                      {/* <!-- Modal --> */}
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <MeterForm />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Edit
                              </button>
                              <button type="button" className="btn btn-primary">
                                Approve
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">03/25/2023</th>
                    <td>Enterprise</td>
                    <td>Field Guy - 3/26/2023</td>
                    <td>Field Guy 2 - 3/27/2023</td>
                    <td>Foreman Guy - 3/28/2023</td>
                    <td>
                      {/* <!-- Button trigger modal --> */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        View/Edit
                      </button>

                      {/* <!-- Modal --> */}
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <MeterForm />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Edit
                              </button>
                              <button type="button" className="btn btn-primary">
                                Approve
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">03/25/2023</th>
                    <td>Enterprise</td>
                    <td>Field Guy - 3/26/2023</td>
                    <td>Field Guy 2 - 3/27/2023</td>
                    <td>Foreman Guy - 3/28/2023</td>
                    <td>
                      {/* <!-- Button trigger modal --> */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        View/Edit
                      </button>

                      {/* <!-- Modal --> */}
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <MeterForm />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Edit
                              </button>
                              <button type="button" className="btn btn-primary">
                                Approve
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
