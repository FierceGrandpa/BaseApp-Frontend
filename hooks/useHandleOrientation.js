import { useCallback, useState, useEffect } from 'react';

export default function useHandleOrientation() {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  const handleOrientationChange = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [handleOrientationChange]);

  return dimensions;
}
