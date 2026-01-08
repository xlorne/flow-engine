/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { nanoid } from 'nanoid';
import { FlowNodeRegistry } from '../../typings';
import { iconCCBase64 } from '../../assets/icons';
import { formMeta } from './form-meta';

export const CCNodeRegistry: FlowNodeRegistry = {
  type: 'cc',
  meta: {
    collapsable: true,
  },
  info: {
    icon: iconCCBase64,
    description: '抄送节点，用于将流程信息抄送给相关人员',
  },
  formMeta,
  onAdd(ctx, from) {
    return {
      id: `cc_${nanoid()}`,
      type: 'cc',
      data: {
        title: '抄送节点',
        ccUsers: '',
        message: '',
      },
    };
  },
};
