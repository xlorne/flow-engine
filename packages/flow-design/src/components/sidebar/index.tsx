/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  background: #fff;
  border-left: 1px solid #e8e9eb;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const FlowSidebar: React.FC = () => {
  return (
    <Container>
      <div style={{ padding: '16px', borderBottom: '1px solid #e8e9eb' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>属性面板</h3>
      </div>
      <div style={{ padding: '16px', flex: 1, overflow: 'auto' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#999', textAlign: 'center' }}>
          请选择一个节点查看详情
        </p>
      </div>
    </Container>
  );
};

export { nodeFormPanelFactory } from './form-panel';
