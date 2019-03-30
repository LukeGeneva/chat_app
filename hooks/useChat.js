import React from 'react'
import io from 'socket.io-client'
import debounce from 'lodash.debounce'

const socket = io()

export const useChat = () => {
  const historyRef = React.useRef([])
  const [chatHistory, setChatHistory] = React.useState([])
  const [isTyping, setIsTyping] = React.useState(false)

  React.useEffect(() => {
    const listener = socket.on('chat message', message => {
      historyRef.current.push(message)
      setChatHistory([...historyRef.current])
    })

    return () => {
      socket.removeListener('chat message', listener)
    }
  }, [])

  const handleMessage = message => {
    socket.emit('chat message', message)
    setIsTyping(false)
  }

  const handleTyping = debounce(inputText => {
    if (!inputText) {
      setIsTyping(false)
    } else {
      socket.emit('typing')
      setIsTyping(true)
    }
  }, 100)

  return [chatHistory, isTyping, { handleMessage, handleTyping }]
}
