import { Link } from "solid-app-router";
import { Component } from "solid-js";
import { css } from "solid-styled-components";

const HeaderClass = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#eee",
  padding: "8px 16px",

  nav: {
    display: "flex",
    "> a:not(:last-child)": {
      marginRight: "1rem",
    },
  },
});

const Header: Component = () => {
  return (
    <header class={HeaderClass}>
      <h1>eyemono portfolio</h1>
      <nav>
        <Link href="/">About</Link>
        <Link href="/works">Works</Link>
        <a href="https://trap.jp/author/d_etteiu8383/">Blog</a>
      </nav>
    </header>
  );
};

export default Header;
