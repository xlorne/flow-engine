# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flow Engine is a React-based monorepo providing visual flow designers built with TypeScript and PNPM workspaces. The project includes:

- **packages/fixed-flow-design** - Auto-layout flow designer with standard node types
- **packages/free-flow-design** - Free-positioning flow designer with snap/alignment
- **packages/flow-design** - Simplified flow designer with 4 node types (start, end, process, cc)
- **apps/ui-design** - Demo application showcasing the flow designers
- **packages/utils** - Shared utilities and components

Core dependencies: `@flowgram.ai/fixed-layout-editor` and `@flowgram.ai/free-layout-editor`

## Package Manager

This project uses **pnpm** (not npm or yarn). Always use `pnpm` commands for package management.

## Common Commands

### Root-level commands (run from repository root)
```bash
pnpm build:fiexd-flow-design    # Build fixed-flow-design package
pnpm build:free-flow-design     # Build free-flow-design package
pnpm build:flow-design          # Build flow-design package
pnpm dev:ui-design              # Start demo app in dev mode
```

### Package-level commands (run from package directory)
```bash
pnpm build        # Production build using Rslib
pnpm dev          # Development server using Rsbuild
pnpm lint         # ESLint checking
pnpm lint:fix     # ESLint auto-fix
pnpm ts-check     # TypeScript type checking
pnpm clean        # Clean dist folder
```

### Install dependencies
```bash
pnpm install      # Install all workspace dependencies
```

## Architecture

### Monorepo Structure

```
flow-engine/
├── apps/
│   └── ui-design/              # Demo app (Ant Design)
├── packages/
│   ├── fixed-flow-design/      # Fixed-layout designer (Semi Design)
│   ├── free-flow-design/       # Free-layout designer (Semi Design)
│   ├── flow-design/            # Simplified designer (4 node types)
│   └── utils/                  # Shared utilities
├── pnpm-workspace.yaml         # Workspace configuration
└── package.json                # Root package with build scripts
```

### Flow Designer System

The flow designers are built on the **Materials System** - a pattern for customizing UI components through registration.

#### Editor Structure

All editors follow this pattern:

```tsx
import { FixedLayoutEditorProvider, EditorRenderer } from '@flowgram.ai/fixed-layout-editor';
import { FlowTools } from './components/tools';

export const FlowEditor: React.FC = ({ data }) => {
  const editorProps = useFlowEditorProps(data, nodeRegistries);

  return (
    <FixedLayoutEditorProvider {...editorProps}>
      <EditorRenderer />
      <FlowTools />  {/* Absolute positioned at bottom */}
    </FixedLayoutEditorProvider>
  );
};
```

#### Materials Customization

Customize rendering through the `materials` config in editor props:

```typescript
materials: {
  components: {
    ...defaultFixedSemiMaterials,  // Base Semi Design components
    [FlowRendererKey.ADDER]: NodeAdder,         // Customize add button
    [FlowRendererKey.BRANCH_ADDER]: BranchAdder, // Customize branch add
    renderDefaultNode: BaseNode,                 // Customize node rendering
  },
}
```

Common `FlowRendererKey` values: `ADDER`, `BRANCH_ADDER`, `DRAG_NODE`, `SLOT_ADDER`, `SLOT_LABEL`

#### Node Registry Pattern

Nodes are defined using registry objects:

```typescript
import { FlowNodeRegistry } from '@/typings';

export const ProcessNodeRegistry: FlowNodeRegistry = {
  type: 'process',
  meta: {
    collapsable: true,      // Can collapse/expand
    deleteDisable: false,   // Can delete
    addDisable: false,      // Can add after this node
  },
  info: {
    icon: iconProcessBase64,  // SVG string
    description: 'Process node description',
  },
  formMeta,  // Form configuration for node properties
  onAdd(ctx, from) {
    // Return initial node data when added
    return {
      id: `process_${nanoid()}`,
      type: 'process',
      data: { title: '流程节点', description: '' },
    };
  },
};
```

#### Node Metadata (meta field)

- `deleteDisable: true` - Node cannot be deleted (use for start nodes)
- `addDisable: true` - Cannot add nodes after this node
- `copyDisable: true` - Cannot copy this node
- `selectable: false` - Cannot be selected
- `expandable: false` - Cannot expand/collapse
- `sidebarDisable: true` - Don't show configuration panel
- `defaultExpanded: true` - Start in expanded state
- `collapsable: true` - Can collapse/expand

#### BaseNode Component

Custom node rendering typically looks like:

```tsx
import { useNodeRender } from '@flowgram.ai/fixed-layout-editor';

export const BaseNode = ({ node }: { node: FlowNodeEntity }) => {
  const nodeRender = useNodeRender();
  const form = nodeRender.form;
  const nodeRegistry = node.getNodeRegistry();

  const icon = nodeRegistry.info.icon;
  const title = form?.getValueIn('title') || nodeRegistry.type;
  const description = form?.getValueIn('description');

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <div>{String(title)}</div>
      {description && <div>{String(description)}</div>}
    </div>
  );
};
```

#### Data Structure

Flow data uses `FlowDocumentJSON` with nested blocks:

```typescript
{
  nodes: [{
    id: 'start_01',
    type: 'start',
    data: { title: '开始' },
    blocks: [{
      id: 'branch_01',
      blocks: [
        { id: 'process_01', type: 'process', data: {...}, blocks: [] },
        { id: 'end_01', type: 'end', data: {...} },
      ],
    }],
  }],
}
```

### Key Files for Reference

- `packages/fixed-flow-design/src/hooks/use-editor-props.ts` - Full-featured editor config (plugins, shortcuts, etc.)
- `packages/flow-design/src/hooks/use-editor-props.ts` - Simplified editor config
- `packages/*/src/nodes/*/index.ts` - Node registry examples
- `packages/*/src/components/base-node/index.tsx` - Custom node rendering patterns
- `packages/*/src/components/sidebar/form-panel.tsx` - Configuration panel setup

## Important Conventions

### Package Dependencies

Use `workspace:*` for local package references in `package.json`:

```json
{
  "dependencies": {
    "@flow-engine/utils": "workspace:*"
  }
}
```

### Path Aliases

All packages use `@/` → `src/` path mapping configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Shared Configurations

- ESLint: `@flowgram.ai/eslint-config`
- TypeScript: `@flowgram.ai/ts-config`
- Build: Rslib for libraries, Rsbuild for apps

### Styling

- Flow designers use **Semi Design** components (`@douyinfe/semi-ui`)
- Demo app uses **Ant Design** (`antd`)
- Custom styles use **styled-components**

## Node Types

### Start Node
- Entry point for flow
- Non-deletable: `meta.deleteDisable: true`
- No configuration needed

### End Node
- Flow termination point
- Only allowed at end of branches
- Configurable JSON Schema outputs

### Process Node
- Main processing steps
- Configurable: title, description

### CC Node (抄送节点)
- Notification/carbon copy node
- Configurable: recipients (comma-separated), message

## Plugin System

The fixed-flow-design uses plugins for extensibility:

```typescript
plugins: () => [
  createMinimapPlugin({...}),        // Mini-map navigation
  createDownloadPlugin({}),          // Export functionality
  createGroupPlugin({...}),          // Node grouping
  createClipboardPlugin(),           // Copy/paste
  createVariablePanelPlugin({}),     // Variable management
  createPanelManagerPlugin({         // Sidebar panels
    factories: [nodeFormPanelFactory],
  }),
]
```
