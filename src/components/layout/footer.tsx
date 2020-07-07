import React from "react";

const getFooterYear = () => new Date().getFullYear();

const rainbowCSS = `background-color: #222;
  font-family: monospace;
  font-weight: bold;
  font-size: 36px;
  color: white;
  text-shadow: 3px 3px 0 rgb(217, 31, 38), 5px 5px 0 rgb(226, 91, 14), 7px 7px 0 rgb(245, 221, 8), 9px 9px 0 rgb(5, 148, 68), 11px 11px 0 rgb(2, 135, 206), 13px 13px 0 rgb(4, 77, 145), 15px 15px 0 rgb(42, 21, 113)
  `;

const logToConsole = () => console.log("%c Hire Me!!!", rainbowCSS);

class Footer extends React.PureComponent {
  componentDidMount() {
    logToConsole();
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__content">
            <span>&copy; &nbsp; {getFooterYear()}</span>
            <span>
              <a href="/">viswanathkgp12.herokuapp.com</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
