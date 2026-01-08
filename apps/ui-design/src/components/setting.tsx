import {
    Card,
    Form,
    Input,
    Switch,
    Space,
    Flex,
} from 'antd';
import React from 'react';


const Setting: React.FC = () => {
    const [form] = Form.useForm();

    return (
        <div style={{ padding: '24px', height: '100%', overflowY: 'auto' }}>
            <Flex justify='center'
                style={{
                    marginLeft: '20%',
                    marginRight: '20%',
                }}
            >
                <Space orientation="vertical" size="large" style={{ width: '100%' }}>
                    <Card title="高级设置" variant={'borderless'}>
                        <Form
                            form={form}
                            layout="horizontal"
                            initialValues={{
                                flowName: '用户审批流程',
                                flowDescription: '这是一个标准的用户审批流程设计模板',
                                version: '1.0.0',
                                category: 'approval',
                                enabled: true,
                            }}
                        >

                            <Form.Item
                                label="允许撤销审批"
                                name="parallelExecution"
                                valuePropName="checked"
                                tooltip="启用后允许多个节点并行执行"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                            >
                                <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                            </Form.Item>

                            <Form.Item
                                label="允许跳过相同审批人"
                                name="parallelExecution"
                                valuePropName="checked"
                                tooltip="启用后允许多个节点并行执行"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                            >
                                <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                            </Form.Item>


                            <Form.Item
                                label="允许发起人作废流程"
                                name="maxParallelNodes"
                                tooltip="同时执行的最大节点数量"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                            >
                                <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                            </Form.Item>
                        </Form>
                    </Card>

                    <Card title="通知配置" variant={'borderless'}>
                        <Form
                            layout="horizontal"
                            form={form}
                            initialValues={{
                                notifyOnStart: true,
                                notifyOnComplete: true,
                                notifyOnFail: true,
                                emailNotification: true,
                                webhookUrl: '',
                            }}
                        >
                            <Space orientation="vertical" style={{ width: '100%' }}>

                                <Form.Item
                                    label="启用通知"
                                    name="notification"
                                    valuePropName="checked"
                                    labelCol={{
                                        style: {
                                            width: 200
                                        }
                                    }}
                                >
                                    <Switch checkedChildren="启用" unCheckedChildren="禁用" />
                                </Form.Item>

                                <Form.Item
                                    label="Webhook 通知地址"
                                    name="webhookUrl"
                                    tooltip="流程状态变更时会向此地址发送 POST 请求"
                                    labelCol={{
                                        style: {
                                            width: 200
                                        }
                                    }}
                                >
                                    <Input placeholder="https://example.com/webhook" />
                                </Form.Item>
                            </Space>
                        </Form>
                    </Card>
                </Space>
            </Flex>
        </div>
    );
};

export default Setting;