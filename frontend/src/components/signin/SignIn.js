import React, { useState, useEffect } from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignIn = (props) => {
  let navigate = useNavigate();
  let [login, SetLogin] = useState([]);
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  // Manage Field Change
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target; //destructuring
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  useEffect(() => {
    loginData();
  }, []);

  function loginData() {
    axios.get("http://localhost:3005/api/login").then((response) => {
      console.log("in logindata", response.data);
      SetLogin((login = response.data));
    });
  }
  function authenticate() {
    console.log("in authenticate");
    let flag1 = 0;
    let flag2 = 0;
    let admin = 0;
    login.map((x, key) =>
      x.username === formValues.username && x.password === formValues.password
        ? (flag1 = 1)
        : (flag2 = 0)
    );
    login.map((x, key) =>
      "Admin" === formValues.username && "12345" === formValues.password
        ? (admin = 1)
        : (flag2 = 0)
    );
    if (admin === 1) {
      navigate("../DashboardAdmin", { replace: true });
      props.setlogin(2);
    } else if (flag1 === 1) {
      navigate("../DashboardAssociate", { replace: true });
      props.setlogin(1);
    } else alert("Invalid Username or Password");
  }

  const clicked = (event) => {};
  return (
    <>
      <div className="text-center">
        <img
          src="./login.jpg"
          className="rounded"
          alt="..."
          style={{ padding: "5%", backgroundPosition: "fixed" }}
        />
      </div>

      <div className="login1">
        <form
          className="signin"
          style={{ backgroundColor: "black" }}
          onSubmit={clicked}
        >
          <h3>Login Here</h3>

          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            id="username"
            required
            onChange={handleChange}
            value={formValues.username}
          />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            required
            onChange={handleChange}
            value={formValues.password}
          />

          <button onClick={authenticate}>Log In</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
