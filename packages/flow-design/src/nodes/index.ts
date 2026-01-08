/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { type FlowNodeRegistry } from '../typings';
import { StartNodeRegistry } from './start';
import { EndNodeRegistry } from './end';
import { ProcessNodeRegistry } from './process';
import { CCNodeRegistry } from './cc';

export { StartNodeRegistry } from './start';
export { EndNodeRegistry } from './end';
export { ProcessNodeRegistry } from './process';
export { CCNodeRegistry } from './cc';

export const FlowNodeRegistries: FlowNodeRegistry[] = [
  StartNodeRegistry,
  EndNodeRegistry,
  ProcessNodeRegistry,
  CCNodeRegistry,
];
