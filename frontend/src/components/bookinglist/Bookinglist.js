
// View Hall Booking List...//
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./bookinglist.css";

const BookingList = () => {
  let navigate = useNavigate();
  let [Data, SetData] = useState([]);
  useEffect(() => {
    bookingData();
  }, []);

  function bookingData() {
    axios.get("http://localhost:3005/api/viewbooking").then((response) => {
      console.log(response.data);
      SetData((Data = response.data));
    });
  }
  function updateBooking(event) {
    var id = event.target.getAttribute("name");
    console.log("in update", id);
    var s = `../updatehall/${id}`;
    console.log(s);
    navigate(s, { replace: true });
  }
  function deleteBooking(event) {
    console.log(event.target.getAttribute("name"));
    axios
      .post("http://localhost:3005/api/deletebooking", {
        ictkid: event.target.getAttribute("name"),
      })
      .then((res) => {
        alert("Successfully Deleted");

        navigate("../bookinglist", { replace: true });
      });
  }

  return (
    <>
      <h3 className="card-title">Booking Schedule</h3>
      {Data.map((booking, key) => (
        <div className="content-wrapper">
          <section className="content">
            <div className="card">
              <div className="card-body p-0">
                <Link
                  className="l"
                  key={key}
                  to={`/bookinglist/${booking._id}`}
                >
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "15%" }}>ICTAK Id</th>
                        <th style={{ width: "15%" }}>Name</th>
                        <th style={{ width: "15%" }}>Hall</th>
                        <th style={{ width: "15%" }}>Date</th>
                        <th style={{ width: "15%" }}>Start Time</th>
                        <th style={{ width: "15%" }}>End Time</th>
                        <th style={{ width: "15%" }}>Events</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{booking.ictkid}</td>
                        <td className="project_progress">{booking.name}</td>
                        <td>{booking.hall}</td>
                        <td>{booking.date}</td>
                        <td>{booking.start}</td>
                        <td>{booking.end}</td>
                        <td>{booking.event}</td>

                        <td className="project-actions text-right">
                          {/* CRUD operation UPDATE */}
                          <a
                            className="btn btn-info btn-sm"
                            href="#"
                            name={booking._id}
                            onClick={updateBooking}
                          >
                            <i className="fas fa-pencil-alt"></i>
                            Edit
                          </a>
                          {/* CRUD operation DELETE */}
                          <a
                            className="btn btn-danger btn-sm"
                            href="#"
                            name={booking.ictkid}
                            onClick={deleteBooking}
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
export default BookingList;
