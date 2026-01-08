/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

export const IconStart: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <circle cx="20" cy="20" r="18" fill="#52C41A" fillOpacity="0.2" stroke="#52C41A" strokeWidth="2" />
    <path d="M16 20L19 23L24 17" stroke="#52C41A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconEnd: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <circle cx="20" cy="20" r="18" fill="#FF4D4F" fillOpacity="0.2" stroke="#FF4D4F" strokeWidth="2" />
    <rect x="14" y="14" width="12" height="12" rx="2" stroke="#FF4D4F" strokeWidth="2" />
  </svg>
);

export const IconProcess: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <rect x="4" y="8" width="32" height="24" rx="4" fill="#1890FF" fillOpacity="0.15" stroke="#1890FF" strokeWidth="2" />
    <path d="M12 16H28M12 20H24M12 24H20" stroke="#1890FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconCC: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <rect x="4" y="8" width="32" height="24" rx="4" fill="#FAAD14" fillOpacity="0.15" stroke="#FAAD14" strokeWidth="2" />
    <path d="M14 20C14 17.79 15.79 16 18 16C20.21 16 22 17.79 22 20C22 22.21 20.21 24 18 24" stroke="#FAAD14" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 16V14M18 26V24M22 20H24M12 20H14" stroke="#FAAD14" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Base64 versions for node registry
export const iconStartBase64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iIzUyQzQxQSIgZmlsbE9wYWNpdHk9IjAuMiIgc3Ryb2tlPSIjNTJDNDFBIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPHBhdGggZD0iTTE2IDIwTDE5IDIzTDI0IDE3IiBzdHJva2U9IiM1MkM0MUEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgo8L3N2Zz4=';

export const iconEndBase64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iI0ZGNEQ0RiIgZmlsbE9wYWNpdHk9IjAuMiIgc3Ryb2tlPSIjRkY0RDNGIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPHJlY3QgeD0iMTQiIHk9IjE0IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBzdHJva2U9IiNGRjRENEYiIHN0cm9rZS13aWR0aD0iMiIgLz4KPC9zdmc+';

export const iconProcessBase64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB4PSI0IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMTg5MEZGIiBmaWxsT3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjMTg5MEZGIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPHBhdGggZD0iTTEyIDE2SDI4TTEyIDIwSDI0TDEyIDI0SDIwIiBzdHJva2U9IiMxODkwRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgo8L3N2Zz4=';

export const iconCCBase64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB4PSI0IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjRkFBRDE0IiBmaWxsT3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRkFBRDE0IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPHBhdGggZD0iTTE0IDIwQzE0IDE3Ljc5IDE1Ljc5IDE2IDE4IDE2QzIwLjIxIDE2IDIyIDE3Ljc5IDIyIDIwQzIyIDIyLjIxIDIwLjIxIDI0IDE4IDI0IiBzdHJva2U9IiNGQUFEMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogIDxwYXRoIGQ9Ik0xOCAxNlYxNE0xOCAyNlYyNE0yMiAyMEgyNE0xMiAyMEgxNCIgc3Ryb2tlPSIjRkFBRDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KPC9zdmc+';
