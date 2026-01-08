/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { nanoid } from 'nanoid';
import { FlowNodeRegistry } from '../../typings';
import { iconEndBase64 } from '../../assets/icons';
import { formMeta } from './form-meta';

export const EndNodeRegistry: FlowNodeRegistry = {
  type: 'end',
  meta: {
    isNodeEnd: true,
    selectable: false,
    copyDisable: true,
    expandable: false,
  },
  info: {
    icon: iconEndBase64,
    description: '流程结束节点，用于返回流程运行后的结果信息',
  },
  formMeta,
  canAdd(ctx, from) {
    if (!from.isLast) return false;
    return true;
  },
  canDelete(ctx, node) {
    return node.parent !== ctx.document.root;
  },
  onAdd(ctx, from) {
    return {
      id: `end_${nanoid()}`,
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
    };
  },
};
