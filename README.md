# Flow Engine

一个基于 React + TypeScript 的可视化流程设计器，提供流程设计、表单设计和参数配置功能。

## 项目简介

Flow Engine 是一个功能完整的流程引擎设计工具，采用 Monorepo 架构，提供了直观的可视化界面来设计和管理业务流程。适用于审批流程、业务流程、数据流程等各种场景的可视化设计。

## 核心功能

### 1. 流程列表管理
- 流程列表展示，支持查看流程名称、状态等信息
- 新增流程入口
- 流程编辑和删除操作
- 状态标签展示

### 2. 可视化流程设计
- 基于 [@flowgram.ai/fixed-layout-editor](https://www.npmjs.com/package/@flowgram.ai/fixed-layout-editor) 的流程编辑器
- 支持多种节点类型（开始、结束、条件、循环、Agent、LLM 等）
- 节点拖拽、连线、配置
- 小地图导航
- 缩放和适配视图
- 支持垂直/水平布局切换

### 3. 表单字段设计
- 表单字段管理（字段名称、类型配置）
- 支持多种字段类型（Long、String、Integer 等）
- 字段添加、编辑、删除操作
- 表格化展示字段列表

### 4. 全局参数配置
- **基本信息配置**
  - 流程名称、描述
  - 版本号、分类
  - 启用状态控制

- **执行配置**
  - 超时时间设置
  - 重试策略（次数、间隔）
  - 并行执行控制
  - 最大并行节点数

- **通知配置**
  - 流程开始/完成/失败通知
  - 邮件通知开关
  - Webhook 回调配置

- **外观设置**
  - 主题颜色自定义
  - 网格大小调节
  - 网格显示/隐藏
  - 小地图显示/隐藏

## 技术栈

### 核心框架
- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **React Router 7** - 路由管理

### 构建工具
- **Rsbuild** - 基于 Rspack 的现代构建工具
- **PNPM** - 包管理器（支持 Monorepo）

### UI 组件库
- **Ant Design 6** - 企业级 UI 组件库
  - Tabs、Form、Table、Card 等组件
  - ColorPicker、Switch、InputNumber 等表单组件
  - Icons 图标库

### 流程编辑器
- **@flowgram.ai/fixed-layout-editor** - 流程编辑器核心
- **@flowgram.ai/fixed-semi-materials** - Semi Design 材料库
- **@flowgram.ai/form-materials** - 表单材料库

### 其他依赖
- **@flow-engine/utils** - 内部工具库

## 项目结构

```
flow-engine/
├── apps/
│   └── ui-design/              # 主应用
│       ├── src/
│       │   ├── components/     # 组件
│       │   │   ├── flow.tsx           # 流程设计组件
│       │   │   ├── form.tsx           # 表单设计组件
│       │   │   ├── setting.tsx        # 参数设置组件
│       │   │   └── workflow.tsx       # 工作流容器组件
│       │   ├── config/        # 配置
│       │   │   └── routes.tsx         # 路由配置
│       │   ├── pages/         # 页面
│       │   │   ├── welcome/           # 流程列表页
│       │   │   ├── flow-design/       # 流程设计页
│       │   │   └── test/              # 测试页
│       │   └── index.css      # 全局样式
│       ├── public/            # 静态资源
│       └── package.json
│
├── packages/
│   ├── flow-design/           # 流程设计器核心包
│   │   ├── src/
│   │   │   ├── editor.tsx            # 编辑器组件
│   │   │   ├── nodes/                # 节点定义
│   │   │   ├── components/           # 编辑器组件
│   │   │   ├── hooks/                # 自定义 Hooks
│   │   │   ├── plugins/              # 插件系统
│   │   │   └── initial-data.ts       # 初始数据
│   │   └── package.json
│   │
│   └── utils/                 # 工具函数包
│       └── src/
│
├── package.json               # 根 package.json
├── pnpm-workspace.yaml        # PNPM 工作空间配置
└── README.md                  # 项目文档
```

## 快速开始

### 环境要求

- Node.js >= 18
- PNPM >= 9

### 安装依赖

```bash
# 安装 pnpm（如果尚未安装）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev:ui-design
```

启动后自动打开浏览器，访问地址：`http://localhost:3000`

### 构建生产版本

```bash
# 构建流程设计器包
pnpm build:flow-design

# 构建主应用
cd apps/ui-design
pnpm build
```

### 页面路由

- `/` - 流程列表页（首页）
- `/design` - 流程设计页（包含三个 Tab：参数设置、表单设计、流程设计）
- `/test` - 测试页（独立的流程编辑器）

## 主要功能演示

### 1. 创建流程

1. 访问首页，点击"新增流程"按钮
2. 进入流程设计页面

### 2. 参数设置

在"参数设置"标签页中：
- 配置流程基本信息（名称、描述、版本等）
- 设置执行参数（超时、重试策略）
- 配置通知方式（邮件、Webhook）
- 自定义外观（主题颜色、网格等）

### 3. 表单设计

在"表单设计"标签页中：
- 查看和管理表单字段
- 点击"添加字段"按钮新增字段
- 编辑或删除现有字段

### 4. 流程设计

在"流程设计"标签页中：
- 从左侧面板拖拽节点到画布
- 连接节点建立流程关系
- 配置节点属性（点击节点后在右侧面板编辑）
- 使用工具栏进行缩放、适配、保存等操作

### 5. 保存和管理

- 点击右上角"保存"按钮保存当前设计
- 点击"重置"按钮恢复默认配置
- 点击"删除"按钮删除当前流程（需要确认）

## 设计亮点

### 1. 组件化设计
- 模块化的组件结构，便于维护和扩展
- 清晰的职责划分（容器组件、功能组件、基础组件）

### 2. 统一的操作入口
- 所有保存、重置、删除操作统一放在右上角
- 无论在哪个标签页都能快速操作

### 3. 完善的表单验证
- 必填字段验证
- 字段类型约束
- 友好的错误提示

### 4. 响应式布局
- 使用 Flex 布局适应不同屏幕尺寸
- Tabs 内容区域支持滚动

### 5. 样式兼容处理
- 为流程编辑器设置固定高度，确保正确渲染
- 移除 Tabs 默认的底部边距，优化布局

## 开发说明

### 添加新的页面

1. 在 `apps/ui-design/src/pages/` 下创建新页面组件
2. 在 `apps/ui-design/src/config/routes.tsx` 中添加路由配置

### 添加新的表单字段类型

修改 `apps/ui-design/src/components/form.tsx` 中的字段类型配置。

### 扩展节点类型

在 `packages/flow-design/src/nodes/` 目录下添加新的节点定义。

### 自定义样式

全局样式文件：`apps/ui-design/src/index.css`

## 常见问题

### Q: 流程设计器无法正常显示？

A: 确保为编辑器容器设置了明确的高度。参考 `flow.tsx` 中的实现：

```tsx
<div style={{ height: 'calc(100vh - 100px)' }}>
  <Editor />
</div>
```

### Q: Tabs 内容区域高度不够？

A: 检查父容器的高度设置，确保使用 `Flex` 布局并设置 `flex: 1`。

### Q: 如何修改主题颜色？

A: 在"参数设置"标签页的"外观设置"卡片中，使用颜色选择器修改主题颜色。

## 许可证

ISC

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题或建议，请通过 Issue 反馈。
