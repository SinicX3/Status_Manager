export default function launch(userName) {
  const socket = io("http://localhost:3001")

  const usersList = document.createElement("div")
  document.body.appendChild(usersList)

  socket.on("updateUsers", (users) => {
    usersList.innerHTML = "" // Réinitialise la liste
    users.forEach((number) => {
      const divUser = document.createElement("div")
      divUser.className = "user"

      const newUser = document.createElement("div")
      newUser.className = "id"
      newUser.textContent = `${userName}`

      const userState = document.createElement("div")
      userState.className = "state"
      userState.textContent = "Connecté"

      divUser.appendChild(newUser)
      divUser.appendChild(userState)

      usersList.appendChild(divUser)
    })
  })
}