import CssBaseline from '@material-ui/core/CssBaseline'

import ChatRoom from '../components/ChatRoom'

const App = () => {
  return (
    <CssBaseline>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <ChatRoom />
      </div>
    </CssBaseline>
  )
}

export default App
