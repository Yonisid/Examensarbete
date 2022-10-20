function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function init() {
  const form = document.querySelector(".myForm");
  const startButton = document.getElementById("startButton");
  const scoreArea = document.getElementById("scoreArea");
  const hide = document.querySelector(".hide");
  const formContainer = document.querySelector(".form-container");
  const newName = document.querySelector(".newName");
  const questionDiv = document.querySelector(".question");
  const answer1 = document.querySelector(".answer1");
  const answerDiv = document.querySelector(".answers");
  const input = document.querySelector(".name");
  const categories = document.querySelector("#kategori").value;

  let counter = 0;
  let question1 = [];

  answer1.addEventListener("click", () => {
    counter++;
    console.log(counter);
  });

  function chosenCategories() {
    let chosenCategory = "";
    if(categories === 'Sports'){
      chosenCategory = 21;
      
    }
    return chosenCategory

  }
  async function resultPerPage() {
    let test = await chosenCategories()

    console.log(test)
    console.log("results");
    return fetch("https://opentdb.com/api.php?amount=10&category=" + test)
      .then((res) => res.json())
      .then((data) => {
        let resultsPage = data.results;
        console.log(resultsPage);
        const incorrectList = shuffleArray(
          resultsPage[counter].incorrect_answers
        );

        for (let i = 0; i < incorrectList.length; i++) {
          let incorrect_answer = document.createElement("div");
          incorrect_answer.classList.add("answer1");
          incorrect_answer.innerHTML = incorrectList[i];
          answerDiv.appendChild(incorrect_answer);
        }


        answer1.innerHTML = resultsPage[counter].correct_answer;

        let question1 = resultsPage[counter].question;

        questionDiv.innerHTML = question1;
        
        answer1.innerHTML = incorrect_answer1;
        answer2.innerHTML = incorrect_answer2;
        answer3.innerHTML = incorrect_answer3;
        answer4.innerHTML = answer;

      });
  }


  function handleClick(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    formContainer.style.display = "none";

    newName.innerHTML = data.name + " you got " + " 0 " + "points";

    console.log(question1);

    hide.style.display = "block";

    resultPerPage();
  }

  form.addEventListener("submit", handleClick);
}

window.addEventListener("DOMContentLoaded", init);