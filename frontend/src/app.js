import launch from "./launch";

const button = document.createElement("button")
button.innerText = "Se connecter"
const body = document.getElementById("root")
const form = document.createElement("form")
const nameField = document.createElement("input")

nameField.type = "text"

form.appendChild(nameField)
form.appendChild(button)
body.appendChild(form) // Envoyer la valeur de nameField au backend

button.addEventListener('click', () => {
  form.remove()
  launch(nameField.value)
})
