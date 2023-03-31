import { Input, message, Space } from "antd";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const { Search } = Input;

const YoutubeLinkDom = () => {
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const params = useParams();

  const onSearch = (value) => {
    setLoading(true);

    setVideoURL(`https://${value}`);
    axios
      .post(`http://localhost:9000/api/youtube/train/${params.id}`, {
        url: `https://${value}`,
      })
      .then(() => {
        message.success(`https://${value} Training Success`);
        setLoading(false);
      })
      .catch(() => {
        message.error(`https://${value} Training Failed`);
        message.setLoading(false);
      });
  };

  return (
    <>
      <h2 className="youtube-link__header">Youtube Link</h2>
      <Space direction="vertical" className="youtube-link__container">
        <Search
          placeholder="input youtube video link"
          loading={loading}
          enterButton="Train"
          size="large"
          addonBefore="https://"
          onSearch={onSearch}
          className="youtube-link__input"
        />
        <iframe src={videoURL} width="100%" height={300}></iframe>
      </Space>
    </>
  );
};

export default YoutubeLinkDom;
