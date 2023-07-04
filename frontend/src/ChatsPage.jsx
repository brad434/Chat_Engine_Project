import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic("5fd65f1a-13d8-484e-8bca-b413abf09baa", props.user.username, props.user.secret);
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
}


export default ChatsPage;