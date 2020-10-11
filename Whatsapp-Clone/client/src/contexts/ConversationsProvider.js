import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";

const ConversationsContext = createContext();
export const useConversations = () => useContext(ConversationsContext);

export function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  // 默认选中第0个聊天..
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContacts();
  const socket = useSocket();

  //创建聊天就是sender加上所有接收信息的..
  //所有的接收者确定,但是数据为空...
  function createConversation(recipients) {
    setConversations((prevConversations) => [
      ...prevConversations,
      { recipients, messages: [] },
    ]);
  }
  //madeChange就是完成了改变没有..初始是没有完成..
  const addMessageToConversation = useCallback(
    ({ recipients, text, sender }) => {
      setConversations((prevConversations) => {
        //变化了吗?
        let madeChange = false;
        const newMessage = { sender, text };

        //相当与遍历完所有的对话之后如果有相同的接收者则加在后面..否则都不变..
        //从本帐号出发如果所有的接收者相同的情况..即已经创建的情况下..
        const newConversations = prevConversations.map((conversation) => {
          if (arrayEquality(conversation.recipients, recipients)) {
            //这个flag就是如果遇到了相同的接收者,则发生改变..
            madeChange = true;
            //若相同的接收者是
            //该聊天的msg要更新且.即原来msg的基础上加上新的msg...
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }
          //所有不属于不同的接收者照常返回..
          return conversation;
        });
        //记录已经更新完毕..直接返回结果
        if (madeChange) {
          return newConversations;
          //否则就是全新的聊天..包括接收者和信息..
        } else {
          return [...prevConversations, { recipients, messages: [newMessage] }];
        }
      });
    },
    //好多都喜欢setXxx作为依赖项
    [setConversations]
  );

  useEffect(() => {
    if (socket == null) return;
    //套接字打开则接受信息..还有一个cb函数
    socket.on("receive-message", addMessageToConversation);
    //清除时..关闭套接字
    return () => socket.off("receive-message");
  }, [socket, addMessageToConversation]);
  //套接字发射..emit..

  function sendMessage(recipients, text) {
    socket.emit("send-message", { recipients, text });
//存储消息的时候..recipients是单独一栏..而 {sender和text打包本obj里面}是msg的[]里面的obj
    addMessageToConversation({ recipients, text, sender: id });
  }

  //简单来说接收这当前只有id,想增强到有名字..
  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find(contact => contact.id === recipient );
      const name = contact?.name ?? recipient;
      //每次return都是敲定了list中的一项...
      return {  id:recipient, name };
    });
    const messages = conversation.messages.map((message) => {
      const contact = contacts.find(contact => contact.id === message.sender)
      const name = contact?.name ?? message.sender;
      const fromMe = id === message.sender;
      return { ...message, senderName: name, fromMe };
    });
    const selected = index === selectedConversationIndex;
    return { ...conversation, messages, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}

function arrayEquality(a, b) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
}
