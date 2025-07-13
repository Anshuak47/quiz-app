document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");

  const choicesList = document.getElementById("choices-list");

  const nextButton = document.getElementById("next-btn");

  const resultContainer = document.getElementById("result-container");

  const scoreInput = document.getElementById("score");

  const restartButton = document.getElementById("restart-btn");

  const startButton = document.getElementById("start-btn");

  let currentQuestion = 1;
  let score = 0;
  const questions = [
    {
      id: 1,
      qtext: "What is my name",
      options: [
        { id: 1, option: "Anshu" },
        { id: 2, option: "else" },
      ],
      ans: "1",
    },
    {
      id: 2,
      qtext: "What is my fav sport",
      options: [
        { id: 1, option: "Football" },
        { id: 2, option: "else" },
      ],
      ans: "1",
    },
  ];

  startButton.addEventListener("click", function (e) {
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");

    showQuestions();
  });

  function showQuestions() {
    // nextButton.classList.remove("hidden");

    questions.forEach((q) => {
      // Got the Question Text
      if (q.id == currentQuestion) {
        questionText.innerText = q.qtext;

        const options = q.options;
        //   Now get the options
        choicesList.innerHTML = "";
        options.forEach((o) => {
          const li = document.createElement("li");
          li.innerHTML = `<span data-qid="${q.id}" data-oid="${o.id}" > ${o.option}</span>`;

          choicesList.appendChild(li);
        //  Get the selected answer and evaluate
          li.addEventListener("click", (e) => selectAnswer(q, o));
          nextButton.classList.remove("hidden");
        });
      }
    });

    nextButton.addEventListener("click", function (e) {
        // If Current question count increases then all questions then stop
      if (currentQuestion <= questions.length) {
        // Display Next Question
        currentQuestion++;
        showQuestions();
      } else {
        showResult();
      }
    });
  }

  function selectAnswer(question, choice) {
    // Count score
    if (parseInt(question.ans) === choice.id) {
      score++;
    }
  }

  function showResult() {
    // Display Score
    nextButton.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreInput.textContent = `${score} out of ${questions.length}`;
  }

  restartButton.addEventListener("click", function () {

    // Reset the Quiz
    nextButton.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    scoreInput.textContent = "";

    currentQuestion = 0;

    score = 0;
  });
});
