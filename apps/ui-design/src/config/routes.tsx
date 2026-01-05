import FlowDesign from "@/pages/flow-design";
import Test from "@/pages/test";
import Welcome from "@/pages/welcome";
import { createHashRouter, type RouteObject } from "react-router";

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/design',
    element: <FlowDesign />,
  }
];

export const routes = createHashRouter(routesConfig)
