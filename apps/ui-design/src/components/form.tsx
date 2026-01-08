import { Button, Divider, Flex, Space, Table, Tabs, type TableProps, type TabsProps } from 'antd';
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
            key: 'displayType',
            title: '渲染方式',
            dataIndex: 'displayType'
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
            columnType: 'Long',
            displayType: '整数'
        },
        {
            id: 2,
            columnName: 'name',
            columnType: 'String',
            displayType: '文本'
        },
        {
            id: 3,
            columnName: 'age',
            columnType: 'Interge',
            displayType: '整数'
        },
    
    ]

    const FormTable = (props:{header:boolean}) => {
        const showHeader = props.header || false;
        return (
            <Table
                title={() => {
                    if(showHeader){
                        return (
                            <Flex justify='start'>
                                主表字段(Test)
                            </Flex>
                        )
                    }
                }}
                columns={columns}
                dataSource={datasources}
            />
        )
    }

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '子表1(test1)',
            children: <FormTable header={false}/>,
        },
        {
            key: '2',
            label: '子表2(test2)',
            children: <FormTable header={false}/>,
        },
        {
            key: '3',
            label: '子表3(test3)',
            children: <FormTable header={false}/>,
        },
    ];
  

    return (
        <div style={{ padding: '24px', height: '100%', overflowY: 'auto' }}>
            <Flex justify='center'
                style={{
                    marginLeft: '20%',
                    marginRight: '20%',
                }}
            >
                <div style={{ width: '100%' }}>
                    <Flex justify='end'>
                        <Button type='primary'>添加字段</Button>
                    </Flex>
                    <FormTable header={true}/>
                    <Divider/>
                    <Flex justify='end' style={{marginBottom:10}}>
                        <Button type='primary'>添加字表</Button>
                    </Flex>
                    <Tabs
                        items={items}
                    />
                </div>
            </Flex>
        </div>
    );
};

export default FormDesign;