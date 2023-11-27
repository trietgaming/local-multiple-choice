import Choices from "./Choices";
import Chosen from "./Chosen";
import QuestionIndicator from "./QuestionIndicator";
import SaveButton from "./SaveButton";
import Summary from "./Summary";
import TitleInput from "./TitleInput";

export default function App() {
  return (
    <div class="vertical">
      <SaveButton />
      <div class="flex">
        <div class="vertical" style="margin-right: 5em">
          <TitleInput />
          <QuestionIndicator />
          <Choices />
        </div>
        <Chosen />
      </div>
      <Summary />
    </div>
  );
}
