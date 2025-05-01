const socket = io("http://localhost:3001");

const usersList = document.createElement("ul");
document.body.appendChild(usersList);

socket.on("updateUsers", (users) => {
  usersList.innerHTML = ""; // Réinitialise la liste
  users.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = `Utilisateur #${number}`;
    usersList.appendChild(li);
  });
});
