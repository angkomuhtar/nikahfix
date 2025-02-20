"use client";
import React, { useState } from "react";
import DayCount from "./days-count";
import moment from "moment";

const CountDown = () => {
  //   const calculateDuration = () =>
  // moment.duration(
  //   Math.max(eventTime - Math.floor(Date.now() / 1000), 0),
  //   "seconds"
  // );

  //   const [duration, setDuration] = useState(calculateDuration(eventTime));
  //   const timerRef = useRef(0);
  //   const timerCallback = useCallback(() => {
  //     setDuration(calculateDuration(eventTime));
  //   }, [eventTime]);

  //   useEffect(() => {
  //     timerRef.current = setInterval(timerCallback, interval);

  //     return () => {
  //       clearInterval(timerRef.current);
  //     };
  //   }, [eventTime]);
  const [eventTime, setEventTime] = useState<moment.Duration>();

  setInterval(() => {
    setEventTime(
      moment.duration(
        moment("2025-02-28 10:00:00", "YYYY-MM-DD HH:mm:ss").diff(moment())
      )
    );
  }, 1000);

  return (
    <div className='flex space-x-2 mt-4'>
      <DayCount count={eventTime?.days().toString()} type='Days' />
      <DayCount count={eventTime?.hours().toString()} type='Hours' />
      <DayCount count={eventTime?.minutes().toString()} type='Minutes' />
      <DayCount count={eventTime?.seconds().toString()} type='Seconds' />
    </div>
  );
};

export default CountDown;
