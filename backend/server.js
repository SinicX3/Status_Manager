const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let users = []; // { socket.id: userNumber }

io.on("connection", (socket) => {

  socket.on("new_user", (data) => {
    users[socket.id] = {
      id: socket.id, 
      userName: data.username, 
      status: data.status,
      group: data.group
    };
    io.emit("updateUsers", Object.values(users)); // Envoie la liste des utilisateurs mise à jour
  }) // Réception des informations

  socket.on("upt_statut", (data) => {
    
    if (users[data.id]) {
      users[data.id].status = data.status;
      io.emit("updateUsers", Object.values(users)); // La modif se fait, mais elle n'est pas encore prise en compte côté front
    }

    io.emit("updateUsers", Object.values(users)); // Envoie les éléments mis à jour
  }) // Mise à jour du statut

  // Déconnexion
  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("updateUsers", Object.values(users));
  });
});

server.listen(3001, () => {
  console.log("Serveur en écoute sur le port 3001");
});
