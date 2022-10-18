const startButton = document.getElementById("startButton");
const scoreArea = document.getElementById("scoreArea");
const hide = document.querySelector(".hide");
const form = document.querySelector(".form-container")
const newName = document.querySelector(".newName")
    

startButton.addEventListener('click', function handleClick(event) {
    event.preventDefault()
    form.style.display = "none"
    newName.innerHTML = document.querySelector(".name").value + " you got " + "points"

  hide.style.display = 'block'
});


