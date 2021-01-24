// app.js => backend wala code
// webapp => npm init -y
// npm i express nodemon socket.io
// in package.json => "start":"nodemon app"


//express =>used to make api on the backend in easiery way
const express = require("express");
const app = express() ;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("public"));

io.on('connection', function(socket){
    console.log(socket.id + "connected!!");

    socket.on("md" , function(pointObject){
        //console.log("md" , pointObject);
        socket.broadcast.emit("mousedown" , pointObject);
    })

    socket.on("mm" , function(pointObject){
        //console.log("mm" , pointObject);
        socket.broadcast.emit("mousemove" , pointObject);
    })

    socket.on("mu" , function(){
        socket.broadcast.emit("mouseup");
    })

    socket.on("disconnect" , function(){
        console.log("socket disconnected!!");
    })
  });

  let PORT = process.env.PORT || 3000;

// application or backend or server kuch bhi keh skte hain 
//app k baad kuch bhi dot k baad laga ho => http methode => here get
// "" double quotes me kuch bhi ho => app route
// function() => route handler
//app.get("/" , function(request , response){
    // can be used as this response.redirect("main.html") ;
    //or
    //response.sendFile(__dirname+"public/main.html");
//})
http.listen(PORT , function(){
    console.log("app started at port 3000!!!!");
})




