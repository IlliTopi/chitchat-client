import {useEffect,useState,useRef} from 'react'
import ChatInput from './ChatInput'
import Message from './Message'
import { socket } from '../../socket'

const ChatLayout = () => {
  const areaRef = useRef(null)
  const [mes, setMes] = useState([])
  
  useEffect(()=>{
    const onMessage = (value) => {
      console.log(value)
      setMes(mes.concat(value))
    }
    socket.on('chat message', onMessage)
    return () =>{
      socket.off('chat message', onMessage)
    }
  }), [mes]
  useEffect(()=>{
    
    if(mes.length){
      /* window.requestAnimationFrame(() => { */
        const lastChildElement = areaRef.current?.lastElementChild
        lastChildElement?.scrollIntoView({ behavior: "auto", block: "end" })
      /* }) */
    }
  },[mes.length])


  return (
    <div className='chat-layout'>
        <div className="chat-area" ref={areaRef}>
          {mes.map((m,index) => {return <Message message={m} key={index}/>})}
        </div>
        <ChatInput />
    </div>
  )
}

export default ChatLayout