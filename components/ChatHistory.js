import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'

import ChatMessages from './ChatMessages'

const styles = () => ({
  chatHistory: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 400,
    width: 400,
    margin: '16px 0',
    padding: '16px',
    overflow: 'auto',
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 100%',
  },
})

const ChatHistory = ({ classes, history }) => {
  return (
    <Paper className={classes.chatHistory}>
      <List className={classes.messages}>
        <ChatMessages chatHistory={history} />
      </List>
    </Paper>
  )
}

ChatHistory.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.array,
}

export default withStyles(styles)(ChatHistory)
