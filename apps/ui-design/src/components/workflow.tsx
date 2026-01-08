import { Tabs, Button, Space, Flex, Steps } from 'antd';
import { SaveOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import FlowDesign from './flow';
import FormDesign from './form';
import Setting from './setting';
import Base from './base';
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


    const items = [
        {
            key: 'base',
            label: '基本信息',
            children: <Base />,
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
        {
            key: 'setting',
            label: '更多参数',
            children: <Setting />,
        },
    ];

    const tabBarExtraContent = (
        <Space>
            <Button
                icon={<SaveOutlined />}
                type="primary"
                loading={loading}
                onClick={handleSave}
            >
                保存
            </Button>
        </Space>
    );

    return (
        <Flex vertical style={{ height: '100%' }}>
            <Tabs
                items={items}
                centered={true}
                style={{ flex: 1 }}
                tabBarStyle={{ marginBottom: 0 }}
                tabBarExtraContent={tabBarExtraContent}
            />

        </Flex>
    );
};

export default Workflow;