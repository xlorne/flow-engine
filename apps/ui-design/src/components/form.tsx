import { Button, Flex, Space, Table, type TableProps } from 'antd';
import React from 'react';

const FormDesign: React.FC = () => {

    const columns: TableProps<any>['columns'] = [
        {
            key: 'id',
            title: '编号',
            dataIndex: 'id'
        },
        {
            key: 'columnName',
            title: '字段名称',
            dataIndex: 'columnName'
        },
        {
            key: 'columnType',
            title: '字段类型',
            dataIndex: 'columnType'
        },
        {
            key: 'action',
            title: '操作',
            render: (_: any, record: any) => {
                return (
                    <Space>
                        <a key="edit">编辑</a>
                        <a key="del">删除</a>
                    </Space>
                )
            }
        },
    ]

    const datasources = [
        {
            id: 1,
            columnName: 'id',
            columnType: 'Long'
        },
        {
            id: 2,
            columnName: 'name',
            columnType: 'String'
        },
        {
            id: 3,
            columnName: 'age',
            columnType: 'Interge'
        }
    ]

    return (
        <>
            <Flex justify='end'>
                <Button type='primary'>添加字段</Button>
            </Flex>
            <Table
                title={() => {
                    return (
                        <>用户表(user)</>
                    )
                }}
                columns={columns}
                dataSource={datasources}
            />
        </>
    );
};

export default FormDesign;