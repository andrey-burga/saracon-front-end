import { useState, useEffect } from "react";

const useIsLargeScreen = (minWidth = 992) => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= minWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth]);

  return isLarge;
};

export default useIsLargeScreen;
