/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react';
import { useIsSidebar } from '../../hooks';

export const FormContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isSidebar = useIsSidebar();

  // In canvas mode, don't render FormContent (content is in FormHeader)
  if (!isSidebar) {
    return null;
  }

  // In sidebar mode, show full form
  return <div style={{ padding: '16px' }}>{children}</div>;
};
