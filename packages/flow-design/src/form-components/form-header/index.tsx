/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Field } from '@flowgram.ai/fixed-layout-editor';

export const FormHeader: React.FC = () => {
  return (
    <div style={{ padding: '12px 16px', borderBottom: '1px solid #e8e9eb' }}>
      <Field name="title">
        {({ field }) => (
          <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>
            {String(field.value || 'Node')}
          </h3>
        )}
      </Field>
    </div>
  );
};
