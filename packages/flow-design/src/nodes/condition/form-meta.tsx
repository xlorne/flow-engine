/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FormMeta, useClientContext } from '@flowgram.ai/fixed-layout-editor';
import { FormHeader, FormContent } from '../../form-components';
import { nanoid } from 'nanoid';
import { useNodeRenderContext } from '../../hooks';

export const renderForm = () => {

  const ctx = useClientContext();
  const { operation } = ctx;
  const { node } = useNodeRenderContext();
  const currentBranchCount = node.blocks?.length || 0;

  const handlerAdd = () => {

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
  }

  return (
    <>
      <FormHeader />
      <FormContent>
        <div style={{ padding: '16px', color: '#888', fontSize: '12px' }}>
          条件分支节点可以添加多个分支，每个分支可以配置独立的条件表达式
        </div>
        <button onClick={handlerAdd}>add</button>
      </FormContent>
    </>
  );
}

export const formMeta: FormMeta = {
  render: renderForm,
};
