import { debounce } from '@/utils/tools';
import { useEffect, useState } from 'react';
import { useIsMounted } from './useIsMounted';

const MAX_OBILE_WIDTH = 992;

const useWindowSize = () => {
  const isMounted = useIsMounted();
  const getSize = () => {
    if (!isMounted)
      return {
        width: 0,
        height: 0,
      };
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  const [windowSize, setWindowSize] = useState(getSize);
  const resizeHandler = () => {
    setWindowSize(getSize());
  };
  const debouncedResize = debounce(resizeHandler, 200);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEffect((): any => {
    if (isMounted) {
      resizeHandler();

      window.addEventListener('resize', debouncedResize);

      return () => {
        window.removeEventListener('resize', debouncedResize);
        return null;
      };
    }
  }, [isMounted]);

  return {
    ...windowSize,
    isMobileStyle: windowSize?.width < MAX_OBILE_WIDTH,
  };
};

export default useWindowSize;
