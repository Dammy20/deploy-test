
import React, { useEffect, useRef, useState } from "react";
import axios from "axios"; // Make sure you have axios imported
import { base_Url } from "../../http/config";
function Counter({ startDate, endDate, productId }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log(productId)
    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const countdownEndDate = new Date(endDate).getTime();
      const countdownStartDate = new Date(startDate).getTime();

      if (now < countdownStartDate) {

        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (now > countdownEndDate) {

        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
        clearInterval(intervalRef.current);


      } else {
        // Countdown is running
        const countdownDuration = countdownEndDate - now;
        const days = Math.floor(countdownDuration / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countdownDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countdownDuration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countdownDuration % (1000 * 60)) / 1000);

        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMinutes(String(minutes).padStart(2, "0"));
        setTimerSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);


  return (
    <>
      <div className="countdown-single">
        <h5>{timerDays}</h5>
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
        <h5 id="seconds9">{timerSeconds}</h5>
        <span>Secs</span>
      </div>
    </>
  );
}

export default Counter;






// import React, { useEffect, useRef, useState } from "react";

// function Counter({ startDate, endDate }) {
//   const [timerDays, setTimerDays] = useState("00");
//   const [timerHours, setTimerHours] = useState("00");
//   const [timerMinutes, setTimerMinutes] = useState("00");
//   const [timerSeconds, setTimerSeconds] = useState("00");
//   const intervalRef = useRef(null);
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       const now = new Date().getTime();
//       const countdownEndDate = new Date(endDate).getTime();
//       const countdownStartDate = new Date(startDate).getTime();

//       if (now < countdownStartDate) {
//         // Countdown hasn't started yet
//         setTimerDays("00");
//         setTimerHours("00");
//         setTimerMinutes("00");
//         setTimerSeconds("00");
//       } else if (now > countdownEndDate) {
//         // Countdown has ended
//         setTimerDays("00");
//         setTimerHours("00");
//         setTimerMinutes("00");
//         setTimerSeconds("00");
//         clearInterval(intervalRef.current);
//       } else {
//         // Countdown is running
//         const countdownDuration = countdownEndDate - now;
//         const days = Math.floor(countdownDuration / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((countdownDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((countdownDuration % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((countdownDuration % (1000 * 60)) / 1000);

//         setTimerDays(String(days).padStart(2, "0"));
//         setTimerHours(String(hours).padStart(2, "0"));
//         setTimerMinutes(String(minutes).padStart(2, "0"));
//         setTimerSeconds(String(seconds).padStart(2, "0"));
//       }
//     }, 1000);

//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, [startDate, endDate]);

//   return (
//     <>
//       <div className="countdown-single">
//         <h5>{timerDays}</h5>
//         <span>Days</span>
//       </div>
//       <div className="countdown-single">
//         <h5 id="hours9">{timerHours}</h5>
//         <span>Hours</span>
//       </div>
//       <div className="countdown-single">
//         <h5 id="minutes9">{timerMinutes}</h5>
//         <span>Mins</span>
//       </div>
//       <div className="countdown-single">
//         <h5 id="seconds9">{timerSeconds}</h5>
//         <span>Secs</span>
//       </div>
//     </>
//   );
// }

// export default Counter;
