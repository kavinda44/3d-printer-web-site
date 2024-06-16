import React from "react";

import "./TeamItem.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function TeamItem({ memberName, memberImage, memberTitle, memberDesc }) {
  return (
    <div className="team-item">
      <h3 className="member-name">{memberName}</h3>
      <div className="member-info">
        <div className="member-img-container">
          <div
            className="member-img"
            style={{ backgroundImage: `url(${memberImage})` }}
          ></div>
        </div>
        <p className="member-title">{memberTitle}</p>
        <p className="member-desc">{memberDesc}</p>
        <ul className="social-media-icon-container">
          <li>
            {" "}
            <a href="#" className="twitter">
              <FaTwitter />
            </a>{" "}
          </li>

          <li>
            <a href="#" className="instagram">
              <FaInstagram />
            </a>
          </li>

          <li>
            <a href="#" className="linkedin">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamItem;
