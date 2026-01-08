/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useEffect } from 'react';
import { usePlayground, usePlaygroundTools, useRefresh } from '@flowgram.ai/fixed-layout-editor';
import { Tooltip, IconButton } from '@douyinfe/semi-ui';
import { IconUndo, IconRedo } from '@douyinfe/semi-icons';
import styled from 'styled-components';

import { FitView } from './fit-view';
import { ZoomSelect } from './zoom-select';

const ToolContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  justify-content: left;
  min-width: 360px;
  pointer-events: none;
  gap: 8px;
  z-index: 20;
`;

const ToolSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(68, 83, 130, 0.25);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.02) 0px 4px 12px 0px;
  column-gap: 2px;
  height: 40px;
  padding: 0 4px;
  pointer-events: auto;
`;

export const FlowTools: React.FC = () => {
  const tools = usePlaygroundTools();
  const playground = usePlayground();
  const refresh = useRefresh();

  useEffect(() => {
    const disposable = playground.config.onReadonlyOrDisabledChange(() => refresh());
    return () => disposable.dispose();
  }, [playground, refresh]);

  return (
    <ToolContainer className="flow-design-tools">
      <ToolSection>
        <FitView fitView={tools.fitView} />
        <ZoomSelect />
        <Tooltip content="撤销">
          <IconButton
            theme="borderless"
            icon={<IconUndo />}
            disabled={!tools.canUndo || playground.config.readonly}
            onClick={() => tools.undo()}
          />
        </Tooltip>
        <Tooltip content="重做">
          <IconButton
            theme="borderless"
            icon={<IconRedo />}
            disabled={!tools.canRedo || playground.config.readonly}
            onClick={() => tools.redo()}
          />
        </Tooltip>
      </ToolSection>
    </ToolContainer>
  );
};
