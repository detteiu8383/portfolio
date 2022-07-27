import { Component, For, Show } from "solid-js";
import WorkTag from "./WorkTag";

export type WorkInfo = {
  title: string;
  description?: string;
  tags?: string[];
  url?: string;
  imagePath?: string;
};

const WorkCard: Component<{ work: WorkInfo }> = (props) => {
  return (
    <div>
      <Show when={props.work.imagePath}>
        <img src={props.work.imagePath} alt={props.work.title} />
      </Show>
      <h3>{props.work.title}</h3>
      <Show when={props.work.description}>
        <p>{props.work.description}</p>
      </Show>
      <For each={props.work.tags}>{(tag) => <WorkTag displayName={tag} />}</For>
    </div>
  );
};

export default WorkCard;
