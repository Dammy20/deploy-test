

import React, { useEffect, useRef, useState } from "react";

function TimeCounter() {
  const [timerDays, setTimeDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSecounds, setTimerSecounds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Jul 30, 2022, 00:00:00");

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secound = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecounds(secound);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });
  return (
    <>

      <div className="countdown-single">
        <h5 id="days9">{timerDays}</h5>
        <span>Days</span>
      </div>
      <div className="countdown-single">
        <h5 id="hours9">{timerHours}</h5>
        <span>Hours</span>
      </div>
      <div className="countdown-single">
        <h5 id="minutes9">{timerMinutes}</h5>
        <span>Mins</span>
      </div>
      <div className="countdown-single">
        <h5 id="seconds9">{timerSecounds}</h5>
        <span>Secs</span>
      </div>
    </>
  );
}

export default TimeCounter;
