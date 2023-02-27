import React, { useState } from "react";
import { Input, Button, List, Avatar, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import axios from "axios";

import "./index.css";

const ChatBox = () => {
  const [history, setHistory] = useState([
    {
      type: "human",
      text: "Hello!",
    },
    {
      type: "bot",
      text: "Ask me any questions related to this PDF context.",
    },
  ]);
  const [prompt, setPrompt] = useState("");
  const [isAnswered, setIsAnswered] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAnswered) {
      message.warning("AI Bot is thinking! Please wait!");
      return;
    }
    setIsAnswered(false);
    history.push({ type: "human", text: prompt });
    setHistory([...history]);
    setPrompt("");

    let formData = new FormData();
    formData.append("prompt", prompt);

    const response = await axios.post(
      "http://localhost:5000/api/chat",
      formData
    );

    history.push({ type: "bot", text: response.data.answer });
    setHistory([...history]);
    setIsAnswered(true);
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
          />
          <Button
            htmlType="submit"
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            size="large"
          />
        </Input.Group>
      </form>
    </div>
  );
};

export default ChatBox;
