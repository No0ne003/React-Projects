import RandomColor from "../RandomColor";
import { TicTacToe } from "../TicTacToe";
import Accordion from "../accordion/accordion";
import LightDarkMode from "../light-dark-mode/Light-dark-mode";
import TreeView from "../tree-view/TreeView";
import { FeatureFlagsContext } from "./context/FeatureFlagsContext";
import menus from "../tree-view/data";
import TabTest from "../tree-view/custom-tabs/Tab-test";
import { useContext } from "react";

export const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },

    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key : 'showTabs',
      component : <TabTest />
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1 className="text-lg text-center">Loading</h1>;

  return (
    <div>
      <h1 className="text-2xl text-center py-4 bg-primary text-primary-foreground">Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </div>
  );
}
