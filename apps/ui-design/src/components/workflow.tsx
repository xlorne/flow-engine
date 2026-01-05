import { Tabs } from 'antd';
import React from 'react';

import FlowDesign from './flow';
import FormDesign from './form';
import Setting from './setting';

const Workflow: React.FC = () => {

    const items = [
        {
            key: 'form',
            label: '表单设计',
            children: <FormDesign />,
        },
        {
            key: 'flow',
            label: '流程设计',
            children: <FlowDesign/>,
        },
        {
            key: 'setting',
            label: '参数设置',
            children: <Setting/>,
        },
    ];

    return <Tabs items={items} />;
};

export default Workflow;