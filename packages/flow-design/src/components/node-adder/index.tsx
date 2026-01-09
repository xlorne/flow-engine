/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';
import { useClientContext, type FlowNodeEntity } from '@flowgram.ai/fixed-layout-editor';
import { Popover } from '@douyinfe/semi-ui';
import { IconPlusCircle } from '@douyinfe/semi-icons';
import styled from 'styled-components';

import { NodeList } from './node-list';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
`;

export default function NodeAdder(props: {
  from: FlowNodeEntity;
  to?: FlowNodeEntity;
  hoverActivated: boolean;
}) {
  const { from } = props;
  const [visible, setVisible] = useState(false);
  const { playground, operation } = useClientContext();

  if (playground.config.readonly) return null;

  const add = (addProps: any) => {
    operation.addFromNode(from, addProps);
    setVisible(false);
  };

  return (
    <Popover
    visible={visible}
    onVisibleChange={setVisible}
    content={<NodeList onSelect={add} from={from} />}
    placement="right"
    trigger="click"
    popupAlign={{ offset: [30, 0] }}
    overlayStyle={{ padding: 0 }}
  >
    <Wrap
      style={
        props.hoverActivated
          ? {
            width: 24,
            height: 24,
          }
          : {}
      }
      onMouseDown={(e) => e.stopPropagation()}
    >
      {props.hoverActivated ? (
        <IconPlusCircle
          onClick={() => {
            setVisible(true);
          }}
          style={{
            backgroundColor: '#fff',
            color: '#1890ff',
            borderRadius: 12,
            fontSize: 20,
          }}
        />
      ) : null}
    </Wrap>
  </Popover>
  );
}
