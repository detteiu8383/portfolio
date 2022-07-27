import { Component } from "solid-js";
import { css } from "solid-styled-components";

const FooterClass = css({
  padding: "1rem 0",
  display: "flex",
  justifyContent: "center",
  background: "#eee",
});

const Footer: Component = () => {
  return <footer class={FooterClass}>©︎ 2022 d_etteiu8383</footer>;
};

export default Footer;
