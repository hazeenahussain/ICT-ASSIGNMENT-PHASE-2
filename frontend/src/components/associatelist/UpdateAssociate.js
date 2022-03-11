import "./updateassociate.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateAssociate = (props) => {
  let navigate = useNavigate();

  const { id } = useParams();
  console.log("Associate Id", id);
  let [singleAssociate, setSingleAssociate] = useState({
    username: "",
    course: "",
    name: "",
  });

  useEffect(() => {
    associateData();
  }, []);

  function associateData() {
    axios.get("http://localhost:3005/api/view").then((response) => {
      //console.log(response.data);
      setSingleAssociate(
        (singleAssociate = response.data.find((i) => i._id === id))
      );
      console.log(singleAssociate.name);
    });
  }
  function contentChange(e) {
    const { name, value } = e.target; //destructuring
    setSingleAssociate({ ...singleAssociate, [name]: value });
  }

  function updateAssociate() {
    axios
      .post("http://localhost:3005/api/update", singleAssociate)
      .then((res) => {
        alert("Successfully Updated Associate Details");

        navigate("../associatelist", { replace: true });
      });
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Update </h1>
      </div>
      <div className="row">
        <h4>
          <center>Update Associate Details Here !!!!!</center>
        </h4>
      </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input
              type="text"
              required
              name="username"
              value={singleAssociate.username}
            />
            <label>Username</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input
              type="text"
              required
              name="course"
              value={singleAssociate.course}
            />
            <label>ICTAK Id</label>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea
              required
              name="name"
              value={singleAssociate.name}
              onChange={contentChange}
            ></textarea>
            <label>Associate Name</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn" onClick={updateAssociate}>
            Update{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssociate;
