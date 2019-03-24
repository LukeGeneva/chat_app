import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import CssBaseline from '@material-ui/core/CssBaseline'

import ChatRoom from '../components/ChatRoom'

const App = () => {
  const socket = useRef()
  const [message, setMessage] = useState('')

  useEffect(() => {
    socket.current = io()
    socket.current.on('hello', data => {
      setMessage(data.message)
    })
  }, [])

  return (
    <CssBaseline>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <ChatRoom socket={socket} />
      </div>
    </CssBaseline>
  )
}

export default App
