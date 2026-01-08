/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useMemo } from 'react';
import {
  FixedLayoutProps,
  FlowDocumentJSON,
  FlowLayoutDefault,
  ConstantKeys,
  FlowRendererKey,
} from '@flowgram.ai/fixed-layout-editor';
import { defaultFixedSemiMaterials } from '@flowgram.ai/fixed-semi-materials';
import { createPanelManagerPlugin } from '@flowgram.ai/panel-manager-plugin';

import { type FlowNodeRegistry } from '../typings';
import { BaseNode } from '../components/base-node';
import NodeAdder from '../components/node-adder';
import { nodeFormPanelFactory } from '../components/sidebar';

export function useFlowEditorProps(
  initialData: FlowDocumentJSON,
  nodeRegistries: FlowNodeRegistry[]
): FixedLayoutProps {
  return useMemo<FixedLayoutProps>(
    () => ({
      background: true,
      playground: {
        ineractiveType: 'MOUSE',
        preventGlobalGesture: true,
      },
      readonly: false,
      initialData,
      nodeRegistries,
      getNodeDefaultRegistry(type) {
        return {
          type,
          meta: {
            defaultExpanded: true,
          },
        };
      },
      fromNodeJSON(node, json) {
        return json;
      },
      toNodeJSON(node, json) {
        return json;
      },
      defaultLayout: FlowLayoutDefault.VERTICAL_FIXED_LAYOUT,
      constants: {
        [ConstantKeys.BASE_COLOR]: '#B8BCC1',
        [ConstantKeys.BASE_ACTIVATED_COLOR]: '#82A7FC',
      },
      history: {
        enable: true,
        enableChangeNode: true,
      },
      nodeEngine: {
        enable: true,
      },
      variableEngine: {
        enable: true,
      },
      materials: {
        components: {
          ...defaultFixedSemiMaterials,
          [FlowRendererKey.ADDER]: NodeAdder,
          renderDefaultNode: BaseNode,
        },
      },
      scroll: {
        enableScrollLimit: true,
      },
      onInit: (ctx) => {
        console.log('---- Flow Editor Init ----');
      },
      onAllLayersRendered: (ctx) => {
        setTimeout(() => {
          ctx.tools.fitView();
        }, 10);
      },
      onDispose: () => {
        console.log('---- Flow Editor Dispose ----');
      },
      plugins: () => [
        createPanelManagerPlugin({
          factories: [nodeFormPanelFactory],
        }),
      ],
    }),
    [initialData, nodeRegistries]
  );
}
