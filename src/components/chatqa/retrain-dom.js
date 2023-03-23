import { Form } from "antd";

const RetrainDom = (props) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
      <Form.Item name={["train", "data"]}></Form.Item>
    </Form>
  );
};

export default RetrainDom;
