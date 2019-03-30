import React from 'react'
import PropTypes from 'prop-types'

import ChatMessage from './ChatMessage'

const ChatMessages = ({ chatHistory }) => {
  if (!chatHistory || !chatHistory.length) {
    return <div>It's quite in here...</div>
  }

  return chatHistory.map((message, index) => (
    <ChatMessage key={index} index={index} message={message} />
  ))
}

ChatMessages.propTypes = {
  chatHistory: PropTypes.array,
}

export default ChatMessages
