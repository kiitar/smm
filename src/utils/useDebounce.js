import { useState } from "react";

export const useDebounce = (func, wait = 1000) => {
  const [typingTimeout, setTypingTimeout] = useState("");
  console.log("tar debounce");
  const debounce = () => {
    clearTimeout(typingTimeout);

    const timeout = setTimeout(() => {
      func();
    }, wait);

    setTypingTimeout(timeout);
  };

  return debounce;
};

export default useDebounce;
