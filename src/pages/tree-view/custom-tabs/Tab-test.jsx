import { Tabs } from "./Tabs";

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex){
    console.log(currentTabIndex)
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />
}
