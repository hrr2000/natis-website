import { useRef, useEffect } from "react";

const useOutSideClick = (handler: () => void) => {
  const ref = useRef();

  const handleClickOutside = (e: any) => {
    //@ts-ignore
    if (e.type === "click" && ref.current && !ref.current.contains(e.target)) {
      handler();
    } else if (e.type === "keydown" && e.key === "Escape") {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keydown", handleClickOutside, true);
    };
    //eslint-disable-next-line
  }, []);
  return ref;
};

export default useOutSideClick;
