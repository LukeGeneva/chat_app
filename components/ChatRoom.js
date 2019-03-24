import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'

import ChatHistory from '../components/ChatHistory'
import ChatForm from '../components/ChatForm'

const styles = () => ({
  chatRoom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    minHeight: 200,
  },
})

const ChatRoom = ({ classes, socket }) => {
  return (
    <Paper className={classes.chatRoom}>
      <ChatHistory />
      <ChatForm socket={socket} />
    </Paper>
  )
}

ChatRoom.propTypes = {
  classes: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChatRoom)
