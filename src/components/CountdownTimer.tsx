import React, { useState, useEffect } from 'react';

interface TimeLeft {
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ minutes: 20, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          return { minutes: 20, seconds: 0 }; // Reset timer
        }
        
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border-2 border-yellow-300 max-w-sm sm:max-w-none mx-auto">
      <span className="text-white font-semibold text-xs sm:text-sm text-center">⏳ Esta oportunidade vai sumir em:</span>
      <div className="flex items-center gap-1 bg-black/20 px-2 sm:px-3 py-1 rounded-lg">
        <span className="text-red-500 font-bold text-base sm:text-lg tabular-nums">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-white font-bold text-sm sm:text-base">:</span>
        <span className="text-red-500 font-bold text-base sm:text-lg tabular-nums">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;