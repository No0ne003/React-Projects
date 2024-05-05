import React from "react";

export const Modal = ({ id, header, body, onClose }) => {
  return (
    <div
      id={id || "Modal"}
      className="fixed w-screen h-fit z-50 flex justify-center items-center top-1/2"
    >
      <div className="px-6 py-2 border-border border-2">
        <header className="flex items-center px-2 py-3 justify-between ">
          <h3 className="text-xl">{header ? header : "Header"}</h3>
          <span onClick={onClose} className="text-rose-500 cursor-pointer text-2xl">
            &times;
          </span>
        </header>
        <div className="px-2 py-3 text-sm">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
