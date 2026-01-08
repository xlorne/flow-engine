/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Field } from '@flowgram.ai/fixed-layout-editor';
import { useIsSidebar, useNodeRenderContext } from '../../hooks';

export const FormHeader: React.FC = () => {
  const isSidebar = useIsSidebar();

  try {
    const { node } = useNodeRenderContext();
    const nodeRegistry = node?.getNodeRegistry();
    const icon = nodeRegistry?.info.icon;

    // Get title directly from node data
    const title = node?.data?.title || nodeRegistry?.type || 'Node';

    // In canvas mode, show simplified title with icon
    // Handle both false and undefined for canvas mode
    if (isSidebar !== true) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
          {icon && <img src={icon} alt="" style={{ width: '28px', height: '28px', flexShrink: 0 }} />}
          <div style={{ flex: 1, fontSize: '14px', fontWeight: 500, color: '#333', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {String(title)}
          </div>
        </div>
      );
    }

    // In sidebar mode, show full header
    return (
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #e8e9eb' }}>
        <Field name="title">
          {({ field }) => (
            <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>
              {String(field.value || 'Node')}
            </h3>
          )}
        </Field>
      </div>
    );
  } catch (error) {
    console.error('FormHeader error:', error);
    return <div style={{ padding: '8px' }}>Error rendering node</div>;
  }
};
