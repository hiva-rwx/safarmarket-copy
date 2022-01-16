import { useEffect, useRef } from "react";

export const useClickOutSide = (handler) => {
  const domNode = useRef(null);

  useEffect(() => {
    let handlerClick = (e) => {
      if (!domNode?.current?.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handlerClick);
    return () => {
      document.removeEventListener("mousedown", handlerClick);
    };
  }, [handler]);

  return domNode;
};
