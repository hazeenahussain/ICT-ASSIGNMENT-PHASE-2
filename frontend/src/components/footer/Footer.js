import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-info">
            <img src="./logo.png" alt="TheEvenet" />
          </div>
          <div
            className="col-lg-3 col-md-6 footer-links"
            style={{ color: "black" }}
          >
            <h4 style={{ color: "black" }}>ICT ACADEMY HQ</h4>
            <p style={{ color: "black" }}>
              G1,Ground Floor, Thejaswini Building,
              <br />
              Technopark,Thiruvananthapuram,
              <br />
              Kerala, India.
              <br />
              <strong>Mobile:</strong> 7594051437
              <br />
              <strong>Phone:</strong> 0471 270 0811
              <br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4 style={{ color: "black" }}>ICT ACADEMY-CENTRAL REGION</h4>
            <p style={{ color: "black" }}>
              Ground Floor,Rajamally Building,
              <br />
              Infopark, Koratty,
              <br />
              Thrissur, Kerala, India.
              <br />
              <strong>Phone:</strong> 7594051437 /+91-481-2731050
              <br />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-contact">
            <h4 style={{ color: "black" }}>ICT ACADEMY-NORTH REGION</h4>
            <p style={{ color: "black" }}>
              2nd Floor, Ul Cyberpark Building, <br />
              Nellikode PO, Kozhikode,
              <br />
              Kerala, India.
              <br />
              <strong>Phone:</strong> 7594051437 /+91-495-2431432
              <br />
            </p>
          </div>
        </div>

        <div class="text-center text-white p-3">
          <div className="copyright" style={{ color: "black" }}>
            Copyright © <strong>ICTAK Academy Team Five </strong>. All Rights
            Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
