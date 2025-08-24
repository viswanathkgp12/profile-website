import { Link } from "react-router-dom";
import React from "react";

const resume = require("../static/media/resume.pdf");

export class About extends React.Component {
  render() {
    return (
      <div
        id="about"
        className="content"
        style={{ width: "70%", margin: "0 0 15% 15%" }}
      >
        <h1>About Me</h1>
        <p>
          <span style={{ textAlign: "center" }}>
            Seasoned developer with 7+ years of experience in the software industry.
            Specializes in backend development leveraging technologies like NodeJS/Typescript, Python, Ruby On Rails.
            Strong academic background with a Bachelor of Technology from IIT Kharagpur.
          </span>
          <br />
          <br />
          <Link
            to={resume}
            target="_blank"
            rel="noreferrer noopener"
            role="button"
            aria-label="Resume/CV"
          >
            Resume
          </Link>
        </p>
      </div>
    );
  }
}
