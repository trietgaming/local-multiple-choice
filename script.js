const choices = document.getElementsByClassName("choice");
const question = document.getElementById("question");
const choiceTable = document.getElementById("choice-table");
const tabs = document.getElementById("answer-type").children;

const toggleComparison = document.getElementById("toggle-comparison");
const comparisonTable = document.getElementById("comparison-table");

const correct = document.getElementById("correct-num");
const total = document.getElementById("total-num");
const grade = document.getElementById("grade");
const summary = document.getElementById("summary");

const data = {
  sheet: [],
  answer: [],
};

let currentTab = "sheet";

let chosen = data[currentTab];
let currentQuestion = 1;

let totalCorrect = 0;
let totalQuestion = 0;

const td = (content) => {
  const cell = document.createElement("td");
  cell.textContent = content;
  return cell;
};

const tr = (...cells) => {
  const row = document.createElement("tr");
  for (const cell of cells) {
    row.appendChild(cell);
  }
  return row;
};

for (const choice of choices) {
  const key = choice.id;
  choice.onclick = () => {
    chosen.push(key);

    totalQuestion = Math.max(totalQuestion, currentQuestion);

    choiceTable.appendChild(tr(td(currentQuestion), td(key)));
    if (currentQuestion >= comparisonTable.children.length) {
      comparisonTable.appendChild(
        tr(
          td(currentQuestion),
          td(data["sheet"][currentQuestion - 1] || ""),
          td(data["answer"][currentQuestion - 1] || "")
        )
      );
    } else {
      const index = currentTab === "sheet" ? 1 : 2;
      const row = comparisonTable.children[currentQuestion];
      row.children[index].textContent = key;
      if (row.children[1].textContent === row.children[2].textContent) {
        row.classList.add("correct");
        ++totalCorrect;
      } else {
        row.classList.add("incorrect");
      }
    }
    correct.textContent = totalCorrect;
    total.textContent = totalQuestion;
    grade.textContent = ((10 / totalQuestion) * totalCorrect).toFixed(2);

    question.textContent = ++currentQuestion;
  };
}

let curActive = tabs[0];

for (const tab of tabs) {
  const key = tab.id;
  tab.onclick = () => {
    currentTab = key;
    chosen = data[currentTab];
    currentQuestion = chosen.length + 1;
    question.textContent = currentQuestion;
    choiceTable.replaceChildren(choiceTable.firstElementChild);
    for (let i = 0; i < chosen.length; ++i) {
      choiceTable.appendChild(tr(td(i + 1), td(chosen[i])));
    }
    curActive.classList.remove("active");
    tab.classList.add("active");
    curActive = tab;
  };
}

toggleComparison.onclick = () => {
  summary.hidden = !summary.hidden;
  comparisonTable.hidden = !comparisonTable.hidden;
};
