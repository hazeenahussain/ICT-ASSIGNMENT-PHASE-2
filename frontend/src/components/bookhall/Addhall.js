import React, { useState, useEffect } from "react";
import validation from "./validation";
import "./bookhall.css";
import { useNavigate } from "react-router-dom";
// import MyForm from "../DbForm";
import axios from "axios";

const Addhall = () => {
  let navigate = useNavigate();
  // Storing Form Field Values
  const [formValues, setFormValues] = useState({
    ictkid: "",
    name: "",
    hall: "",
    date: "",
    start: "",
    end: "",
    event: "",
  });

  // Manage Form Error Values
  const [formErrorValues, setFormErrorValues] = useState({});

  // Flag for Form Submission Status
  const [isSubmit, setIsSubmit] = useState(false);

  // Manage Field Change
  const handleChange = (event) => {
    const { name, value } = event.target; //destructuring
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  // Manage Form Refresh
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrorValues(validation(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrorValues).length === 0 && isSubmit) {
      addBookings();
    }
  }, [formErrorValues]);

  const addBookings = () => {
    console.log(formValues);
    axios
      .post("http://localhost:3005/api/addbooking", formValues)
      .then((res) => {
        alert("Successfully Booked Hall");
        navigate("../bookinglist", { replace: true });
        console.log("in axios post" + res.data);
      });
  };
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right"></ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* jquery validation */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Book here </h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form id="quickForm">
                    <div className="card-body">
                      {/* ictk id */}
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">ICTAK ID</label>
                        <input
                          type="text"
                          name="ictkid"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter ICTAK ID"
                          onChange={handleChange}
                          value={formValues.ictkid}
                        />
                      </div>
                      <span className="error">{formErrorValues.ictkid}</span>
                      <br></br>

                      {/* name */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Associate Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Associate Name"
                          onChange={handleChange}
                          value={formValues.name}
                        />
                      </div>
                      <span className="error">{formErrorValues.name}</span>
                      <br></br>

                      {/* hall */}
                      {/* <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Select a Hall</label>
                  <select
                  className="form-control "
                 
                  name="hall" required
                  placeholder="Enter Hall Name"
                  value={formValues.hall}
                  onChange={handleChange}
                >
                  <option>SUN</option>
                  <option>MOON</option>
                  <option>EARTH</option>
                </select>                  
                </div> */}

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Hall</label>
                        <input
                          type="text"
                          name="hall"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter hall"
                          onChange={handleChange}
                          value={formValues.hall}
                        />
                      </div>
                      <span className="error">{formErrorValues.hall}</span>
                      <br></br>

                      {/* date */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Date</label>
                        <input
                          type="date"
                          name="date"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="dd/mm/yyyy"
                          onChange={handleChange}
                          value={formValues.date}
                        />
                      </div>
                      <span className="error">{formErrorValues.date}</span>
                      <br></br>

                      {/* start */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Start Time
                        </label>
                        <input
                          type="time"
                          name="start"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="--.--"
                          onChange={handleChange}
                          value={formValues.start}
                        />
                      </div>
                      <span className="error">{formErrorValues.start}</span>
                      <br></br>

                      {/* end */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">End Time</label>
                        <input
                          type="time"
                          name="end"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="--.--"
                          onChange={handleChange}
                          value={formValues.end}
                        />
                      </div>
                      <span className="error">{formErrorValues.end}</span>
                      <br></br>

                      {/* event */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Event</label>
                        <input
                          type="text"
                          name="event"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Event details"
                          onChange={handleChange}
                          value={formValues.event}
                        />
                      </div>
                      <span className="error">{formErrorValues.event}</span>
                      <br></br>

                      {/* submit */}
                      <div className="form-group mb-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="terms"
                            className="custom-control-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="exampleCheck1"
                          >
                            I agree to the <a href="#">terms of service</a>.
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* /.card */}
              </div>
              {/*/.col (left) */}
              {/* right column */}
              <div className="col-md-6"></div>
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
};

export default Addhall;
