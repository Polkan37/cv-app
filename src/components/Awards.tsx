'use client';

import { useEffect, useState } from 'react';

export default function Awards() {
  const [count, setCount] = useState<number>(6197);
  const awarder = Number(count).toLocaleString();

  useEffect(() => {
      const stored = localStorage.getItem('counterValue');
      if (stored !== null) setCount(parseInt(stored, 10));
  }, []);

  useEffect(() => {
      localStorage.setItem('counterValue', count.toString());
  }, [count]);


  const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
      setCount(prev => ++prev);

      const coin = document.createElement('div');
      coin.className = 'coin';

      // позиція відносно body
      const globalX = e.clientX;
      const globalY = e.clientY;

      coin.style.left = `${globalX - 12}px`; // центр монетки
      coin.style.top = `${globalY - 12}px`;

      document.body.appendChild(coin);

      setTimeout(() => {
          coin.remove();
      }, 800); // тривалість анімації
  };


  return (
    <div className="info-left">
        <div className="info-item">
            <span>07</span> Level
        </div>
        <div className="info-item">
            <button onClick={increment}>+</button>
            <span>{awarder}</span>
            coins&nbsp;awarded
            <div id="coin-template" className="coin"></div>
        </div>
    </div>
  );
}
