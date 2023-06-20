import { signOut } from "next-auth/react";

interface IChatProps {
}

const Chat: React.FunctionComponent<IChatProps> = (props) => {
  return <div>CHAT
    <button onClick={()=>signOut()}>Log out</button>
  </div>;
};

export default Chat;
