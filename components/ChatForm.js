import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  form: {
    display: 'flex',
    width: '100%',
  },
  button: {
    margin: '0 8px',
  },
  rightIcon: {
    marginLeft: 8,
  },
  textField: {
    margin: '0 8px',
  },
})

const ChatForm = ({ classes }) => {
  const socket = useRef()
  const [inputValue, setInputValue] = useState('')
  const [isTypingMessage, setIsTyping] = useState('')

  // useEffect(() => {
  // }, [])

  const handleChange = event => {
    const value = event.target.value
    socket.current = io()

    socket.current.emit('user is typing', ({ isTyping }) => {
      console.log('workie?')
      if (inputValue) {
        setIsTyping(isTyping)
      } else {
        setIsTyping('')
      }
    })
    setInputValue(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Mock Submit')
  }

  return (
    <div>
      <p style={{ color: 'red' }}>{isTypingMessage}</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="chat-input"
          className={classes.textField}
          fullWidth
          label="Chat"
          value={inputValue}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Send
          <SendIcon className={classes.rightIcon} />
        </Button>
      </form>
    </div>
  )
}

ChatForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChatForm)
