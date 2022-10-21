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
  
  let counter = 0;
  let question1 = [];
  
  function chosenCategories() {
    const categories = document.querySelector("#category").value;
    let chosenCategory = "";
    if(categories === 'Sports'){
      chosenCategory = 21;
    }
    if(categories === 'Geography'){
      chosenCategory = 22;
    }
    if(categories === 'General Knowledge'){
      chosenCategory = 9;   
    }
    if(categories === 'History'){
      chosenCategory = 23;   
    }
    if(categories === 'Art'){
      chosenCategory = 25;  
    }
    return chosenCategory
  }

  let testArray = [];
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
          testArray.push(incorrectList[i]);
        }
        testArray.push(resultsPage[counter].correct_answer);
        shuffleArray(testArray)

        
        for (let j = 0; j < testArray.length; j++) {
          let incorrect_answer = document.createElement("div");
          incorrect_answer.classList.add("answer1");
          incorrect_answer.innerHTML = testArray[j];
          answerDiv.appendChild(incorrect_answer);
        }
        // let correcAnswer = document.createElement("div");
        // correcAnswer.classList.add("answer1");
        // answer1.innerHTML = resultsPage[counter].correct_answer;

        let question1 = resultsPage[counter].question;

        questionDiv.innerHTML = question1;
        console.log(testArray);
        
        answer1.addEventListener("click", () => {
          counter++;
          console.log(counter);
      
          const boxes = document.querySelectorAll(".answer1");
      
          boxes.forEach((box) => {
            box.remove();
          });
          resultPerPage();
        });
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
