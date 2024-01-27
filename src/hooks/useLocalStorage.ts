import { useCallback } from "react";

function useLocalStorage(key: string) {
  const setItem = (value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const getItem = useCallback(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (err) {
      console.log(err);
    }
  }, [key]);

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  return { setItem, getItem, removeItem };
}

export default useLocalStorage;
