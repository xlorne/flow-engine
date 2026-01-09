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
import { createDownloadPlugin } from '@flowgram.ai/export-plugin';
import { createMinimapPlugin } from '@flowgram.ai/minimap-plugin';

import { type FlowNodeRegistry } from '../typings';
import { BaseNode } from '../components/base-node';
import NodeAdder from '../components/node-adder';
import BranchAdder from '../components/branch-adder';
import { ConditionNodeRender } from '../components/condition-node-render';
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
      fromNodeJSON(_node, json) {
        return json;
      },
      toNodeJSON(_node, json) {
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
          [FlowRendererKey.BRANCH_ADDER]: BranchAdder,
        },
        renderDefaultNode: BaseNode,
        // 自定义条件节点的渲染，隐藏父节点容器
        renderNodes: {
          condition: ConditionNodeRender,
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
        createMinimapPlugin({
          disableLayer: true,
          enableDisplayAllNodes: true,
          canvasStyle: {
            canvasWidth: 182,
            canvasHeight: 102,
            canvasPadding: 50,
            canvasBackground: 'rgba(245, 245, 245, 1)',
            canvasBorderRadius: 10,
            viewportBackground: 'rgba(235, 235, 235, 1)',
            viewportBorderRadius: 4,
            viewportBorderColor: 'rgba(201, 201, 201, 1)',
            viewportBorderWidth: 1,
            viewportBorderDashLength: 2,
            nodeColor: 'rgba(255, 255, 255, 1)',
            nodeBorderRadius: 2,
            nodeBorderWidth: 0.145,
            nodeBorderColor: 'rgba(6, 7, 9, 0.10)',
            overlayColor: 'rgba(255, 255, 255, 0)',
          },
        }),
        createDownloadPlugin({}),
        createPanelManagerPlugin({
          factories: [nodeFormPanelFactory],
        }),
      ],
    }),
    [initialData, nodeRegistries]
  );
}
