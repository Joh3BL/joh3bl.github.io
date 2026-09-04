const questions = [
  { questionText: "ett", answer: "ein", fromLang: "Sv", toLang: "De" },
];

function Question(index) {
  let answer = "";
  const questionRef = questions[index];
  const toFromLanguageText = `${questionRef.get(
    "fromLang"
  )} -> ${questionRef.get("toLang")}`;

  function handleAnswer(formData) {
    answer = formData.get("answer");
  }

  return (
    <div class="formBlob">
      <h2 class="formQuestion">{questionRef.get("questionText")}</h2>
      <p class="languages">{toFromLanguageText}</p>
      <br />
      <form>
        <input name="answer"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function QuestionBlobs() {
  return questions.map();
}

export default function App() {
  return <p>Test</p>;
}
