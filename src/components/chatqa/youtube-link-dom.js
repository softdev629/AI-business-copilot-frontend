import { Input, Space } from "antd";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const { Search } = Input;

const YoutubeLinkDom = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const onSearch = (value) => {
    setLoading(true);

    axios
      .post(`http://localhost:9000/api/youtube/train/${params.id}`, {
        url: `http://${value}`,
      })
      .then((res) => setLoading(false))
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder="input youtube video link"
        loading={loading}
        enterButton="Train"
        size="large"
        addonBefore="https://"
        onSearch={onSearch}
        style={{ width: 500, marginTop: 20 }}
      />
    </Space>
  );
};

export default YoutubeLinkDom;
