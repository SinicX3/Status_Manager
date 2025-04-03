const socket = io("http://localhost:3001"); // Connexion au serveur WebSocket

socket.on("updateColor", (newColor) => {
    document.body.style.backgroundColor = newColor; // Met à jour la couleur
});

function changeColor() {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Génère une couleur aléatoire
    socket.emit("changeColor", newColor); // Envoie au serveur
}