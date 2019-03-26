import React, { useEffect, useRef, useState, useCallback } from 'react'
import io from 'socket.io-client'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'

import ChatHistory from '../components/ChatHistory'
import ChatForm from '../components/ChatForm'

const socket = io()

const styles = () => ({
  chatRoom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 32,
  },
})

const ChatRoom = ({ classes }) => {
  const [history, setHistory] = useState([])
  const historyRef = useRef([])

  useEffect(() => {
    const listener = socket.on('chat message', message => {
      historyRef.current.push(message)
      setHistory([...historyRef.current])
    })

    return () => {
      socket.removeListener('chat message', listener)
    }
  }, [])

  const handleMessage = useCallback((message) => {
    socket.emit('chat message', message)
  }, [])

  return (
    <Paper className={classes.chatRoom}>
      <div style={{ padding: 32 }}>
        <ChatHistory history={history} />
        <ChatForm handleMessage={handleMessage} />
      </div>
    </Paper>
  )
}

ChatRoom.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChatRoom)
