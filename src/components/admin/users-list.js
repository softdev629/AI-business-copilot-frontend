import React, { useEffect, useState } from "react";
import { Table, Space, Button, message } from "antd";
import api from "../../utils/api";

const UsersList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    api
      .get(
        `/admin/users?page=${tableParams.pagination.current}&size=${tableParams.pagination.pageSize}`
      )
      .then(({ data }) => {
        setData(data.users);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: data.total,
          },
        });
      });
  };

  const handleDeleteItem = (record) => {
    api.delete(`/admin/users?id=${record.id}`).then(() => {
      if (confirm("Are you sure?")) {
        message.success("User removed successfully!");
        fetchData();
      }
    });
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "full_name",
    },
    {
      title: "Verified",
      render: (_, record) => {
        return record.is_verified ? "Verified" : "Unverified";
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              handleDeleteItem(record);
            }}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default UsersList;
