import React from "react";

class Header extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  private getTheme =
    window.localStorage && window.localStorage.getItem("theme");
  private isDark = this.getTheme === "dark";

  toggleTheme = () => {
    console.log("Toggling ...");
    const metaThemeColor: any = document.querySelector(
      "meta[name=theme-color]"
    );

    const app = document.getElementById("App");
    if (this.getTheme !== null) {
      app?.classList.toggle("dark-theme", this.isDark);
      this.isDark
        ? metaThemeColor.setAttribute("content", "#252627")
        : metaThemeColor.setAttribute("content", "#fafafa");
    }
    app?.classList.toggle("dark-theme");
    window.localStorage &&
      window.localStorage.setItem(
        "theme",
        app?.classList.contains("dark-theme") ? "dark" : "light"
      );
    app?.classList.contains("dark-theme")
      ? metaThemeColor.setAttribute("content", "#252627")
      : metaThemeColor.setAttribute("content", "#fafafa");
    return;
  };

  render() {
    return (
      <header className="header">
        <span className="header__inner">
          <a href="." style={{ textDecoration: "none" }}>
            <div className="logo">
              <span className="logo__mark">&gt;</span>
              <span className="logo__text">/home</span>
              <span className="logo__cursor"></span>
            </div>
          </a>
          <span className="header__right">
            <nav className="menu">
              <ul className="menu__inner">
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="./posts">Posts</a>
                </li>
              </ul>
            </nav>
            <span className="menu-trigger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </span>
            <span
              className="theme-toggle unselectable"
              onClick={this.toggleTheme}
            >
              <svg
                className="theme-toggler"
                width={24}
                height={24}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" />
              </svg>
            </span>
          </span>
        </span>
      </header>
    );
  }
}

export default Header;
