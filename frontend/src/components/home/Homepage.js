import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="page">
      <h1>
        {" "}
        ICTAK <p style={{ color: "red" }}>HALL BOOKING </p>PORTAL
      </h1>

      <Carousel>
        <div>
          <img className="pic" src="./hero-bg.jpg" />
        </div>
        <div>
          <img className="pic" src="./ict2.jpg" />
        </div>
        <div>
          <img className="pic" src="./6.jpg" />
        </div>
      </Carousel>

      <p style={{ marginLeft: "10%", marginRight: "10%", lineHeight: "2" }}>
        ICT Academy of Kerala is a Social Enterprise created in a Public Private
        Partnership model (PPP) for imparting ICT skills to the youths of Kerala
        and improve their employability opportunities in the Industry. The
        Company is supported by Govt. of India , partnered by Govt. of Kerala
        and the IT industry.This blog is an Online Hall Booking Portal for ICTAK
        where Associates can book a conference room prior to their meeting on a
        particular day and time.
      </p>
      <h2 style={{ color: "red", fontSize: 25 }}>Our Key Focus Areas</h2>
      <div style={{ marginLeft: "30%" }}>
        <li>Industry focused enablement programmes for Faculty members.</li>
        <li>
          Industry focused ICT Skills development programmes for Students.
        </li>
        <li>
          Project assignments related to capability building for Institutions
          and Corporate.
        </li>
        <li>
          Creating Intellectual Property on niche skill areas and emerging
          technologies.{" "}
        </li>
      </div>
    </div>
  );
};

export default Homepage;
