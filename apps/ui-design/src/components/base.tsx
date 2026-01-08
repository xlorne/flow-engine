import {
    Form,
    Input,
    Select,
    Space,
    Card,
    Flex,
} from 'antd';
import React from 'react';

const { TextArea } = Input;

const Base: React.FC = () => {
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
                    <Card
                        title="基本信息"
                        variant={'borderless'}
                    >
                        <Form
                            form={form}
                            layout="horizontal"
                            initialValues={{
                                flowName: '用户审批流程',
                                flowDescription: '这是一个标准的用户审批流程设计模板',
                                category: 'approval',
                                formName: 'Test',
                                flowCode: '123123'
                            }}
                        >
                            <Form.Item
                                label="流程分类"
                                name="category"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                                rules={[{ required: true, message: '请输入流程分类' }]}
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
                                label="流程名称"
                                name="flowName"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                                rules={[{ required: true, message: '请输入流程名称' }]}
                            >
                                <Input placeholder="请输入流程名称" />
                            </Form.Item>

                            <Form.Item
                                label="流程描述"
                                name="flowDescription"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                            >
                                <TextArea
                                    rows={3}
                                    placeholder="请输入流程描述"
                                    maxLength={200}
                                    showCount
                                />
                            </Form.Item>



                            <Form.Item
                                label="表单名称"
                                name="formName"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                                rules={[{ required: true, message: '请输入表单名称' }]}
                            >
                                <Input placeholder="请输入表单名称" />
                            </Form.Item>

                            <Form.Item
                                label="流程编码"
                                name="flowCode"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                                rules={[{ required: true, message: '请输入流程编码' }]}
                            >
                                <Input placeholder="请输入流程编码" />
                            </Form.Item>
                        </Form>
                    </Card>
                    <Card
                        title="权限信息"
                        variant={'borderless'}
                    >
                        <Form
                            form={form}
                            layout="horizontal"
                            initialValues={{
                                startUser: 'any',
                            }}
                        >

                            <Form.Item
                                label="发起人员"
                                name="startUser"
                                labelCol={{
                                    style: {
                                        width: 200
                                    }
                                }}
                                rules={[{ required: true, message: '请输入流程分类' }]}
                            >
                                <Space.Compact block >
                                    <Select
                                        style={{ width: 200 }}
                                        options={[
                                            { label: '任何人', value: 'any' },
                                            { label: '指定部门', value: 'depart' },
                                            { label: '指定公司', value: 'company' },
                                            { label: '其他', value: 'other' },
                                        ]}
                                        defaultValue={'any'}
                                    />
                                    <Input style={{ width: 'calc(100% - 200px)' }} placeholder='设置人员的范围' />
                                </Space.Compact>

                            </Form.Item>
                        </Form>
                    </Card>
                </Space>
            </Flex>

        </div>
    );
};

export default Base;