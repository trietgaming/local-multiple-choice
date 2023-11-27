import { For } from "solid-js";
import {
  currentChosen,
  pendingQuestionIndex,
  setPendingQuestionIndex,
} from "./store";
import ChosenTab from "./ChosenTab";

export default function Chosen() {
  return (
    <div class="vertical">
      <ChosenTab />
      <div style="overflow: auto; max-height: 650px">
        <table id="choice-table">
          <tbody>
            <tr>
              <th>Question</th>
              <th>Key</th>
            </tr>
            <For each={currentChosen()}>
              {(choice, index) => {
                return (
                  <>
                    <tr
                      onClick={() => setPendingQuestionIndex(index())}
                      class={
                        "chosen-row" +
                        (index() === pendingQuestionIndex() ? " pending" : "")
                      }
                    >
                      <td>{index() + 1}</td>
                      <td>{choice}</td>
                    </tr>
                  </>
                );
              }}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}
