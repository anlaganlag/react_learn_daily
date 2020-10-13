//30分钟练习该项目然后开新项目..

const io = require('socket.io')(5000)

io.on('connection',socket=>{
    const id = socket.handshake.query.id
    socket.join(id)
    socket.on("send-message",({rep,rext}) = {
        
    })

})