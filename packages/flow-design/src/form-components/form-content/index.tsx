/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react';

export const FormContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div style={{ padding: '16px' }}>{children}</div>;
};
