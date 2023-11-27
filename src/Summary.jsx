import { createMemo, createSignal } from "solid-js";
import SummaryTable from "./SummaryTable";
import { chosen, maxQuestion, totalQuestion } from "./store";

export default function Summary() {
  const [isTableHidden, setTableHidden] = createSignal(true);

  const totalCorrect = createMemo(() => {
    let result = 0;
    for (let i = 0; i < totalQuestion(); ++i) {
      if (i >= chosen.answer.length || i >= chosen.sheet.length) break;
      result += chosen.answer[i] === chosen.sheet[i];
    }
    return result;
  });
  const grade = createMemo(() =>
    ((10 / totalQuestion()) * totalCorrect()).toFixed(2)
  );

  return (
    <>
      <button
        onClick={() => setTableHidden((prev) => !prev)}
        style="padding: 1em; margin: 1em 0em"
        id="toggle-comparison"
      >
        View Comparison
      </button>
      <h3 id="summary" hidden={isTableHidden()}>
        Total correct:
        <span id="correct-num">{totalCorrect()}</span>
        {"/"}
        <span id="total-num">{maxQuestion()}</span>- Grade:{" "}
        <span id="grade">{grade()}</span>
      </h3>
      <SummaryTable hidden={isTableHidden()} />
    </>
  );
}
