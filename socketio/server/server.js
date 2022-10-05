const io = require('socket.io')(8080, {
    cors: {
        origin: ['http://localhost:3006']
    }
})


io.on('connection', socket => {
    console.log(socket.id)
    socket.on('custom-event', (e) => {
        console.log('custom-event' , e)
    })
})
