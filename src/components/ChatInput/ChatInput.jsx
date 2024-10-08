import React, { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
const ChatInput = ({ workspaceId , channelName}) => {
  const [inputValue, setInputValue] = useState("");

  const sendNote = (e) => {
    e.preventDefault();
    if (!workspaceId) {
      return false;
    }
    db.collection("workRoom").doc(workspaceId).collection("messages").add({
      message: inputValue,
      user: channelName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputValue("");
    
  };
  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          placeholder="Enter a text........"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={sendNote}>Send</button>
      </form>
    </div>
  );
};

export default ChatInput;
