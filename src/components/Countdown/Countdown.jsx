import { useState, useEffect } from "react";
import styles from "./Countdown.module.css";

const formatTime = (time) => (time < 10 ? `0${time}` : time);

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const festivalTime = new Date("January 20 2026 13:00:00");

    const timer = setInterval(() => {
      const currentTime = new Date();
      const diff = festivalTime - currentTime;

      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor(diff / 1000 / 60 / 60) % 24;
      const m = Math.floor(diff / 1000 / 60) % 60;
      const s = Math.floor(diff / 1000) % 60;

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdownSologan}>
      <div className={styles.time}>
        <h2>{timeLeft.days}</h2>
        <p>Days</p>
      </div>
      <div className={styles.time}>
        <h2>{formatTime(timeLeft.hours)}</h2>
        <p>Hours</p>
      </div>
      <div className={styles.time}>
        <h2>{formatTime(timeLeft.minutes)}</h2>
        <p>Minutes</p>
      </div>
      <div className={styles.time}>
        <h2>{formatTime(timeLeft.seconds)}</h2>
        <p>Seconds</p>
      </div>
    </div>
  );
}

export default Countdown;
