import './ChatMessage.css';

const ChatMessage = ({ user, msg }) => {

    const aiThumbnail = <img src='/images/robot-icon.png' width='40px' height='40px' />
    const userThumbnail = <img src='/images/user-icon.png' width='40px' height='40px' />

    const chatMsgAi = <div className='chat-msg chat-left'>
        <div>
            {aiThumbnail}
        </div>
        <div className="chat-msg-content">
            {msg}
        </div>
    </div>

    const chatMsgUser = <div className='chat-msg chat-right'>
        <div className="chat-msg-content">
            {msg}
        </div>
        <div>
            {userThumbnail}
        </div>
        
    </div>

    return (
        <div className='chat-msg-container'>
            { user == 'ai' ? chatMsgAi : chatMsgUser }
        </div>
    )
}

export default ChatMessage;