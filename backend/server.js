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

const randomHex = () => Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, "0").toUpperCase();
const socketId = randomHex()

let users = {}; // Initialisation de la liste des utilisateurs de la session

io.on("connection", (socket) => {

  socket.on("new_user", (data) => {
    users[socket.id] = {
      id: socket.id, 
      userName: data.username, 
      status: data.status,
      group: data.group
    };
    io.emit("updateUsers", {users: Object.values(users), socketName: socketId}); // Envoie la liste des utilisateurs mise à jour
  }) // Réception des informations

  socket.on("upt_statut", (data) => {
    
    if (users[data.id]) {
      users[data.id].status = data.status;
      io.emit("updateUsers", {users: Object.values(users), socketName: socketId}); // La modif se fait, mais elle n'est pas encore prise en compte côté front
    }

    io.emit("updateUsers", {users: Object.values(users), socketName: socketId}); // Envoie les éléments mis à jour
  }) // Mise à jour du statut

  // Déconnexion
  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("updateUsers", {users: Object.values(users), socketName: socketId});
  });
});

server.listen(3001, () => {
  console.log("Serveur en écoute sur le port 3001");
});
