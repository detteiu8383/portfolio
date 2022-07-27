import { Component } from "solid-js";

const WorkTag: Component<{ displayName: string }> = (props) => {
  return <div>{props.displayName}</div>;
};

export default WorkTag;
