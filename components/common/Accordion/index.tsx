import React, {ReactNode, useEffect, useRef, useState} from "react";

interface AccordionProps {
  title: Function;
  content: Function;
  changeChild?: Function;
  changeValue?: number;
  Active?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content, changeChild, changeValue, Active, ...props }) => {
  const [active, setActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");

  const contentSpace = useRef(null);
  const buttonRef = useRef(null);

  // @ts-ignore
  function toggleAccordion(e) {
    e.stopPropagation(true);
    setActive(!active);
    // @ts-ignore
    buttonRef.current.style.pointerEvents = true;
    // changeChild();
  }

  useEffect(() => {
    // @ts-ignore
    contentSpace.current.style.maxHeight = maxHeight;

    setTimeout(
      () =>
        setMaxHeight(
          // @ts-ignore
          !active ? "0px" : `${contentSpace.current.scrollHeight}px`
        ),
      0
    );

    if (active)
      // @ts-ignore
      contentSpace.current.addEventListener(
        "transitionend",
        // @ts-ignore
        function (e) {
          e.stopPropagation(true);
          // @ts-ignore
          if (this.style.maxHeight !== "0px") this.style.maxHeight = "none";
          // @ts-ignore
          buttonRef.current.style.pointerEvents = false;
        },
        {
          once: true
        }
      );
  }, [active]);

  return (
    <div className="accordion__section">
      <button
        ref={buttonRef}
        className="accordion__title"
        onClick={toggleAccordion}
      >
        {title(active)}
      </button>
      <div
        className="accordion__content"
        ref={contentSpace}
        style={{ maxHeight: `${maxHeight}` }}
      >
        {content()}
      </div>
    </div>
  );
};
