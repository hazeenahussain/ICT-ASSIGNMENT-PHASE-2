// List of Associates---//

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./associatelist.css";

const AssociateList = () => {
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
  function updateAssociate(event) {
    var id = event.target.getAttribute("name");
    console.log("in update", id);
    var s = `../updateassociate/${id}`;
    console.log(s);
    navigate(s, { replace: true });
  }
  function deleteAssociate(event) {
    console.log(event.target.getAttribute("name"));
    axios
      .post("http://localhost:3005/api/delete", {
        ictkid: event.target.getAttribute("name"),
      })
      .then((res) => {
        alert("Successfully Deleted");

        navigate("../associatelist", { replace: true });
      });
  }

  return (
    <>
      <h3 className="card-title">List of Associates</h3>
      {Data.map((associate, key) => (
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
            {/* Default box */}
            <div className="card">
              <div className="card-header">
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                    title="Remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <Link
                  className="l"
                  key={key}
                  to={`/associatelist/${associate._id}`}
                >
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "15%" }}>ICTAK Id</th>
                        <th style={{ width: "15%" }}>Name</th>
                        <th style={{ width: "15%" }}>Email</th>
                        <th style={{ width: "15%" }}>Username</th>
                        <th style={{ width: "15%" }}>Password</th>
                        <th style={{ width: "15%" }}>Course</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{associate.ictkid}</td>
                        <td className="project_progress">{associate.name}</td>
                        <td>{associate.email}</td>
                        <td>{associate.username}</td>
                        <td>{associate.password}</td>
                        <td>{associate.course}</td>

                        <td className="project-actions text-right">
                          {/*CRUD operation update */}
                          <a
                            className="btn btn-info btn-sm"
                            href="#"
                            name={associate._id}
                            onClick={updateAssociate}
                          >
                            <i className="fas fa-pencil-alt"></i>
                            Edit
                          </a>
                          {/*CRUD operation delete */}
                          <a
                            className="btn btn-danger btn-sm"
                            href="#"
                            name={associate.ictkid}
                            onClick={deleteAssociate}
                          >
                            <i className="fas fa-trash"></i>
                            Delete
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Link>
              </div>
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
      ))}
    </>
  );
};
export default AssociateList;
