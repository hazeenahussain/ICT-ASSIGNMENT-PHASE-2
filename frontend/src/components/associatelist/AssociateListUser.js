import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./associatelist.css";

const AssociateListUser = () => {
  let navigate = useNavigate();
  let [Data, SetData] = useState([]);
  useEffect(() => {
    associateData();
  }, []);

  function associateData() {
    axios.get("http://localhost:3005/api/view").then((response) => {
      console.log(response.data);
      SetData((Data = response.data));
    });
  }

  return (
    <>
      {Data.map((associate, key) => (
        <div className="associatelist h2">
          <Link className="l" key={key} to={`/associatelist/${associate._id}`}>
            <h2>ICTAK Id : "{associate.ictkid}"</h2>
            <h3>UserName : {associate.username}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};
export default AssociateListUser;
