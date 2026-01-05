import FlowDesign from "@/pages/flow-design";
import Welcome from "@/pages/welcome";
import { createHashRouter, type RouteObject } from "react-router";

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/design',
    element: <FlowDesign />,
  }
];

export const routes = createHashRouter(routesConfig)
