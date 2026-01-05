# Flow Engine

一个基于 React + TypeScript 的可视化流程设计器，提供固定布局和自由布局两种流程设计模式。

## 项目简介

Flow Engine 是一个功能完整的流程引擎设计工具，采用 Monorepo 架构（PNPM Workspace），提供了直观的可视化界面来设计和管理业务流程。

**核心特性**：
- 支持固定布局流程设计（适用于标准流程图）
- 支持自由布局流程设计（适用于复杂的自由绘图场景）
- 表单字段设计
- 全局参数配置
- 基于 [@flowgram.ai](https://www.npmjs.com/org/flowgramai) 系列组件

适用于审批流程、业务流程、数据流程等各种场景的可视化设计。

## 核心功能

### 1. 双模式流程设计

#### 固定布局流程设计器 (@flow-engine/fixed-flow-design)
- 基于 [@flowgram.ai/fixed-layout-editor](https://www.npmjs.com/package/@flowgram.ai/fixed-layout-editor)
- 自动布局，节点整齐排列
- 支持多种节点类型（开始、结束、条件、循环、Agent、LLM 等）
- 适合标准的业务流程图
- 小地图导航、缩放和适配视图
- 支持垂直/水平布局切换

#### 自由布局流程设计器 (@flow-engine/free-flow-design)
- 基于 [@flowgram.ai/free-layout-editor](https://www.npmjs.com/package/@flowgram.ai/free-layout-editor)
- 完全自由的节点位置控制
- 支持对齐、吸附、分组等高级功能
- 适合复杂的自由绘图场景
- 包含运行时支持 (@flowgram.ai/runtime-js)

### 2. 流程列表管理
- 流程列表展示，支持查看流程名称、状态等信息
- 新增流程入口
- 流程编辑和删除操作
- 状态标签展示

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
- **PNPM** - 包管理器（Monorepo 架构）

### 构建工具
- **Rsbuild** - 基于 Rspack 的现代构建工具
- **Rslib** - 库构建工具

### UI 组件库
- **Ant Design 6** - 主应用 UI 组件库
- **Semi Design** - 流程设计器 UI 组件库

### 流程编辑器

#### 固定布局设计器依赖
- **@flowgram.ai/fixed-layout-editor** (1.0.6) - 固定布局编辑器核心
- **@flowgram.ai/fixed-semi-materials** (1.0.6) - Semi Design 材料库
- **@flowgram.ai/form-materials** (1.0.6) - 表单材料库
- **@flowgram.ai/group-plugin** (1.0.6) - 分组插件
- **@flowgram.ai/minimap-plugin** (1.0.6) - 小地图插件
- **@flowgram.ai/panel-manager-plugin** (1.0.6) - 面板管理插件
- **@flowgram.ai/export-plugin** (1.0.6) - 导出插件

#### 自由布局设计器依赖
- **@flowgram.ai/free-layout-editor** (1.0.6) - 自由布局编辑器核心
- **@flowgram.ai/free-snap-plugin** (1.0.6) - 吸附插件
- **@flowgram.ai/free-lines-plugin** (1.0.6) - 连线插件
- **@flowgram.ai/free-node-panel-plugin** (1.0.6) - 节点面板插件
- **@flowgram.ai/free-container-plugin** (1.0.6) - 容器插件
- **@flowgram.ai/free-group-plugin** (1.0.6) - 分组插件
- **@flowgram.ai/free-stack-plugin** (1.0.6) - 堆叠插件
- **@flowgram.ai/runtime-js** (1.0.6) - 运行时支持
- **@flowgram.ai/runtime-interface** (1.0.6) - 运行时接口

### 内部包
- **@flow-engine/utils** - 工具函数库

## 项目结构

```
flow-engine/
├── apps/
│   └── ui-design/              # 主应用（集成两种设计器）
│       ├── src/
│       │   ├── components/     # 通用组件
│       │   │   ├── design.tsx        # 设计器集成组件
│       │   │   ├── flow.tsx          # 流程设计组件
│       │   │   ├── form.tsx          # 表单设计组件
│       │   │   ├── setting.tsx       # 参数设置组件
│       │   │   └── workflow.tsx      # 工作流容器组件
│       │   ├── config/        # 配置
│       │   │   └── routes.tsx        # 路由配置
│       │   ├── pages/         # 页面
│       │   │   ├── welcome/          # 流程列表页
│       │   │   ├── flow-design/      # 流程设计页
│       │   │   └── test/             # 测试页
│       │   └── index.css     # 全局样式
│       ├── package.json
│       └── rsbuild.config.ts
│
├── packages/
│   ├── fixed-flow-design/     # 固定布局流程设计器包
│   │   ├── src/
│   │   │   ├── editor.tsx            # 编辑器组件
│   │   │   ├── nodes/                # 节点定义
│   │   │   ├── components/           # 编辑器组件
│   │   │   ├── hooks/                # 自定义 Hooks
│   │   │   ├── plugins/              # 插件系统
│   │   │   ├── form-components/      # 表单组件
│   │   │   ├── services/             # 服务层
│   │   │   └── initial-data.ts       # 初始数据
│   │   ├── package.json
│   │   └── rslib.config.ts
│   │
│   ├── free-flow-design/      # 自由布局流程设计器包
│   │   ├── src/
│   │   │   ├── editor.tsx            # 编辑器组件
│   │   │   ├── nodes/                # 节点定义
│   │   │   ├── components/           # 编辑器组件
│   │   │   ├── hooks/                # 自定义 Hooks
│   │   │   ├── plugins/              # 插件系统
│   │   │   ├── utils/                # 工具函数
│   │   │   ├── styles/               # 样式文件
│   │   │   └── initial-data.ts       # 初始数据
│   │   ├── package.json
│   │   └── rslib.config.ts
│   │
│   └── utils/                 # 工具函数包
│       ├── src/
│       │   ├── Button.tsx            # 按钮组件
│       │   └── index.tsx             # 导出文件
│       └── package.json
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
# 启动主应用开发服务器
pnpm dev:ui-design
```

启动后自动打开浏览器，访问地址：`http://localhost:3000`

### 构建生产版本

```bash
# 构建固定布局流程设计器包
pnpm build:fiexd-flow-design

# 构建自由布局流程设计器包
pnpm build:free-flow-design

# 构建主应用
cd apps/ui-design
pnpm build
```

### 独立运行设计器

```bash
# 运行固定布局设计器（独立开发）
cd packages/fixed-flow-design
pnpm dev

# 运行自由布局设计器（独立开发）
cd packages/free-flow-design
pnpm dev
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

在"流程设计"标签页中，可以选择使用固定布局或自由布局设计器：

**固定布局模式**：
- 从左侧面板拖拽节点到画布
- 自动布局，节点整齐排列
- 配置节点属性（点击节点后在右侧面板编辑）
- 使用工具栏进行缩放、适配、保存等操作
- 支持垂直/水平布局切换

**自由布局模式**：
- 完全自由地拖拽节点到任意位置
- 支持节点对齐和吸附功能
- 支持节点分组和容器
- 更灵活的连线方式
- 包含运行时支持，可直接执行流程

### 5. 保存和管理

- 点击右上角"保存"按钮保存当前设计
- 点击"重置"按钮恢复默认配置
- 点击"删除"按钮删除当前流程（需要确认）

## 设计亮点

### 1. 双模式设计架构
- **固定布局**：自动布局，适合标准业务流程
- **自由布局**：完全自由，适合复杂流程设计
- 两个设计器独立封装，可按需选择或同时使用
- 统一的接口设计，便于切换和集成

### 2. Monorepo 架构
- 清晰的包结构分离
- 统一的依赖管理
- 便于代码复用和维护

### 3. 组件化设计
- 模块化的组件结构，便于维护和扩展
- 清晰的职责划分（容器组件、功能组件、基础组件）
- 设计器作为独立的包，可在其他项目中复用

### 4. 统一的操作入口
- 所有保存、重置、删除操作统一放在右上角
- 无论在哪个标签页都能快速操作

### 5. 完善的表单验证
- 必填字段验证
- 字段类型约束
- 友好的错误提示

### 6. 响应式布局
- 使用 Flex 布局适应不同屏幕尺寸
- Tabs 内容区域支持滚动

### 7. 样式兼容处理
- 为流程编辑器设置固定高度，确保正确渲染
- 移除 Tabs 默认的底部边距，优化布局

## 开发说明

### 添加新的页面

1. 在 `apps/ui-design/src/pages/` 下创建新页面组件
2. 在 `apps/ui-design/src/config/routes.tsx` 中添加路由配置

### 添加新的表单字段类型

修改 `apps/ui-design/src/components/form.tsx` 中的字段类型配置。

### 扩展固定布局设计器节点类型

在 `packages/fixed-flow-design/src/nodes/` 目录下添加新的节点定义，然后在编辑器中注册使用。

### 扩展自由布局设计器节点类型

在 `packages/free-flow-design/src/nodes/` 目录下添加新的节点定义，然后在编辑器中注册使用。

### 自定义样式

全局样式文件：`apps/ui-design/src/index.css`

### 在其他项目中使用设计器

```bash
# 安装固定布局设计器
npm install @flow-engine/fixed-flow-design

# 安装自由布局设计器
npm install @flow-engine/free-flow-design
```

```tsx
// 使用固定布局设计器
import { FixedFlowEditor } from '@flow-engine/fixed-flow-design';

function App() {
  return <FixedFlowEditor />;
}

// 使用自由布局设计器
import { FreeFlowEditor } from '@flow-engine/free-flow-design';

function App() {
  return <FreeFlowEditor />;
}
```

## 常见问题

### Q: 如何选择固定布局还是自由布局设计器？

A:
- **固定布局**：适合标准的业务流程图，自动布局，节点整齐排列
- **自由布局**：适合需要精确控制节点位置的复杂流程，支持对齐、吸附、分组等高级功能

两个设计器都集成在主应用中，可以根据需要切换使用。

### Q: 流程设计器无法正常显示？

A: 确保为编辑器容器设置了明确的高度。参考 `apps/ui-design/src/components/flow.tsx` 中的实现：

```tsx
<div style={{ height: 'calc(100vh - 100px)' }}>
  <Editor />
</div>
```

### Q: Tabs 内容区域高度不够？

A: 检查父容器的高度设置，确保使用 `Flex` 布局并设置 `flex: 1`。

### Q: 如何修改主题颜色？

A: 在"参数设置"标签页的"外观设置"卡片中，使用颜色选择器修改主题颜色。

### Q: 如何在其他项目中使用设计器？

A: 两种设计器都已打包为独立的 npm 包，可以单独安装使用：

```bash
npm install @flow-engine/fixed-flow-design
npm install @flow-engine/free-flow-design
```

### Q: 构建时出现依赖错误？

A: 确保在项目根目录运行 `pnpm install`，这样可以正确安装所有工作空间的依赖。

## 许可证

- 主应用：ISC
- 固定布局设计器包：MIT
- 自由布局设计器包：MIT
- 工具函数包：ISC

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题或建议，请通过 Issue 反馈。
