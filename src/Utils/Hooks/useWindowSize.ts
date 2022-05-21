import { useEffect, useState } from 'react';

export interface Size {
  width: number | undefined;
  height: number | undefined;
  innerHeight: number | undefined;
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
    innerHeight: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        innerHeight: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
