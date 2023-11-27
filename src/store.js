import { createSignal } from "solid-js";
import { createMutable } from "solid-js/store";
import { SHEET } from "./constants";

export const chosen = createMutable({
  sheet: [""],
  answer: [""],
});

export const [currentTab, setCurrentTab] = createSignal(SHEET);

/**
 * @type {import("solid-js").Accessor<string[]>}
 */
export const currentChosen = () => chosen[currentTab()];

/**
 * @type {import("solid-js").Accessor<number>}
 */
export const [pendingQuestionIndex, setPendingQuestionIndex] = createSignal(0);
export const pendingQuestion = () => pendingQuestionIndex() + 1;
export const nextQuestionIndex = () => currentChosen().length - 1;
// minus the last placeholder question
export const totalQuestion = () => currentChosen().length - 1;
export const maxQuestion = () =>
  Math.max(chosen.sheet.length, chosen.answer.length) - 1;
