import React from 'react'
import PropTypes from 'prop-types'

import ChatHistoryMessage from './ChatHistoryMessage'

const ChatHistory = ({ history }) => {
  return (
    <div
      style={{
        border: '1px solid pink',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        minHeight: '200px',
        minWidth: '400px',
        margin: '16px 0',
      }}
    >
      {history &&
        history.length &&
        history.map(message => {
          return <ChatHistoryMessage message={message} />
        })}
    </div>
  )
}

ChatHistory.propTypes = {
  history: PropTypes.array,
}

export default ChatHistory
