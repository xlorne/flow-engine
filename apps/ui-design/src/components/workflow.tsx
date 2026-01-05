import { Tabs, Button, Space, Flex } from 'antd';
import { SaveOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import FlowDesign from './flow';
import FormDesign from './form';
import Setting from './setting';
import { message } from 'antd';

const Workflow: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleSave = () => {
        setLoading(true);
        // 模拟保存操作
        setTimeout(() => {
            setLoading(false);
            message.success('保存成功');
        }, 1000);
    };

    const handleReset = () => {
        message.info('已重置为默认配置');
    };

    const handleDelete = () => {
        // 这里可以添加确认对话框
        message.warning('删除功能待实现');
    };

    const items = [
        {
            key: 'setting',
            label: '参数设置',
            children: <Setting />,
        },
        {
            key: 'form',
            label: '表单设计',
            children: <FormDesign />,
        },
        {
            key: 'flow',
            label: '流程设计',
            children: <FlowDesign />,
        },
    ];

    const tabBarExtraContent = (
        <Space size="small">
            <Button
                icon={<ReloadOutlined />}
                onClick={handleReset}
            >
                重置
            </Button>
            <Button
                icon={<SaveOutlined />}
                type="primary"
                loading={loading}
                onClick={handleSave}
            >
                保存
            </Button>
            <Button
                icon={<DeleteOutlined />}
                danger
                onClick={handleDelete}
            >
                删除
            </Button>
        </Space>
    );

    return (
        <Flex vertical style={{ height: '100%' }}>
            <Tabs
                items={items}
                style={{ flex: 1 }}
                tabBarStyle={{ marginBottom: 0 }}
                tabBarExtraContent={tabBarExtraContent}
            />
        </Flex>
    );
};

export default Workflow;