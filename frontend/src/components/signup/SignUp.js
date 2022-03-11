import React, { useState, useEffect } from "react";
import validation from "./validation";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  let navigate = useNavigate();
  // Storing Form Field Values
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
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
      addUsers();
    }
  }, [formErrorValues]);

  const addUsers = () => {
    console.log(formValues);
    axios.post("http://localhost:3005/api/signup", formValues).then((res) => {
      alert(
        "Successfully Created Account!!!Now you can login using registered username and password."
      );
      navigate("../signin", { replace: true });
      console.log("in axios post" + res.data);
    });
  };
  return (
    <>
      <form className="signin" onSubmit={handleSubmit}>
        <h3>Sign Up Here</h3>

        <label>Username</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Username"
          id="username"
          name="username" required
          value={formValues.username}
        />
        <span className="error">{formErrorValues.username}</span>
        <label>Email</label>
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email"
          id="email"
          name="email" required
          value={formValues.email}
        />
        <span className="error">{formErrorValues.email}</span>
        <label for="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          id="password"
          name="password" required
          value={formValues.password}
        />
        <span className="error">{formErrorValues.password}</span>
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
