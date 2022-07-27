import { Component, For } from "solid-js";
import { css } from "solid-styled-components";
import { works } from "~/assets/works/works";
import WorkCard from "~/components/WorkCard";

const WorkCardsClass = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  "> *": {
    margin: "8px",
  },
});

const Works: Component = () => {
  return (
    <>
      <h2>Works</h2>
      <div class={WorkCardsClass}>
        <For each={works}>{(work) => <WorkCard work={work} />}</For>
      </div>
    </>
  );
};

export default Works;
