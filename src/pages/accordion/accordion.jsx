import { useState } from "react";
import data from "./data";
import { Button } from "@/components/ui/button";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="container flex flex-1 flex-col items-center justify-center gap-8 my-10">
      <Button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Toggle Multi Selection
      </Button>
      <div className="max-w-[500px] ackdrop-blur-3xl border-border border-2 space-y-5 py-[15px] px-[10px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex justify-between items-center cursor-pointer py-[10px] px-[15px] transition-all"
              >
                <h3
                  className={`font-mono transition-all ${selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? "font-bold" : ""}`}
                >
                  {dataItem.question}
                </h3>
                <span className="size-5 flex justify-center items-center transition-all">
                  {dataItem.id === selected ||
                    multiple.indexOf(dataItem.id) !== -1
                    ? "-"
                    : "+"}
                </span>
              </div>
              {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="h-auto py-[10px] px-[15px] border-b-border transition-all">
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data found !</div>
        )}
      </div>
    </div>
  );
}
