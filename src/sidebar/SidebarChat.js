import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  const createChat = () => {
      const roomName = prompt("Please enter name for chat");

      if (roomName) {
          // TODO: Implement function
      }
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info"></div>
    </div>
  ) : (
    <div className="sidebarChat"
    onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>  
  );
}

export default SidebarChat;
