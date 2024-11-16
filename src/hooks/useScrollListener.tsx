'use client';

import { useEffect, useState } from 'react';

const useScrollListener = () => {
  const [data, setData] = useState({ x: 0, y: 0, lastX: 0, lastY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setData((prev) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: prev.x,
          lastY: prev.y,
        };
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return data;
};

export default useScrollListener;
