export default function launch(userName) {
  const socket = io("http://localhost:3001")

  const usersList = document.createElement("div")
  document.body.appendChild(usersList)

  socket.emit("new_user", { username: userName })
  console.log("Emitting new_user:", { username: userName })  // Test côté client

  socket.on("updateUsers", (users) => {
    usersList.innerHTML = "" // Réinitialise la liste
    users.forEach((user) => {
      const divUser = document.createElement("div")
      divUser.className = "user"

      const newUser = document.createElement("div")
      newUser.className = "id"
      newUser.textContent = `${user}`

      const userState = document.createElement("div")
      userState.className = "state active"
      userState.textContent = "Connecté(e)"

      divUser.appendChild(newUser)
      divUser.appendChild(userState)

      usersList.appendChild(divUser)
    })
  })
}