/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { type FlowNodeEntity, useClientContext } from '@flowgram.ai/fixed-layout-editor';
import { IconPlus } from '@douyinfe/semi-icons';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const Container = styled.div<{ isVertical: boolean; activated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.activated ? '#e6f7ff' : 'transparent')};
  border: 1px dashed
    ${(props) => (props.activated ? '#1890ff' : 'rgba(0, 0, 0, 0.15)')};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  ${(props) =>
    props.isVertical
      ? `
      width: 100%;
      height: ${props.activated ? '40px' : '30px'};
      margin-bottom: 8px;
    `
      : `
      width: ${props.activated ? '60px' : '40px'};
      height: 100%;
      margin-right: 8px;
    `}

  &:hover {
    background-color: #e6f7ff;
    border-color: #1890ff;
  }

  svg {
    font-size: 16px;
    color: ${(props) => (props.activated ? '#1890ff' : 'rgba(0, 0, 0, 0.45)')};
  }
`;

interface PropsType {
  activated?: boolean;
  node: FlowNodeEntity;
}

export default function BranchAdder(props: PropsType) {
  const { activated, node } = props;
  const nodeData = node.firstChild?.renderData;
  const ctx = useClientContext();
  const { operation, playground } = ctx;
  const { isVertical } = node;

  function addBranch() {
    // 只允许在条件节点下添加分支
    if (node.flowNodeType !== 'condition') return;

    const currentBranchCount = node.blocks?.length || 0;

    // 直接创建分支数据
    const branchData = {
      id: `branch_${nanoid(5)}`,
      type: 'conditionBranch',
      data: {
        title: `分支 ${currentBranchCount + 1}`,
        inputs: {
          type: 'object',
          required: ['condition'],
          properties: {
            condition: {
              type: 'string',
              title: '条件表达式',
              default: '',
            },
          },
        },
        inputsValues: {
          condition: { type: 'constant', content: '' },
        },
      },
    };

    // 不指定 index，新分支会自动添加到最后
    const block = operation.addBlock(node, branchData);

    setTimeout(() => {
      playground.scrollToView({
        bounds: block.bounds,
        scrollToCenter: true,
      });
    }, 10);
  }

  if (playground.config.readonly) return null;
  // 使用 flowNodeType 而不是 getData().type
  if (node.flowNodeType !== 'condition') return null;

  return (
    <Container
      isVertical={isVertical}
      activated={activated ?? false}
      onClick={addBranch}
      onMouseEnter={() => nodeData?.toggleMouseEnter?.()}
      onMouseLeave={() => nodeData?.toggleMouseLeave?.()}
    >
      <IconPlus />
    </Container>
  );
}
