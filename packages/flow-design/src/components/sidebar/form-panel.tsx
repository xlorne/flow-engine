/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useCallback, useEffect } from 'react';
import { type PanelFactory, usePanelManager } from '@flowgram.ai/panel-manager-plugin';
import {
  PlaygroundEntityContext,
  useRefresh,
  useClientContext,
  useNodeRender,
} from '@flowgram.ai/fixed-layout-editor';

import { FlowNodeMeta } from '../../typings';
import { IsSidebarContext, NodeRenderContext } from '../../context';

export interface NodeFormPanelProps {
  nodeId: string;
}

export function SidebarNodeRenderer({ node }: { node: ReturnType<typeof useNodeRender>['node'] }) {
  const nodeRender = useNodeRender(node);

  return (
    <NodeRenderContext.Provider value={nodeRender}>
      <div
        style={{
          background: 'rgb(251, 251, 251)',
          height: '100%',
          borderRadius: 8,
          border: '1px solid rgba(82,100,154, 0.13)',
          boxSizing: 'border-box',
        }}
      >
        {nodeRender.form?.render()}
      </div>
    </NodeRenderContext.Provider>
  );
}

export function SidebarRenderer({ nodeId }: NodeFormPanelProps) {
  const panelManager = usePanelManager();
  const { selection, playground, document } = useClientContext();
  const refresh = useRefresh();
  const handleClose = useCallback(() => {
    panelManager.close(nodeFormPanelFactory.key);
  }, [panelManager]);

  const node = nodeId ? document.getNode(nodeId) : undefined;

  useEffect(() => {
    const disposable = playground.config.onReadonlyOrDisabledChange(() => {
      handleClose();
      refresh();
    });
    return () => disposable.dispose();
  }, [playground, handleClose, refresh]);

  useEffect(() => {
    const toDispose = selection.onSelectionChanged(() => {
      if (selection.selection.length === 0) {
        handleClose();
      } else if (selection.selection.length === 1 && selection.selection[0] !== node) {
        handleClose();
      }
    });
    return () => toDispose.dispose();
  }, [selection, handleClose, node]);

  useEffect(() => {
    if (node) {
      const toDispose = node.onDispose(() => {
        panelManager.close(nodeFormPanelFactory.key);
      });
      return () => toDispose.dispose();
    }
    return () => {};
  }, [node, panelManager]);

  if (!node || node.getNodeMeta<FlowNodeMeta>().sidebarDisable === true) {
    return null;
  }

  if (playground.config.readonly) {
    return null;
  }

  return (
    <IsSidebarContext.Provider value={true}>
      <PlaygroundEntityContext.Provider key={node.id} value={node}>
        <SidebarNodeRenderer node={node} />
      </PlaygroundEntityContext.Provider>
    </IsSidebarContext.Provider>
  );
}

export const nodeFormPanelFactory: PanelFactory<NodeFormPanelProps> = {
  key: 'node-form-panel',
  defaultSize: 320,
  render: (props: NodeFormPanelProps) => <SidebarRenderer {...props} />,
};
