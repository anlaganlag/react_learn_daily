
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')


app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res) =>{
    res.redirect(`/${uuidV4()}`)
})
// http://localhost:3000/a731d5bf-c709-43e9-9310-79562cac852a
// http://localhost:3000/2d18b9e0-0655-4aab-90e8-c96dd58edcd2

app.get('/:room',(req,res) =>{
    res.render('room',{ roomId:req.params.room })
})

io.on('connection',socket =>{
    socket.on('join-room',(roomId,userId) =>{
        console.log(roomId,userId)
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected',userId)
    })
})


server.listen(3000)