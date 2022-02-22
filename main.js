let button = document.getElementById("theme");

function switchTheme(e) {
    e.target.parentNode.classList.toggle("dark");
}

button.addEventListener("click", switchTheme);