import { AVAILABLE_TABS } from "./constants";
import {
  nextQuestionIndex,
  setCurrentTab,
  setPendingQuestionIndex,
  currentTab,
} from "./store";

export default function ChosenTab() {
  return (
    <div class="tabs" id="answer-type">
      {AVAILABLE_TABS.map((tab) => (
        <button
          class={"tab" + (tab === currentTab() ? " active" : "")}
          id={tab}
          onClick={() => {
            setCurrentTab(tab);
            setPendingQuestionIndex(nextQuestionIndex());
          }}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
