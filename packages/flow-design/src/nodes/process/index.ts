/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { nanoid } from 'nanoid';
import { FlowNodeRegistry } from '../../typings';
import { iconProcessBase64 } from '../../assets/icons';
import { formMeta } from './form-meta';

export const ProcessNodeRegistry: FlowNodeRegistry = {
  type: 'process',
  meta: {
    collapsable: true,
  },
  info: {
    icon: iconProcessBase64,
    description: '流程节点，用于定义流程中的主要处理步骤',
  },
  formMeta,
  onAdd(ctx, from) {
    return {
      id: `process_${nanoid()}`,
      type: 'process',
      data: {
        title: '流程节点',
        description: '',
      },
    };
  },
};
