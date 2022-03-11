import "./associatepage.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Associatepage = (props) => {
  const { id } = useParams();
  console.log("Associate Id", id);
  let [singleAssociate, setSingleAssociate] = useState([]);
  useEffect(() => {
    associateData();
  }, []);

  function associateData() {
    axios.get("http://localhost:3005/api/view").then((response) => {
      console.log(response.data);
      setSingleAssociate(
        (singleAssociate = response.data.find((i) => i._id === id))
      );
      console.log(singleAssociate);
    });
  }

  return (
    <div className="associatepage">
      <h1>"{singleAssociate.ictkid}"</h1>
      <h3>{singleAssociate.username}</h3>
      <p> {singleAssociate.name}</p>
    </div>
  );
};

export default Associatepage;
