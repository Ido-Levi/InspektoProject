const io = require("socket.io-client");
let socket = io.connect("http://localhost:3100");

socket.on("streamVideo",(data) => {
    console.log("rec "+ data );
});