import { pendingQuestion } from "./store";

export default function QuestionIndicator() {
  return (
    <h1>
      Question{" "}
      <span id="question" style="color: red">
        {pendingQuestion()}
      </span>
    </h1>
  );
}
