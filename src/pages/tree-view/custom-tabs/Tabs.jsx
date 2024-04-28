import { useState } from "react";

export const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="flex flex-col justify-start items-center w-fit mx-auto bg-gr">
      <div className="flex w-fit">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`cursor-pointer hover:bg-transparent px-5 py-3 font-mono w-[100px] ${currentTabIndex === index ? 'bg-transparent' : 'bg-secondary'}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4 px-3 w-full">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};
