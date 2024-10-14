"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import styles from "@/components/ComingSoon/Countdown.module.css";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2026 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <Box
        className={styles.comingSoonTimer}
        style={{
          backgroundImage: `url(/images/coming-soon.jpg)`,
        }}
      >
        <h4>TIME LEFT UNTIL LAUNCHING</h4>

        <div className={styles.countdownContainer}>
          <div className={`text-warning ${styles.countdownValue}`}>
            {countdown.days}
          </div>
          <div className={styles.countdownLabel}>Days</div>

          <div className={styles.countdownItem}>
            <div className={`text-warning ${styles.countdownValue}`}>
              {countdown.hours}
            </div>
            <div className={styles.countdownLabel}>Hours</div>
          </div>

          <div className={styles.countdownItem}>
            <div className={`text-warning ${styles.countdownValue}`}>
              {countdown.minutes}
            </div>
            <div className={styles.countdownLabel}>Minutes</div>
          </div>

          <div className={styles.countdownItem}>
            <div className={`text-warning ${styles.countdownValue}`}>
              {countdown.seconds}
            </div>
            <div className={styles.countdownLabel}>Seconds</div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Countdown;
