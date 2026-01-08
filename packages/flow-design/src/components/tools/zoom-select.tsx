/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';
import { usePlaygroundTools } from '@flowgram.ai/fixed-layout-editor';
import { Divider, Dropdown } from '@douyinfe/semi-ui';
import styled from 'styled-components';

const SelectZoom = styled.span`
  padding: 2px 8px;
  border-radius: 8px;
  border: 1px solid rgba(68, 83, 130, 0.25);
  font-size: 12px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgba(68, 83, 130, 0.05);
  }
`;

export const ZoomSelect = () => {
  const tools = usePlaygroundTools({ maxZoom: 2, minZoom: 0.25 });
  const [dropDownVisible, openDropDown] = useState(false);

  return (
    <Dropdown
      position="top"
      trigger="custom"
      visible={dropDownVisible}
      onClickOutSide={() => openDropDown(false)}
      render={
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => tools.zoomin()}>放大</Dropdown.Item>
          <Dropdown.Item onClick={() => tools.zoomout()}>缩小</Dropdown.Item>
          <Divider layout="horizontal" />
          <Dropdown.Item onClick={() => tools.updateZoom(0.5)}>50%</Dropdown.Item>
          <Dropdown.Item onClick={() => tools.updateZoom(1)}>100%</Dropdown.Item>
          <Dropdown.Item onClick={() => tools.updateZoom(1.5)}>150%</Dropdown.Item>
          <Dropdown.Item onClick={() => tools.updateZoom(2.0)}>200%</Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <SelectZoom onClick={() => openDropDown(true)}>
        {Math.floor(tools.zoom * 100)}%
      </SelectZoom>
    </Dropdown>
  );
};
