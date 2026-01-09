/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FormMeta, ValidateTrigger, FeedbackLevel } from '@flowgram.ai/fixed-layout-editor';
import { FormHeader, FormContent, FormInputs } from '../../form-components';
import { ConditionBranchLabel } from '../../components/condition-node-render';

export const renderForm = () => (
  <>
    <FormHeader />
    <FormContent>
      <FormInputs />
      <div style={{ padding: '16px', color: '#888', fontSize: '12px', lineHeight: '1.5' }}>
        <div>支持 JavaScript 表达式，可用变量：</div>
        <div style={{ marginTop: '4px' }}>• <code>data</code> - 流程数据</div>
        <div>• <code>vars</code> - 流程变量</div>
      </div>
    </FormContent>
  </>
);

export const formMeta: FormMeta = {
  render: renderForm,
  // 使用自定义标签组件来显示条件表达式
  renderCollapsedLabel: ConditionBranchLabel,
  validateTrigger: ValidateTrigger.onChange,
  validate: {
    'inputsValues.condition.content': ({ value }) => {
      if (!value || value.trim() === '') {
        return { message: '条件表达式不能为空', level: FeedbackLevel.Error };
      }
      return undefined;
    },
  },
};
