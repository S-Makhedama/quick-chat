
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('7ab03e68-748d-4929-86be-f3bd8f51c4f8', 
    props.user.username,
    props.user.secret
); 
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket{...chatProps} />
        <MultiChatWindow{...chatProps} style={{height: '100%'}}/>
    </div>)
}

export default ChatsPage;