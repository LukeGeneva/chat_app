const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

let port = 3000

io.on('connect', socket => {
  console.log('user connected')

  socket.emit('hello', {
    message: 'Hello, World!',
  })

  socket.on('user is typing', () => {
    console.log('user is typing')
    io.emit('user is typing', { isTyping: 'a user is typing...' })
  })

  socket.on('chat message', message => {
    io.emit('chat message', message)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
