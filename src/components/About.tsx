import { Link } from "react-router-dom";
import React from "react";

const resume = require("../static/media/resume.pdf");

export class About extends React.Component {
  render() {
    return (
      <section id="about" className="about-section">
        <header>
          <h2>About Me</h2>
        </header>
        <article>
          <h3 className="sr-only">Professional Summary</h3>
          <p>
            Staff Backend & Web3 Engineer with 9+ years of experience architecting resilient financial infrastructure, institutional custody systems, and high-throughput microservices handling $40M+ in monthly volume. 
            <br/><br/>
            Technical leader with expertise in cloud-native systems (AWS EKS, Kafka, Kubernetes), smart contracts, and cryptographic wallet infrastructure. Proven track record managing backend teams and contributing to core protocol standards like TZIP-24. Strong academic background with an Integrated B.Tech + M.Tech from IIT Kharagpur.
          </p>
          <Link
            to={resume}
            target="_blank"
            rel="noreferrer noopener"
            className="resume-btn"
            aria-label="View Resume/CV (PDF)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View Resume
          </Link>
        </article>
      </section>
    );
  }
}
