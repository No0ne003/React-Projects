import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div
        className="flex gap-4 cursor-pointer"
        onClick={() => handleToggleChildren(item.label)}
      >
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span className="flex justify-center items-center">
            {displayCurrentChildren[item.label] ? <FaMinus className="text-xs"/> : <FaPlus className="text-xs" />}
          </span>
        ) : null}
      </div>

      {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
