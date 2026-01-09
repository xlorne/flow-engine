/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useNodeRender } from '@flowgram.ai/fixed-layout-editor';

// 条件节点的父容器不渲染任何内容
export const ConditionNodeRender = () => {
  const nodeRender = useNodeRender();

  // 不渲染任何内容，只提供子节点的容器
  return <div style={{ display: 'contents' }}>{nodeRender.children?.map((child) => child.render?.())}</div>;
};

// 条件分支节点的标签显示
export const ConditionBranchLabel = () => {
  const nodeRender = useNodeRender();
  const condition = nodeRender.node.data?.inputsValues?.condition?.content || '';
  const title = nodeRender.node.data?.title || '分支';

  // 如果有条件表达式，显示条件表达式；否则显示标题
  const displayText = condition || title;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
      }}
    >
      <div style={{ flex: 1, fontSize: '14px', fontWeight: 500, color: '#333' }}>
        {String(displayText)}
      </div>
    </div>
  );
};
