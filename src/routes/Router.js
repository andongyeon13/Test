import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Explain = lazy(() => import("../views/ui/Explain"));
const Body = lazy(() => import("../views/ui/Body"));
const Develop = lazy(() => import("../views/ui/Develop"));
const Dropdown = lazy(() => import("../views/ui/DropdownPage"));
const Result = lazy(() => import("../views/ui/Result"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/Main" key = "home"/> },
      { path: "/Download", element: <Explain key = "download"/> },
      { path: "/Body", element: <Body key = "body"/> },
      { path: "/Main", element: <Dropdown key = "main"/> },
      { path: "/Result", element: <Result key = "result"/> },
      { path: "/Develop", element: <Develop key = "develop"/> },
    ],
  },
];

export default ThemeRoutes;
