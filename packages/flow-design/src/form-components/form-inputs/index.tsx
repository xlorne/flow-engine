/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Field } from '@flowgram.ai/fixed-layout-editor';
import type { JsonSchema } from '../../typings';

export const FormInputs: React.FC = () => {
  return (
    <Field<JsonSchema> name="inputs">
      {({ field: inputsField }) => {
        const properties = inputsField.value?.properties;
        if (!properties) {
          return <></>;
        }
        return (
          <>
            {Object.keys(properties).map((key) => {
              const property = properties[key];
              return (
                <Field key={key} name={`inputsValues.${key}`} defaultValue={property.default}>
                  {({ field, fieldState }) => (
                    <div style={{ marginBottom: '12px' }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: '4px',
                          fontSize: '12px',
                          color: '#666',
                        }}
                      >
                        {key}
                      </label>
                      <input
                        type="text"
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          border: '1px solid #d9d9d9',
                          borderRadius: '4px',
                          fontSize: '14px',
                        }}
                      />
                    </div>
                  )}
                </Field>
              );
            })}
          </>
        );
      }}
    </Field>
  );
};
