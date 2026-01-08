/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useCallback } from 'react';

import { usePanelManager } from '@flowgram.ai/panel-manager-plugin';
import { FlowNodeEntity, useNodeRender } from '@flowgram.ai/fixed-layout-editor';
import { ConfigProvider } from '@douyinfe/semi-ui';

import { BaseNodeStyle, NodeIcon, NodeContent, NodeTitle, NodeDescription } from './styles';
import { nodeFormPanelFactory } from '../sidebar';

export const BaseNode = ({ node }: { node: FlowNodeEntity }) => {
  const nodeRender = useNodeRender();
  const form = nodeRender.form;
  const panelManager = usePanelManager();

  const getPopupContainer = useCallback(() => node.renderData.node || document.body, []);

  const nodeRegistry = node.getNodeRegistry();
  const icon = nodeRegistry.info.icon;
  const title = form?.getValueIn('title') || nodeRegistry.type;
  const description = form?.getValueIn('description');

  return (
    <ConfigProvider getPopupContainer={getPopupContainer}>
      <BaseNodeStyle
        onMouseEnter={nodeRender.onMouseEnter}
        onMouseLeave={nodeRender.onMouseLeave}
        className={nodeRender.activated ? 'activated' : ''}
        onClick={() => {
          if (nodeRender.dragging) {
            return;
          }
          panelManager.open(nodeFormPanelFactory.key, 'right', {
            props: {
              nodeId: nodeRender.node.id,
            },
          });
        }}
        style={{
          ...nodeRegistry.meta.style,
          opacity: nodeRender.dragging ? 0.3 : 1,
        }}
      >
        <NodeIcon dangerouslySetInnerHTML={{ __html: icon }} />
        <NodeContent>
          <NodeTitle>{String(title)}</NodeTitle>
          {description && <NodeDescription>{String(description)}</NodeDescription>}
        </NodeContent>
      </BaseNodeStyle>
    </ConfigProvider>
  );
};
