export default function MeterForm() {
  return (
    <div className="container-lg text-center">
      <form>
        <div className="form" id="first">
          <div className="card">
            <div className="card-header">Overview</div>
            <div className="card-body">
              <div className="row">
                <div className="form-group col-sm-2">
                  <label for="inputEmail4">Site Name</label>
                  <input
                    type="text"
                    className="form-control"
                    // id="inputEmail4"
                    // placeholder="Email"
                  />
                </div>
                <div className="form-row col-sm-2 ">
                  <label for="inputPassword4">Calibration ID</label>
                  <input
                    type="text"
                    className="form-control"
                    // id="inputPassword4"
                    // placeholder="Password"
                  />
                </div>
                <div className="form-row col-sm-2 ">
                  <label for="inputPassword4">Reason for Report</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    // placeholder="Password"
                  />
                </div>
                <div className="form-check col-sm-2">
                  <label className="form-check-label" for="flexCheckDefault">
                    Sample Caught
                  </label>
                  <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </div>
                <div className="form-row col-sm-3">
                  <label for="inputPassword4">Reason for Report</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    // placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="row" id="secondRow">
        <div className="col">
          <form>
            <div className="form">
              <div className="card ">
                <div className="card-header ">Static Test</div>
                <div className="card-body">
                  <div className="row">
                    <div className="container text-center">
                      <div className="card">
                        <div className="card-header">Found</div>
                        <div className="card-body">
                          <form>
                            <div className="row p-1" id="header">
                              <div className="col">Portion</div>
                              <div className="col">Meter</div>
                              <div className="col">Dead Wt</div>
                              <div className="col">+AP</div>
                              <div className="col">=AR</div>
                            </div>
                            <div className="row p-1" id="found">
                              <div className="form-group col gx-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Zero"
                                />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="row p-1" id="found">
                              <div className="form-group col gx-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Mid"
                                />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="row p-1" id="found">
                              <div className="form-group col gx-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full"
                                />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">Left</div>
                        <div className="card-body">
                          <form>
                            <div className="row p-1" id="header">
                              <div className="col">Portion</div>
                              <div className="col">Meter</div>
                              <div className="col">Dead Wt</div>
                              <div className="col">+AP</div>
                              <div className="col">=AR</div>
                            </div>
                            <div className="row" id="found">
                              <div className="form-group col gx-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Zero"
                                />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="row" id="found">
                              <div className="form-group col gx-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Mid"
                                />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="row" id="found">
                              <div className="form-group col gx-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full"
                                />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col gx-1">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col">
          <form>
            <div className="form">
              <div className="card ">
                <div className="card-header">Differential Test</div>
                <div className="card-body"></div>
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-header ">As Found</div>
                      <div className="card-body">
                        <div className="row p-1">
                          <div className="col">
                            <label>Meter</label>
                          </div>
                          <div className="col">
                            <label>Inch H2O</label>
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-header ">As Left</div>
                      <div className="card-body">
                        <div className="row p-1">
                          <div className="col">
                            <label>Meter</label>
                          </div>
                          <div className="col">
                            <label>Inch H2O</label>
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row" id="thirdRow">
        <div className="col">
          <div className="card">
            <div className="card-header">Orifice Meter</div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col p-1">Orifice Meter Make</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Meter Type</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Meter Clock Rotation</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Meter Serial</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">
                    Orifice Meter Differential Range
                  </div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Meter Static Range</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Meter Run Size</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">Orifice Plate</div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col p-1">Orifice Plate Clean</div>
                  <div className="form-group col p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Plate Sharp</div>
                  <div className="form-group col p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Plate Damaged</div>
                  <div className="form-group col p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Plate Miked Horizontal</div>
                  <div className="form-group col p-1">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Plate Miked Vertical</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">
                    Orifice Plate Seal Condition Good
                  </div>
                  <div className="form-group col p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Plate Size</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">
                    Orifice Plate Diff Pen Arc Check
                  </div>
                  <div className="form-group col p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Orifice Plate Diff Pen Arc Time</div>
                  <div className="form-group col p-1">
                    <input type="time" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="fourthRow">
        <div className="col">
          <div className="card">
            <div className="card-header">BTU Update</div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col p-1">BTU</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Specific Gravity</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Meter Run Type</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Meter Run Taps</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-1">Static Connection</div>
                  <div className="form-group col p-1">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row" id="fifthRow">
        <form>
          <div className="form" id="first">
            <div className="card">
              <div className="card-header">Summary</div>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col">
                    <label for="inputEmail4">Line Pressure</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-row col ">
                    <label for="inputPassword4">Reading</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-row col ">
                    <label for="inputPassword4">Diff. Average</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="form-row col">
                    <label for="inputPassword4">Static Average</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label for="inputEmail4">User ID</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-row col ">
                    <label for="inputPassword4">Plate Check</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-row col ">
                    <label for="inputPassword4">Remarks</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
