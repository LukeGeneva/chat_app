import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'

const ChatHistory = ({ history }) => {
  return (
    <Paper
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        height: 400,
        width: 400,
        margin: '16px 0',
        padding: '16px',
        overflow: 'auto',
      }}
    >
      <List>
        {history && history.length ? (
          history.map((message, index) => {
            return (
              <Fragment key={index}>
                <ListItem>
                  <Avatar>
                    <PersonIcon color={getIconColor(index)} />
                  </Avatar>
                  <ListItemText primary={message} />
                </ListItem>
                <li>
                  <Divider variant="inset" />
                </li>
              </Fragment>
            )
          })
        ) : (
          <div>nothing</div>
        )}
      </List>
    </Paper>
  )
}

function getIconColor(index) {
  return index % 2 === 0 ? 'primary' : 'secondary'
}

ChatHistory.propTypes = {
  history: PropTypes.array,
}

export default ChatHistory
