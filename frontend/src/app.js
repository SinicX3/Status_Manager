import launch from "./Launch";

const button = document.createElement("button")
button.innerText = "Lancer"
button.id = "btn__launch"
const body = document.getElementById("root")
body.appendChild(button)

button.addEventListener('click', () => {
  button.remove()
  launch()
  }
)
