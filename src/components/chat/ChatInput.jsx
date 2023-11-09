import {useState,useRef} from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { IconSend } from '../../icons/icons'
import { socket } from '../../socket'

function ChatInput() {
    const [message, setMessage] = useState("")
    const butRef = useRef()

    const handleChange = (e) => {
        if(e.target.value.length >= 1000){  
            
        } 
        else {
            setMessage(e.target.value);} 
    }
    const handleKey = (e) =>{
        if(e.key === 'Enter' && !e.shiftKey){
            e.preventDefault()
            butRef.current.click()
        }
        if(e.key === 'Enter' && e.shiftKey){
            e.preventDefault()
            setMessage(prevMessage => {return prevMessage + '\n'})
            console.log(JSON.stringify(message))
        }
    }

    const sendMessage = (e) => {
        e.preventDefault()
        socket.timeout(0).emit('chat message', message, () => {
            setMessage("")
        })
    }

    return (
    <div className="chat-input">
        <div className="chat-actions-wrapper">
            <TextareaAutosize maxRows={10} value={message} onChange={handleChange} onKeyDown={handleKey}/>
            <button ref={butRef} className='chat-send' onClick={sendMessage}><IconSend /></button>
        </div>
    </div>
    )
}

export default ChatInput