import React from 'react';
import ReactDOM from 'react-dom/client';
import {routes} from '@/config/routes';
import { RouterProvider } from 'react-router';
import "./index.css";

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>,
  );
}
