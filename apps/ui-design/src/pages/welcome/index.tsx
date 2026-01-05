import { Button, Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd/es/table";
import { useNavigate } from "react-router";

const App = () => {

  const navigate = useNavigate();

  const columns: TableProps<any>['columns'] = [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (text: string) => {
        return <Tag color="green">{text}</Tag>
      },
    },
    {
      title: "操作",
      dataIndex: "option",
      key: "option",
      render: (_: any, record: any) => {
        return (
          <Space>
            <a key="edit"
              onClick={() => {
                navigate('/design', { state: { ...record } });
              }}>编辑</a>
            <a key="delete">删除</a>
          </Space>
        )
      },
    }
  ]

  const dataSource: any[] = [
    {
      id: 1,
      name: "请假流程",
      status: "正常",
    },
  ]

  return (
    <>
      <Flex justify="end" style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => {
            navigate('/design');
          }}
        >新增流程</Button>
      </Flex>
      <Table
        showHeader
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );
};

export default App;
