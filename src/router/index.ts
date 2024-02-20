import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TestsPage from "../pages/TestsPage";
import ArticlesPage from "../pages/ArticlesPage";

type RouteItem = {
  path: string;
  Component: React.ComponentType<any>;
};

export const appRoutes: RouteItem[] = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/tests",
    Component: TestsPage,
  },
  {
    path: "/articles",
    Component: ArticlesPage,
  },
];
