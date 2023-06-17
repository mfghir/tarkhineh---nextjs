import React, { useState, useEffect } from 'react';
import { convertToFaNumber } from './FarsiNumber';

const TwoMinuteTimer = () => {
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <>{convertToFaNumber(formatTime(seconds))}</>;
};

export default TwoMinuteTimer;
