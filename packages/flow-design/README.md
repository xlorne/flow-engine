# @flow-engine/flow-design

一个简单的流程设计组件，支持四种基础节点类型。

## 特性

- **开始节点**：流程的起始点，不可删除
- **结束节点**：流程的终止点，返回流程执行结果
- **流程节点**：用于定义流程中的主要处理步骤
- **抄送节点**：用于将流程信息抄送给相关人员

## 安装

\`\`\`bash
pnpm add @flow-engine/flow-design
\`\`\`

## 使用

\`\`\`\`tsx
import { FlowEditor } from '@flow-engine/flow-design';

function App() {
  return <FlowEditor />;
}
\`\`\`\`

## 自定义数据

\`\`\`\`tsx
import { FlowEditor } from '@flow-engine/flow-design';

const customData = {
  nodes: [
    {
      id: 'start_01',
      type: 'start',
      data: { title: '开始' },
      blocks: [
        {
          id: 'branch_01',
          blocks: [
            {
              id: 'process_01',
              type: 'process',
              data: { title: '审批', description: '主管审批' },
              blocks: [],
            },
            {
              id: 'end_01',
              type: 'end',
              data: { title: '结束' },
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  return <FlowEditor data={customData} />;
}
\`\`\`\`

## 节点类型

### 开始节点 (start)
- 流程的起始点
- 不可删除、复制或展开
- 无需配置

### 结束节点 (end)
- 流程的终止点
- 只能添加到分支的最后一个节点
- 可配置返回结果的 JSON Schema

### 流程节点 (process)
- 定义流程中的主要处理步骤
- 可折叠
- 支持配置：
  - 节点名称
  - 节点描述

### 抄送节点 (cc)
- 将流程信息抄送给相关人员
- 可折叠
- 支持配置：
  - 节点名称
  - 抄送人员（多个人员用逗号分隔）
  - 抄送消息

## 开发

\`\`\`bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 类型检查
pnpm ts-check
\`\`\`

## License

MIT
