import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime = 0 }) => {
  const [hours, setHours] = useState(Math.floor(initialTime / 3600));
  const [minutes, setMinutes] = useState(Math.floor((initialTime % 3600) / 60));
  const [seconds, setSeconds] = useState(initialTime % 60);

  useEffect(() => {
    let interval = null;

    // Check if the timer has reached 0
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        // Decrement the time units
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(interval);
            } else {
              // Decrement hours and reset minutes and seconds
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            // Decrement minutes and reset seconds
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          // Decrement seconds
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [hours, minutes, seconds]);

  return (
    <div className='flex justify-center'>
      <p className='gradient-outline-brown pt-1 md:pt-0 text-[4vw] md:text-[4vw] font-upheaval  tracking-[-1px]'>
        {/* Display hours, minutes, and seconds */}
        <span className='tracking-[6px] hover:text-[white] transition ease-in-out duration-500'>{hours < 10 ? `0${hours}` : hours}</span> :{' '}
        <span className='tracking-[6px] hover:text-[white] transition ease-in-out duration-500'>{minutes < 10 ? `0${minutes}` : minutes}</span> :{' '}
        <span className='tracking-[6px] hover:text-[white] transition ease-in-out duration-500'>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </p>
    </div>
  );
};

export default Timer;
