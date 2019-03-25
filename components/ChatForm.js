import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  form: {
    display: 'flex',
    alignItems: 'baseline',
    width: '100%',
  },
  rightIcon: {
    marginLeft: 8,
  },
  textField: {
    marginTop: '0 !important',
    marginBottom: '0 !important',
    margin: '0 8px',
  },
})

const ChatForm = ({ classes, handleMessage }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {
    const value = event.target.value
    setInputValue(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleMessage(inputValue)
    setInputValue('')
  }

  return (
    <Fragment>
      <form
        style={{
          display: 'flex',
          alignItems: 'baseline',
          width: '100%',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="chat-input"
          className={classes.textField}
          fullWidth
          label="Chat"
          value={inputValue}
          onChange={handleChange}
          margin="normal"
          style={{ margin: '8px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {'Send '}
          <SendIcon className={classes.rightIcon} />
        </Button>
      </form>
    </Fragment>
  )
}

ChatForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMessage: PropTypes.func.isRequired,
}

export default withStyles(styles)(ChatForm)
