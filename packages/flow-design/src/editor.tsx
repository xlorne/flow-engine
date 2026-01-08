/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { EditorRenderer, FixedLayoutEditorProvider } from '@flowgram.ai/fixed-layout-editor';

import { FlowNodeRegistries } from './nodes';
import { initialData } from './initial-data';
import { useFlowEditorProps } from './hooks';
import { FlowTools } from './components/tools';

import '@flowgram.ai/fixed-layout-editor/index.css';

export interface FlowEditorProps {
  data?: typeof initialData;
}

export const FlowEditor: React.FC<FlowEditorProps> = ({ data = initialData }) => {
  const editorProps = useFlowEditorProps(data, FlowNodeRegistries);

  return (
    <FixedLayoutEditorProvider {...editorProps}>
      <EditorRenderer />
      <FlowTools />
    </FixedLayoutEditorProvider>
  );
};
