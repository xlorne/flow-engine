/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components';
import {
  FlowNodeEntity,
  FlowNodeRegistry,
  useClientContext,
} from '@flowgram.ai/fixed-layout-editor';

import { FlowNodeRegistries } from '../../nodes';
import { IconProcess, IconCC } from '../../assets/icons';

const NodeWrap = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e6f7ff;
    color: #1890ff;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const NodeLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const NodesWrap = styled.div`
  padding: 8px;
  min-width: 160px;
`;

export function NodeList(props: { onSelect: (meta: any) => void; from: FlowNodeEntity }) {
  const context = useClientContext();

  // 过滤出可添加的节点类型
  // 1. 排除 start 节点（只能有一个开始节点）
  // 2. 排除 addDisable 为 true 的节点
  const availableRegistries = FlowNodeRegistries.filter((registry) => {
    // 明确排除 start 类型
    if (String(registry.type) === 'start') {
      return false;
    }
    // 排除标记为 addDisable 的节点
    if (registry.meta?.addDisable) {
      return false;
    }
    return true;
  });

  const handleClick = (registry: FlowNodeRegistry) => {
    const addProps = registry.onAdd?.(context, props.from);
    props.onSelect?.(addProps || { type: registry.type });
  };

  const getIcon = (type: string | number) => {
    const typeStr = String(type);
    switch (typeStr) {
      case 'process':
        return <IconProcess style={{ width: 24, height: 24 }} />;
      case 'cc':
        return <IconCC style={{ width: 24, height: 24 }} />;
      case 'end':
        return <div style={{ width: 24, height: 24 }}>🔴</div>;
      case 'condition':
        return <div style={{ width: 24, height: 24 }}>🔀</div>;
      default:
        return <div style={{ width: 24, height: 24 }}>📦</div>;
    }
  };

  const getLabel = (type: string | number) => {
    const typeStr = String(type);
    switch (typeStr) {
      case 'process':
        return '流程节点';
      case 'cc':
        return '抄送节点';
      case 'end':
        return '结束节点';
      case 'condition':
        return '条件分支';
      default:
        return typeStr;
    }
  };

  return (
    <NodesWrap>
      {availableRegistries.map((registry) => (
        <NodeWrap
          key={registry.type}
          onClick={() => handleClick(registry)}
          style={
            !(registry.canAdd?.(context, props.from) ?? true)
              ? { opacity: 0.3, cursor: 'not-allowed' }
              : {}
          }
        >
          {getIcon(registry.type)}
          <NodeLabel>{getLabel(registry.type)}</NodeLabel>
        </NodeWrap>
      ))}
    </NodesWrap>
  );
}
