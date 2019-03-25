import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const ChatHistoryMessage = ({ message = "It's quite in here..." }) => {
  return <Typography variant="body1">{message}</Typography>
}

ChatHistoryMessage.propTypes = {
  message: PropTypes.string,
}

export default ChatHistoryMessage
