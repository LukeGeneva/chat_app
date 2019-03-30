const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

let port = 1337

io.on('connect', socket => {
  console.log('user connected')

  socket.on('chat message', message => {
    console.log(`new chat message: ${message}`)
    io.emit('chat message', message)
  })

  socket.on('typing', () => {
    console.log('A user is typing...')
    io.emit('typing')
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
