const socket = io("http://localhost:3001");

const usersList = document.createElement("div");
document.body.appendChild(usersList);

socket.on("updateUsers", (users) => {
  usersList.innerHTML = ""; // Réinitialise la liste
  users.forEach((number) => {
    const newUser = document.createElement("div");
    newUser.className = "user"
    newUser.textContent = `Utilisateur #${number}`;
    usersList.appendChild(newUser);
  });
});
