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

let currentColor = "#FFFFFF"; // Stocke la couleur actuelle

io.on("connection", (socket) => {
  // Envoie la couleur actuelle au nouvel utilisateur
  socket.emit("updateColor", currentColor);

  // Écoute les changements de couleur
  socket.on("changeColor", (newColor) => {
    currentColor = newColor; // Met à jour la couleur
    io.emit("updateColor", newColor); // Diffuse à tous les clients
  });
});

server.listen(3001, () => {
  console.log("Serveur en écoute sur le port 3001");
});