import {
    Card,
    Form,
    Input,
    Switch,
    InputNumber,
    Select,
    Space,
    Divider,
    Typography,
    ColorPicker,
} from 'antd';
import React from 'react';

const { TextArea } = Input;
const { Text } = Typography;

const Setting: React.FC = () => {
    const [form] = Form.useForm();

    return (
        <div style={{ padding: '24px', height: '100%', overflowY: 'auto' }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {/* 基本信息 */}
                <Card title="基本信息" bordered={false}>
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={{
                            flowName: '用户审批流程',
                            flowDescription: '这是一个标准的用户审批流程设计模板',
                            version: '1.0.0',
                            category: 'approval',
                            enabled: true,
                        }}
                    >
                        <Form.Item
                            label="流程名称"
                            name="flowName"
                            rules={[{ required: true, message: '请输入流程名称' }]}
                        >
                            <Input placeholder="请输入流程名称" />
                        </Form.Item>

                        <Form.Item
                            label="流程描述"
                            name="flowDescription"
                        >
                            <TextArea
                                rows={3}
                                placeholder="请输入流程描述"
                                maxLength={200}
                                showCount
                            />
                        </Form.Item>

                        <Space size="large">
                            <Form.Item
                                label="版本号"
                                name="version"
                            >
                                <Input placeholder="1.0.0" />
                            </Form.Item>

                            <Form.Item
                                label="分类"
                                name="category"
                            >
                                <Select
                                    style={{ width: 200 }}
                                    options={[
                                        { label: '审批流程', value: 'approval' },
                                        { label: '业务流程', value: 'business' },
                                        { label: '数据流程', value: 'data' },
                                        { label: '其他', value: 'other' },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="启用状态"
                                name="enabled"
                                valuePropName="checked"
                            >
                                <Switch checkedChildren="启用" unCheckedChildren="禁用" />
                            </Form.Item>
                        </Space>
                    </Form>
                </Card>

                {/* 执行配置 */}
                <Card title="执行配置" bordered={false}>
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={{
                            timeout: 30,
                            retryCount: 3,
                            retryInterval: 5,
                            parallelExecution: false,
                            maxParallelNodes: 5,
                        }}
                    >
                        <Space size="large" wrap>
                            <Form.Item
                                label="超时时间（分钟）"
                                name="timeout"
                                tooltip="单个节点执行的最大超时时间"
                            >
                                <InputNumber min={1} max={120} style={{ width: 150 }} />
                            </Form.Item>

                            <Form.Item
                                label="重试次数"
                                name="retryCount"
                                tooltip="节点执行失败后的自动重试次数"
                            >
                                <InputNumber min={0} max={10} style={{ width: 150 }} />
                            </Form.Item>

                            <Form.Item
                                label="重试间隔（秒）"
                                name="retryInterval"
                            >
                                <InputNumber min={1} max={60} style={{ width: 150 }} />
                            </Form.Item>
                        </Space>

                        <Divider style={{ margin: '16px 0' }} />

                        <Form.Item
                            label="并行执行"
                            name="parallelExecution"
                            valuePropName="checked"
                            tooltip="启用后允许多个节点并行执行"
                        >
                            <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                        </Form.Item>

                        <Form.Item
                            label="最大并行节点数"
                            name="maxParallelNodes"
                            tooltip="同时执行的最大节点数量"
                        >
                            <InputNumber min={1} max={20} style={{ width: 150 }} />
                        </Form.Item>
                    </Form>
                </Card>

                {/* 通知配置 */}
                <Card title="通知配置" bordered={false}>
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={{
                            notifyOnStart: true,
                            notifyOnComplete: true,
                            notifyOnFail: true,
                            emailNotification: true,
                            webhookUrl: '',
                        }}
                    >
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Form.Item
                                label="流程开始通知"
                                name="notifyOnStart"
                                valuePropName="checked"
                            >
                                <Switch checkedChildren="启用" unCheckedChildren="禁用" />
                            </Form.Item>

                            <Form.Item
                                label="流程完成通知"
                                name="notifyOnComplete"
                                valuePropName="checked"
                            >
                                <Switch checkedChildren="启用" unCheckedChildren="禁用" />
                            </Form.Item>

                            <Form.Item
                                label="流程失败通知"
                                name="notifyOnFail"
                                valuePropName="checked"
                            >
                                <Switch checkedChildren="启用" unCheckedChildren="禁用" />
                            </Form.Item>

                            <Form.Item
                                label="邮件通知"
                                name="emailNotification"
                                valuePropName="checked"
                            >
                                <Switch checkedChildren="启用" unCheckedChildren="禁用" />
                            </Form.Item>

                            <Form.Item
                                label="Webhook 通知地址"
                                name="webhookUrl"
                                tooltip="流程状态变更时会向此地址发送 POST 请求"
                            >
                                <Input placeholder="https://example.com/webhook" />
                            </Form.Item>
                        </Space>
                    </Form>
                </Card>

                {/* 外观设置 */}
                <Card title="外观设置" bordered={false}>
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={{
                            themeColor: '#1890ff',
                            gridSize: 'medium',
                            showGrid: true,
                            showMiniMap: true,
                        }}
                    >
                        <Space size="large">
                            <Form.Item
                                label="主题颜色"
                                name="themeColor"
                            >
                                <ColorPicker showText />
                            </Form.Item>

                            <Form.Item
                                label="网格大小"
                                name="gridSize"
                            >
                                <Select
                                    style={{ width: 150 }}
                                    options={[
                                        { label: '小', value: 'small' },
                                        { label: '中', value: 'medium' },
                                        { label: '大', value: 'large' },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="显示网格"
                                name="showGrid"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>

                            <Form.Item
                                label="显示小地图"
                                name="showMiniMap"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>
                        </Space>
                    </Form>
                </Card>

                {/* 底部说明 */}
                <div style={{ textAlign: 'center' }}>
                    <Text type="secondary">
                        提示：修改设置后需要点击右上角"保存"按钮才能生效
                    </Text>
                </div>
            </Space>
        </div>
    );
};

export default Setting;