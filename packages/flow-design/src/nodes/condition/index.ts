/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { nanoid } from 'nanoid';
import { FlowNodeSplitType } from '@flowgram.ai/fixed-layout-editor';
import { FlowNodeRegistry } from '../../typings';
import { iconConditionBase64 } from '../../assets/icons';
import { formMeta } from './form-meta';

export const ConditionNodeRegistry: FlowNodeRegistry = {
  extend: FlowNodeSplitType.DYNAMIC_SPLIT,
  type: 'condition',
  info: {
    icon: iconConditionBase64,
    description: '条件分支节点，根据配置的条件执行不同的分支流程',
  },
  meta: {
    collapsable: true,
    // 条件节点样式：橙色背景，白色字体
    style: {
      backgroundColor: '#FA8C16',
      borderColor: '#FA8C16',
      color: '#fff',
    },
  },
  formMeta,
  onAdd() {
    return {
      id: `condition_${nanoid(5)}`,
      type: 'condition',
      data: {
        title: '条件分支',
      },
      blocks: [
        {
          id: nanoid(5),
          type: 'conditionBranch',
          data: {
            title: '分支 1',
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
          blocks: [],
        },
        {
          id: nanoid(5),
          type: 'conditionBranch',
          data: {
            title: '分支 2',
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
          blocks: [],
        },
      ],
    };
  },
};
