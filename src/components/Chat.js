import './Chat.css';
import { useState } from 'react';
import ChatMessage from './ChatMessage';

const Chat = () => {

    const [visibility, setVisibility] = useState(false);
    const [value, setValue] = useState('');
    const [chatList, updateChatList] = useState([]);

    const handleVisibility = () => {
        setVisibility(!visibility);
    }

    const sendChat = () => {
        let newChatList = [...chatList];
        newChatList.push(
            <ChatMessage user='user' msg={value} />
        )
        updateChatList([...newChatList]);
        setValue('');

    }

    return (
        <>
            { visibility &&
                <div className="chat-container">
                    <div className='chat-popup'>
                        <div className='chat-title'>AI Assistant</div>
                        <div className='chat-content'>
                            <ChatMessage user='ai' msg='Hey! How can I help you today ?' />
                            {chatList}
                            {/* <ChatMessage user='user' msg='How do I compare products?' /> */}
                        </div>
                        <div className='chat-textbox'>
                            <img src='/images/plus-icon.png' width='25px' height='25px' onClick={sendChat}/>
                            <input className='chat-input' value={value} onChange={(e) => setValue(e.target.value)} />
                        </div>
                    </div>
                
                </div>
            }
            <div className='chat-toggle'>
                { !visibility && <img onClick={handleVisibility} src='/images/up-icon-black.png' width='30px' height='30px' /> }
                { visibility && <img onClick={handleVisibility} src='/images/down-icon-black.png' width='30px' height='30px' /> }
            </div>
        </>
    )
}

export default Chat;