const startButton = document.getElementById("startButton");
const scoreArea = document.getElementById("scoreArea");
const hide = document.querySelector(".hide");

const inputField = document.querySelector('.name')
    

startButton.addEventListener('click', function handleClick(event) {
    event.preventDefault()
    let name = document.querySelector('.name').value
    name.innerHTML = "";

  hide.style.display = 'block'
});


