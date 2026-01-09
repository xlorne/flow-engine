/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FormMeta } from '@flowgram.ai/fixed-layout-editor';
import { FormHeader, FormContent } from '../../form-components';

export const renderForm = () => (
  <>
    <FormHeader />
    <FormContent>
      <div style={{ padding: '16px', color: '#888', fontSize: '12px' }}>
        条件分支节点可以添加多个分支，每个分支可以配置独立的条件表达式
      </div>
    </FormContent>
  </>
);

export const formMeta: FormMeta = {
  render: renderForm,
};
