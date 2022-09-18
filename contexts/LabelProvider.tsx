import { createContext, useContext } from "react";
import { contextType, labelsType } from "../Types/common";

const labelContext = createContext({});

function LabelProvider({ children, labels }: contextType) {
  return (
    <labelContext.Provider value={labels}>{children}</labelContext.Provider>
  );
}

const useLabelContext = (): labelsType => useContext(labelContext);

export { useLabelContext, LabelProvider };
