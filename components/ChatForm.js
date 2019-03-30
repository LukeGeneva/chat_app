import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  chatInputWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  rightIcon: {
    marginLeft: 8,
  },
  textField: {
    marginTop: '0 !important',
    marginBottom: '0 !important',
    margin: 8,
  },
  isTyping: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 24,
  },
})

const ChatForm = ({ classes, handleMessage, handleTyping, isTyping }) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = event => {
    const value = event.target.value
    setInputValue(value)
    handleTyping(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleMessage(inputValue)
    setInputValue('')
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="caption" className={classes.isTyping}>
        {isTyping ? 'A user is typing...' : ' '}
      </Typography>
      <div className={classes.chatInputWrapper}>
        <TextField
          id="chat-input"
          className={classes.textField}
          fullWidth
          label="Chat"
          value={inputValue}
          onChange={handleChange}
        />
        <Button
          disabled={!inputValue}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          {'Send '}
          <SendIcon className={classes.rightIcon} />
        </Button>
      </div>
    </form>
  )
}

ChatForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMessage: PropTypes.func.isRequired,
  handleTyping: PropTypes.func.isRequired,
  isTyping: PropTypes.bool.isRequired,
}

export default withStyles(styles)(ChatForm)
