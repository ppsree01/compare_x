import './Chat.css';
import { useState } from 'react';

const Chat = () => {

    const [visibility, setVisibility] = useState(false);

    const handleVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <>
            { visibility &&
                <div className="chat-container">
                    <div className='chat-popup'>
                        <div className='chat-title'>AI Assistant</div>
                        <div className='chat-textbox'>
                            <img src='/images/plus-icon.png' width='25px' height='25px' />
                            <input className='chat-input' />
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