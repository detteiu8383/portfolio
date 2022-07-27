import { Component, For, Show } from "solid-js";
import { css } from "solid-styled-components";
import WorkTag from "./WorkTag";

export type WorkInfo = {
  title: string;
  description?: string;
  tags?: string[];
  url?: string;
  imagePath?: string;
};

const WorkCardClass = css({
  border: "solid 1px #666",
  borderRadius: "8px",
  width: "16rem",
  height: "24rem",
  padding: "16px",
});

const WorkTagsClass = css({
  display: "flex",
  padding: 0,
  "> li": {
    marginRight: "4px",
    listStyleType: "none",
  },
});

const WorkCard: Component<{ work: WorkInfo }> = (props) => {
  return (
    <div class={WorkCardClass}>
      <Show when={props.work.imagePath}>
        <img src={props.work.imagePath} alt={props.work.title} />
      </Show>
      <h3>{props.work.title}</h3>
      <Show when={props.work.description}>
        <p>{props.work.description}</p>
      </Show>
      <ul class={WorkTagsClass}>
        <For each={props.work.tags}>
          {(tag) => (
            <li>
              <WorkTag displayName={tag} />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default WorkCard;
