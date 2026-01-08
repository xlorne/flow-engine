/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components';
import { IconInfoCircle } from '@douyinfe/semi-icons';

export const BaseNodeStyle = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(6, 7, 9, 0.15);
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  width: 360px;
  cursor: default;
  padding: 8px 12px;
  min-height: 48px;
  box-sizing: border-box;
  &.activated {
    border: 1px solid #82a7fc;
    box-shadow: 0 2px 8px 0 rgba(130, 167, 252, 0.2);
  }
`;

export const ErrorIcon = () => (
  <IconInfoCircle
    style={{
      position: 'absolute',
      color: 'red',
      left: -6,
      top: -6,
      zIndex: 1,
      background: 'white',
      borderRadius: 8,
    }}
  />
);
