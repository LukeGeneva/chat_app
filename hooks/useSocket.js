import { useRef, useState } from 'react'
import io from 'socket.io-client'

const useSocket = () => {
  const socketRef = useRef(io())
  const [chatHistory, setChatHistory] = useState([])

  const handleMessage = message => {
    socketRef.current.emit('chat message', message)
  }

  const getChatHistory = () => {
    socketRef.current.on('chat message', message => {
      setChatHistory([...chatHistory, message])
    })
    return chatHistory
  }

  const getSocket = () => socketRef

  return {
    handleMessage,
    getChatHistory,
    getSocket,
  }
}

export default useSocket
