import React from 'react'
import PropTypes from 'prop-types'

const ChatHistoryMessage = ({ message }) => {
  return <div>{message}</div>
}

ChatHistoryMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ChatHistoryMessage
