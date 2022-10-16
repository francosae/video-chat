import { useState } from 'react'
import { ContextProvider } from './Contexts/SocketContext'
import Notifications from './Components/Notification'
import Sidebar from './Components/Sidebar'
import VideoPlayer from './Components/VideoPlayer'

function App() {
  return (
    <ContextProvider>
      <div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      </div>
    </ContextProvider>
  )
}

export default App
