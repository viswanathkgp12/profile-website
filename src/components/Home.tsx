import React from "react";
import { About } from "./About";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="content" style={{ height: "100vh" }}>
          <main>
            <div>
              <h1>Viswanath Kapavarapu</h1>
              <p>Blockchain Developer</p>
              <div>
                &nbsp;
                <a
                  href="mailto:viswanath.iit@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="viswanath.iit@gmail.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/viswanath-kapavarapu-5852a3143"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x={2} y={9} width={4} height={12} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://github.com/viswanathkgp12"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://hub.docker.com/u/vishy12"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Docker"
                >Docker</a>
                &nbsp;&nbsp;
              </div>
            </div>
          </main>
        </div>

        <About />
      </div>
    );
  }
}
