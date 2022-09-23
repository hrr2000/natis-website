import React from "react";

const Modal = ({
  children,
  modalState,
  modalRef,
}: {
  children: (x: number) => React.ReactNode;
  modalState: number;
  modalRef?: any;
}) => {
  return (
    <>
      {!!modalState && (
        <div className="bg-overlay fixed inset-0 flex justify-center items-center">
          <div ref={modalRef} className="w-dynamic-md bg-white rounded-md">
            {children(modalState)}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
