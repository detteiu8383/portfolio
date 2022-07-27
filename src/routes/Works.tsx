import { Component, For } from "solid-js";
import WorkCard, { WorkInfo } from "~/components/WorkCard";

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
  ];
  return (
    <>
      <h2>Works</h2>
      <For each={works}>{(work) => <WorkCard work={work} />}</For>
    </>
  );
};

export default Works;
