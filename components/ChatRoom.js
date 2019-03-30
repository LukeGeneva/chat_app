import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'

import ChatHistory from '../components/ChatHistory'
import ChatForm from '../components/ChatForm'
import { useChat } from '../hooks/useChat'

const styles = () => ({
  chatRoom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 32,
  },
})

const ChatRoom = ({ classes }) => {
  const [chatHistory, isTyping, { handleMessage, handleTyping }] = useChat()
  return (
    <Paper className={classes.chatRoom}>
      <div style={{ padding: 32 }}>
        <ChatHistory history={chatHistory} />
        <ChatForm
          handleMessage={handleMessage}
          handleTyping={handleTyping}
          isTyping={isTyping}
        />
      </div>
    </Paper>
  )
}

ChatRoom.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChatRoom)
