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

let users = {}; // { socket.id: userNumber }

io.on("connection", (socket) => {

  socket.on("new_user", (data) => {
    users[socket.id] = [data.username, data.status];
    io.emit("updateUsers", Object.values(users)); // Envoie la liste des utilisateurs mise à jour
  }) // Réception du username

  socket.on("upt_statut", (data) => {
    users[socket.id].status = data.status;
  //   console.log(data.status)
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
