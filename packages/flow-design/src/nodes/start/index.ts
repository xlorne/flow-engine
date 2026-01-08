/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FlowNodeRegistry } from '../../typings';
import { iconStartBase64 } from '../../assets/icons';
import { formMeta } from './form-meta';

export const StartNodeRegistry: FlowNodeRegistry = {
  type: 'start',
  meta: {
    isStart: true,
    deleteDisable: true,
    selectable: false,
    copyDisable: true,
    expandable: false,
    addDisable: true,
  },
  info: {
    icon: iconStartBase64,
    description: '流程开始节点，用于设置发起流程所需的信息',
  },
  formMeta,
};
