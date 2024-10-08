import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRoom } from "../../Slice/Workslice";
import ChatInput from "../ChatInput/ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, getDocs, doc, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import ChatMessage from "../ChatMessage/ChatMessage";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const workspaceId = useSelector(selectRoom);
  const [workRoomDetails] = useDocument(
    workspaceId && db.collection("workRoom").doc(workspaceId)
  );

  const fetchMessages = async () => {
    const messagesCollectionRef = collection(
      db,
      "workRoom",
      workspaceId,
      "messages",
     
    );

    const messageTime = query(messagesCollectionRef ,  orderBy("timeStamp" , "asc"))

    const querySnapshot = await getDocs(messageTime);

    const messagesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setMessages(messagesData);
  };

  fetchMessages();

  return (
    <div className="flex flex-col   lg:items-center">
      <div className="">
        <h1>{workRoomDetails?.data().name}</h1>
        <div className="">
          {messages.length > 0 ? (
            messages.map((list) => (
              <ChatMessage
                key={list.id}
                message={list.message}
                timeStamp={list.timeStamp}
              />
            ))
          ) : (
            <p>No Messages Found</p>
          )}
        </div>
      </div>
      <ChatInput
        workspaceId={workspaceId}
        channelName={workRoomDetails?.data().name}
      />
    </div>
  );
};

export default Chat;
