import { batch } from "solid-js";
import {
    currentChosen,
    nextQuestionIndex,
    pendingQuestionIndex,
    setPendingQuestionIndex
} from "./store";

export function choose(choice) {
  batch(() => {
    currentChosen()[pendingQuestionIndex()] = choice;
    if (pendingQuestionIndex() === nextQuestionIndex())
      currentChosen().push("");
    setPendingQuestionIndex(nextQuestionIndex());
  });
}
