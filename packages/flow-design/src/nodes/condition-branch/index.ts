/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FlowNodeRegistry } from '../../typings';
import { iconConditionBranchBase64 } from '../../assets/icons';
import { formMeta } from './form-meta';

export const ConditionBranchNodeRegistry: FlowNodeRegistry = {
  type: 'conditionBranch',
  extend: 'block',
  meta: {
    copyDisable: true,
    addDisable: true,
    // 分支节点样式：白色背景，虚线边框
    style: {
      border: '1px dashed rgba(0, 0, 0, 0.25)',
    },
  },
  info: {
    icon: iconConditionBranchBase64,
    description: '条件分支，用于配置单个分支的条件表达式',
  },
  canDelete: (ctx, node) => node.parent!.blocks.length >= 2,
  formMeta,
};
