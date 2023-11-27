import { choose } from "./choose";
import { AVAILABLE_CHOICES } from "./constants";

export default function Choices() {
  return (
    <>
      {AVAILABLE_CHOICES.map((choice) => (
        <button
          onClick={() => {
            choose(choice);
          }}
          class="choice"
          id={choice}
        >
          {choice}
        </button>
      ))}
    </>
  );
}
