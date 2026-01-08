/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { FlowDocumentJSON } from './typings';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: 'start_01',
      type: 'start',
      data: {
        title: '开始',
      },
      blocks: [
        {
          id: 'branch_01',
          blocks: [
            {
              id: 'process_01',
              type: 'process',
              data: {
                title: '流程节点',
                description: '请填写流程描述',
              },
              blocks: [],
            },
            {
              id: 'end_01',
              type: 'end',
              data: {
                title: '结束',
                outputs: {
                  type: 'object',
                  properties: {
                    result: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
