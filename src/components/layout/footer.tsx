import React from "react";
import { coloredConsoleLog } from "../../utils/logging";

const getFooterYear = () => new Date().getFullYear();

const logToConsole = () => coloredConsoleLog("Hire Me!!!");

class Footer extends React.PureComponent {
  componentDidMount() {
    logToConsole();
  }

  render() {
    return (
      <footer className="footer" role="contentinfo">
        <div className="footer__inner">
          <div className="footer__content">
            <span>&copy; {getFooterYear()} Viswanath Kapavarapu</span>
            <span aria-hidden="true">•</span>
            <span>
              <a href="/" aria-label="Home page">viswanathkgp12.netlify.app</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
