/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Field } from '@flowgram.ai/fixed-layout-editor';
import { useIsSidebar } from '../../hooks';
import type { JsonSchema } from '../../typings';

export const FormOutputs: React.FC = () => {
  const isSidebar = useIsSidebar();

  // Only show outputs in sidebar mode
  if (!isSidebar) {
    return null;
  }

  return (
    <Field<JsonSchema> name="outputs">
      {({ field }) => {
        const outputs = field.value;
        if (!outputs || !outputs.properties) {
          return <></>;
        }
        const properties = outputs.properties;
        return (
          <div style={{ marginTop: '16px', borderTop: '1px solid #e8e9eb', paddingTop: '16px' }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>Outputs</h4>
            {Object.keys(properties).map((key) => {
              const prop = properties[key];
              if (!prop) return null;
              return (
                <div key={key} style={{ marginBottom: '8px', fontSize: '12px', color: '#333' }}>
                  <span style={{ fontWeight: 500 }}>{key}: </span>
                  <span style={{ color: '#999' }}>{prop.type}</span>
                </div>
              );
            })}
          </div>
        );
      }}
    </Field>
  );
};
