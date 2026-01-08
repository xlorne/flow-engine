/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FormMeta } from '@flowgram.ai/fixed-layout-editor';
import { FormHeader, FormContent, FormInputs, FormOutputs } from '../../form-components';

const renderForm = () => {
  // Canvas rendering (simplified view) - just header
  // Sidebar rendering (full form) - header + inputs + outputs
  return (
    <>
      <FormHeader />
      <FormContent>
        <FormInputs />
        <FormOutputs />
      </FormContent>
    </>
  );
};

export const formMeta: FormMeta = {
  render: renderForm,
};
