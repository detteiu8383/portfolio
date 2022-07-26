import { Link } from "solid-app-router";
import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header>
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
