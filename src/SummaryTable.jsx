import { For, createEffect } from "solid-js";
import { createMutable } from "solid-js/store";
import { chosen, maxQuestion } from "./store";

export default function SummaryTable(props) {
  const emptyArray = createMutable(Array(maxQuestion()).fill(void 0));

  createEffect((prev) => {
    let diff = maxQuestion() - prev;
    while (diff--) {
      emptyArray.push(void 0);
    }
    return maxQuestion();
  }, maxQuestion());

  return (
    <table hidden={props.hidden} id="comparison-table">
      <tbody>
        <tr>
          <th>Question</th>
          <th>Choice</th>
          <th>Answer</th>
        </tr>
        <For each={emptyArray}>
          {(_, index) => {
            const sheet = () => chosen.sheet[index()];
            const answer = () => chosen.answer[index()];
            return (
              <tr class={sheet() === answer() ? "correct" : "incorrect"}>
                <th>{index() + 1}</th>
                <th>{sheet()}</th>
                <th>{answer()}</th>
              </tr>
            );
          }}
        </For>
      </tbody>
    </table>
  );
}
