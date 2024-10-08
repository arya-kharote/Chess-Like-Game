//include dependencies
const express = require("express")
const app = express()

const path = require("path")
const http = require("http")
const {Server} = require("socket.io")
const { Socket } = require("dgram")

const server = http.createServer(app) //create server in htttp
const io = new Server(server)

app.use(express.static(path.resolve("")))

let arr=[]
let playingArray = []
io.on("connection",(socket)=>{
    socket.on("find",(e)=>{
        console.log("Socket on")
        console.log(e.name)

        if(e.name!=null){
            arr.push(e.name)
            //connect two players
            if(arr.length>=2){
                let p1obj = {
                    p1name:arr[0],
                    p1value:"X",
                    p1move:""
                }
                let p2obj = {
                    p2name:arr[1],
                    p2value:"O",
                    p2move:""
                }
                let obj={
                    p1:p1obj,
                    p2:p2obj
                }
                playingArray.push(obj)
                arr.splice(0,2)
                io.emit("find",{allPlayers:playingArray})
            }
        }
    })

    socket.on('makeMove', ({ move }) => {
        const [piece, location] = move.split(':'); 
        const locationNumber = location.charCodeAt(0) - 25; 

        io.emit('updateBoard', { piece, location: locationNumber });
    });
})

app.get("/",(req,res)=>{
    return res.sendFile("index.html")
})

//listen to server
server.listen(3000,()=>{
    console.log("port connected to 3000")
})
