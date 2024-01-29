import { useEffect, useRef } from "react";

function useOutsideClick<T extends HTMLElement>(
  handler: () => void,
  listenCapturing?: boolean,
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) handler();
    };

    const timeOut = setTimeout(() => {
      document.addEventListener("click", handleClick, listenCapturing);
    }, 0);

    return () => {
      clearTimeout(timeOut);
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutsideClick;
