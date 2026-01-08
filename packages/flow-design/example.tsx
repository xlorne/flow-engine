/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

/**
 * FlowEditor 使用示例
 *
 * 这是一个简单的示例，展示如何使用 @flow-engine/flow-design 包中的 FlowEditor 组件
 */

import { FlowEditor } from '@flow-engine/flow-design';

// 示例 1: 基础用法
function BasicExample() {
  return <FlowEditor />;
}

// 示例 2: 使用自定义数据
function CustomDataExample() {
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
                data: {
                  title: '提交审批',
                  description: '提交给主管审批',
                },
                blocks: [],
              },
              {
                id: 'cc_01',
                type: 'cc',
                data: {
                  title: '抄送人事',
                  ccUsers: 'hr@example.com',
                  message: '新员工入职流程已提交',
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
                      status: { type: 'string' },
                      result: { type: 'string' },
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

  return <FlowEditor data={customData} />;
}

export { BasicExample, CustomDataExample };
