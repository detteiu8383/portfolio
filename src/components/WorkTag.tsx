import { Component } from "solid-js";
import { css } from "solid-styled-components";

const WorkTagClass = css({
  display: "inline",
  border: "solid 1px #eee",
  borderRadius: "999px",
  fontSize: "0.8rem",
  padding: "4px 8px",
});

const WorkTag: Component<{ displayName: string }> = (props) => {
  return <div class={WorkTagClass}>{props.displayName}</div>;
};

export default WorkTag;
