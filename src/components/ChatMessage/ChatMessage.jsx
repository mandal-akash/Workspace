import React from "react";

const ChatMessage = ({ message,timeStamp }) => {

  console.log(timeStamp);
  
  
  return (
    <div className="chatMessages">
      <p>{message}</p>
      <p>Date: <span>{new Date(timeStamp?.toDate()).toUTCString()}</span></p>
    </div>
  );
};

export default ChatMessage;
