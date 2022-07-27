import { Component, For } from "solid-js";
import { css } from "solid-styled-components";
import WorkCard, { WorkInfo } from "~/components/WorkCard";

const WorkCardsClass = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  "> div": {
    margin: "8px",
  },
});

const Works: Component = () => {
  const works: WorkInfo[] = [
    {
      title: "新歓ビライラスト",
      description:
        "所属しているサークル 「デジタル創作同好会traP」 の新歓ビラのイラストを製作しました。",
      tags: ["Blender", "イラスト"],
    },
    {
      title: "毎日ポケモン言えるかな",
      description: "毎日ランダムなお題が出題されるしりとりゲームです。",
      url: "https://poke-shiritori.trap.games",
      tags: ["ゲーム", "SolidJS"],
    },
    {
      title: "毎日ポケモン言えるかな",
      description: "毎日ランダムなお題が出題されるしりとりゲームです。",
      url: "https://poke-shiritori.trap.games",
      tags: ["ゲーム", "SolidJS"],
    },
    {
      title: "毎日ポケモン言えるかな",
      description: "毎日ランダムなお題が出題されるしりとりゲームです。",
      url: "https://poke-shiritori.trap.games",
      tags: ["ゲーム", "SolidJS"],
    },
    {
      title: "毎日ポケモン言えるかな",
      description: "毎日ランダムなお題が出題されるしりとりゲームです。",
      url: "https://poke-shiritori.trap.games",
      tags: ["ゲーム", "SolidJS"],
    },
    {
      title: "毎日ポケモン言えるかな",
      description: "毎日ランダムなお題が出題されるしりとりゲームです。",
      url: "https://poke-shiritori.trap.games",
      tags: ["ゲーム", "SolidJS"],
    },
    {
      title: "毎日ポケモン言えるかな",
      description: "毎日ランダムなお題が出題されるしりとりゲームです。",
      url: "https://poke-shiritori.trap.games",
      tags: ["ゲーム", "SolidJS"],
    },
    {
      title: "毎日ポケモン言えるかな",
      description: "毎日ランダムなお題が出題されるしりとりゲームです。",
      url: "https://poke-shiritori.trap.games",
      tags: ["ゲーム", "SolidJS"],
    },
  ];
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
