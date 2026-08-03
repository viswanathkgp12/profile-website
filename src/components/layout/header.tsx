import React from "react";

interface HeaderState {
  isDark: boolean;
}

class Header extends React.Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDark: (window.localStorage && window.localStorage.getItem("theme")) === "dark",
    };
  }

  componentDidMount() {
    this.applyTheme(this.state.isDark);
  }

  applyTheme = (isDark: boolean) => {
    const metaThemeColor: any = document.querySelector("meta[name=theme-color]");
    const body = document.body;

    if (body) {
      if (isDark) {
        body.classList.add("dark-theme");
        metaThemeColor?.setAttribute("content", "#0f172a");
      } else {
        body.classList.remove("dark-theme");
        metaThemeColor?.setAttribute("content", "#f8fafc");
      }
    }
    window.localStorage && window.localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      const newIsDark = !prevState.isDark;
      this.applyTheme(newIsDark);
      return { isDark: newIsDark };
    });
  };

  render() {
    return (
      <header className="header" role="banner">
        <div className="header__inner">
          <a href="/" style={{ textDecoration: "none" }} aria-label="Home">
            <div className="logo">
              <span className="logo__mark">{'>'}</span>
              <span className="logo__text">/home</span>
              <span className="logo__cursor" aria-hidden="true"></span>
            </div>
          </a>
          <div className="header__right">
            <nav className="menu" aria-label="Main Navigation">
              <ul className="menu__inner">
                <li>
                  <a href="/#about">About</a>
                </li>
              </ul>
            </nav>
            <button
              className="theme-toggle unselectable"
              onClick={this.toggleTheme}
              aria-label={this.state.isDark ? "Switch to light theme" : "Switch to dark theme"}
              title="Toggle Theme"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <svg
                className="theme-toggler"
                width={24}
                height={24}
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
