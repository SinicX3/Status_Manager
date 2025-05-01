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
  console.log("Nouvelle connexion :", socket.id);
  const userNumber = Math.floor(Math.random() * 10000);
  users[socket.id] = userNumber;

  // Envoie la liste des utilisateurs mise à jour
  io.emit("updateUsers", Object.values(users));

  // Déconnexion
  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("updateUsers", Object.values(users));
  });
});

server.listen(3001, () => {
  console.log("Serveur en écoute sur le port 3001");
});
