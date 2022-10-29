import React from "react";

const Modal = ({
  children,
  modalState,
  modalRef,
  className
}: {
  children: (x: number) => React.ReactNode;
  modalState: number;
  modalRef?: any;
  className: string;
}) => {
  return (
    <>
      {!!modalState && (
        <div className={`bg-overlay fixed inset-0 flex justify-center items-center z-50`}>
          <div ref={modalRef} className={className || `w-dynamic-md bg-white rounded-md`}>
            {children(modalState)}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
