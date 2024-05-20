import React, { lazy, useContext } from "react";
import { FeatureFlagsContext } from "./context/FeatureFlagsContext";
import menus from "../tree-view/data";

// Lazy loading components
const LazyLightDarkMode = lazy(
  () => import("../light-dark-mode/Light-dark-mode"),
);
const LazyTicTacToe = lazy(() => import("../Tic-Tac-Toe/TicTacToe"));
const LazyRandomColor = lazy(() => import("../Random-Color/RandomColor"));
const LazyAccordion = lazy(() => import("../accordion/accordion"));
const LazyTreeView = lazy(() => import("../tree-view/TreeView"));
const LazyTabTest = lazy(() => import("../tree-view/custom-tabs/Tab-test"));

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LazyLightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <LazyTicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <LazyRandomColor />,
    },
    {
      key: "showAccordion",
      component: <LazyAccordion />,
    },
    {
      key: "showTreeView",
      component: <LazyTreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <LazyTabTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1 className="text-lg text-center">Loading</h1>;

  return (
    <div>
      <h1 className="text-2xl text-center py-4 bg-primary text-primary-foreground">
        Feature Flags
      </h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </div>
  );
}
