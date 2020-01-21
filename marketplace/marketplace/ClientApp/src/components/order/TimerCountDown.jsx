import React, { useState, useEffect } from "react";
import "../../assets/style/components/listColumnStyle.css";
import GetTimer from "../shared/scripts/timerCount.js";
import moment from "moment";

export default function Timer({
  value,
  label,
  expired,
  days,
  hours,
  minutes,
  seconds
}) {
  const [dataTimer, setTimer] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(GetTimer(value, expired, days, hours, minutes, seconds));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <label className={"labelData"}>
      {label}: <span className={"dateText"}>{dataTimer}</span>
    </label>
  );
}
