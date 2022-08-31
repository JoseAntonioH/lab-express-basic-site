// importar express
const express=require("express");

//inicializamos express

const app=express();

app.use(express.static('public'));

console.log(__dirname);


//escuchar peticiones


//escuchar peticiones

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
});

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/views/about.html")
});

app.get("/work",(req,res)=>{
    res.sendFile(__dirname+"/views/work.html")
});

app.get("/photos",(req,res)=>{
    res.sendFile(__dirname+"/views/photos.html")
});

// indicar el puerto de nuestro servidor

app.listen(3000,()=>{
    console.log("prendimos el servidor en el puerto 3000")
});