import React, { useState, useEffect } from "react";
import validation from "./validation";
import "./Regassociate.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Regassociate = () => {
  let navigate = useNavigate();

  // Storing Form Field Values
  const [formValues, setFormValues] = useState({
    ictkid: "",
    name: "",
    username: "",
    password: "",
    email: "",
    course: "",
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
      addAssociates();
    }
  }, [formErrorValues]);

  const addAssociates = () => {
    console.log(formValues);
    axios.post("http://localhost:3005/api/add", formValues).then((res) => {
      alert("Successfully Registered Associate Details");
      navigate("../associatelist", { replace: true });
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
                    <h3 className="card-title">
                      Register here <small>(Associates )</small>
                    </h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form id="quickForm">
                    <div className="card-body">
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

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Username"
                          onChange={handleChange}
                          value={formValues.username}
                        />
                      </div>
                      <span className="error">{formErrorValues.username}</span>
                      <br></br>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Password"
                          onChange={handleChange}
                          value={formValues.password}
                        />
                      </div>
                      <span className="error">{formErrorValues.password}</span>
                      <br></br>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          value={formValues.email}
                        />
                      </div>
                      <span className="error">{formErrorValues.email}</span>
                      <br></br>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Course</label>
                        <input
                          type="text"
                          name="course"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Course details"
                          onChange={handleChange}
                          value={formValues.course}
                        />
                      </div>
                      <span className="error">{formErrorValues.course}</span>
                      <br></br>

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

export default Regassociate;
