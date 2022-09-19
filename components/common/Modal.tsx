import React from "react";

const Modal = ({
  children,
  modalState,
}: {
  children: (x: number) => React.ReactNode;
  modalState: number;
}) => {
  return (
    <>
      {!modalState || (
        <div className="bg-overlay fixed inset-0 grid place-items-center">
          <div className="w-dynamic-md bg-white rounded-md">
            {children(modalState)}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
