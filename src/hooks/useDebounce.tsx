import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeHandler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
