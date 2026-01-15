'use client';

import { useEffect, useState } from 'react';
import Typewriter from './Typewriter';

export default function Timer() {
  const pad = (num: number) => String(num).padStart(2, '0');
  const message= [
      `local time:`
    ]

  const getTimes = () => {
    const now = new Date();
    const localTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    return localTime;
  };

  const [time, setTime] = useState(getTimes);

  useEffect(() => {
    const update = () => setTime(getTimes());

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      update();
      intervalId = window.setInterval(update, 60 * 1000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="info-right">
      <div className="info-item timer">
        <Typewriter messages={message} /> <b>{time}</b>
      </div>
    </div>
  );
}
