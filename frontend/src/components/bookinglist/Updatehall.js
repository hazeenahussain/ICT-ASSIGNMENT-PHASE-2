import "./updatehall.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateHall = (props) => {
  let navigate = useNavigate();

  const { id } = useParams();
  console.log("Hall Id", id);
  let [singleHall, setSingleHall] = useState({
    username: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    hallData();
  }, []);

  function hallData() {
    axios.get("http://localhost:3005/api/view").then((response) => {
      //console.log(response.data);
      setSingleHall((singleHall = response.data.find((i) => i._id === id)));
      console.log(singleHall.content);
    });
  }
  function contentChange(e) {
    const { name, value } = e.target; //destructuring
    setSingleHall({ ...singleHall, [name]: value });
  }

  function updateHall() {
    axios.post("http://localhost:3005/api/update", singleHall).then((res) => {
      alert("Successfully Updated Hall Details");

      navigate("../bookinglist", { replace: true });
    });
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Update </h1>
      </div>
      <div className="row">
        <h4>
          <center>Update Hall Details Here  !!!!!</center>
        </h4>
      </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input
              type="text"
              required
              name="username"
              value={singleHall.username}
              disabled
            />
            <label>Username</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input
              type="text"
              required
              name="title"
              value={singleHall.title}
              disabled
            />
            <label>ICTAK Id</label>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea
              required
              name="content"
              value={singleHall.content}
              onChange={contentChange}
            ></textarea>
            <label>Course</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn" onClick={updateHall}>
            Update{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateHall;
