import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'

const styles = () => ({
  message: {
    display: 'flex',
  },
})

const ChatMessage = ({ classes, message, index }) => {
  return (
    <>
      <ListItem className={classes.message}>
        <Avatar>
          <PersonIcon color={getIconColor(index)} />
        </Avatar>
        <ListItemText primary={message} />
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
    </>
  )
}

function getIconColor(index) {
  return index % 2 === 0 ? 'primary' : 'secondary'
}

ChatMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  message: PropTypes.string,
}

export default withStyles(styles)(ChatMessage)
