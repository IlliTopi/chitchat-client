import { useState, useEffect } from 'react'
import './App.css'
import ChatLayout from './components/chat/ChatLayout.jsx'
import { socket } from './socket'

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    }

    const onDisconnect = () => {
      setIsConnected(false);
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  return (
    <>
      <div className='interface'>
        <div> 
          Sidebar
        </div>
        <div>
          <ChatLayout />
        </div>
      </div>
    </>
  )
}

export default App
