import React, { useEffect, useState } from "react";
import { Input, Button, List, Avatar, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import axios from "axios";
import useWebSocket, { ReadyState } from "react-use-websocket";

import "./index.css";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  // Hooks
  const [history, setHistory] = useState([
    {
      type: "human",
      text: "Hello!",
    },
    {
      type: "bot",
      text: "Ask me any questions related to this PDF context.",
    },
  ]); // Chat History
  const [prompt, setPrompt] = useState(""); // Question
  const [isAnswered, setIsAnswered] = useState(true); // Answer state
  const params = useParams(); // Url ParamsZ
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `wss://monkfish-app-2cxx3.ondigitalocean.app/api/chat/${params.id}`
  );

  // Receive Messages
  useEffect(() => {
    if (lastMessage !== null) {
      // Add History
      setHistory((prev) =>
        prev.concat({ type: "bot", text: lastMessage.data })
      );
      // Think Stop Flag
      setIsAnswered(true);
    }
  }, [lastMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Before answer, make user not to ask questions
    if (!isAnswered) {
      message.warning("AI Bot is thinking! Please wait!");
      return;
    }
    setIsAnswered(false);
    history.push({ type: "human", text: prompt });
    setHistory([...history]);

    sendMessage(prompt);
    setPrompt("");
  };

  return (
    <div className="chat_container">
      <List
        className="chat_history"
        itemLayout="horizontal"
        dataSource={history}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              className="chat"
              avatar={
                <Avatar
                  src={
                    item.type === "human"
                      ? "/assets/images/user.png"
                      : "/assets/images/bot.png"
                  }
                />
              }
              title={item.type === "human" ? "Question" : "Answer"}
              description={item.text}
            />
          </List.Item>
        )}
      ></List>
      <form className="message_box" onSubmit={handleSubmit}>
        <Input.Group compact>
          <Input
            style={{ width: "calc(100% - 50px)", textAlign: "left" }}
            onChange={(e) => setPrompt(e.target.value)}
            size="large"
            value={prompt}
            disabled={readyState !== ReadyState.OPEN}
          />
          <Button
            htmlType="submit"
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            size="large"
            disabled={readyState !== ReadyState.OPEN}
          />
        </Input.Group>
      </form>
    </div>
  );
};

export default ChatBox;
