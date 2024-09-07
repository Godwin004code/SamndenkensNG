

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, icon,currency }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 3000; // Animation duration in ms
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => {
        clearInterval(timer);
      };
    }
  }, [inView, end]);

  return (
    <h2 ref={ref} className="counter text-[#d81220]">
     {currency}{count}{icon}
    </h2>
  );
};

export default Counter;
