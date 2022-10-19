const startButton = document.getElementById("startButton");
const scoreArea = document.getElementById("scoreArea");
const hide = document.querySelector(".hide");
const form = document.querySelector(".form-container");
const newName = document.querySelector(".newName");
const questionDiv = document.querySelector(".question");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

let question1 = [];

startButton.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  function resultPerPage() {
    let counter = 0;
    return fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        let resultsPage = data.results;
        console.log(resultsPage);
        let incorrect_answer1 = resultsPage[counter].incorrect_answers[0];
        let incorrect_answer2 = resultsPage[counter].incorrect_answers[1];
        let incorrect_answer3 = resultsPage[counter].incorrect_answers[2];
        let answer = resultsPage[counter].correct_answer;

        let question1 = resultsPage[counter].question;

        questionDiv.innerHTML = question1;
        answer1.innerHTML = incorrect_answer1;
        answer2.innerHTML = incorrect_answer2;
        answer3.innerHTML = incorrect_answer3;
        answer4.innerHTML = answer;
      });
  }
  form.style.display = "none";
  newName.innerHTML =
    document.querySelector(".name").value + " you got " + " 0 " + "points";
  console.log(question1);

  hide.style.display = "block";
  resultPerPage();
});
