import React, { useState, useEffect } from "react";
var sum = 0;

function CellRender(props) {
  let { t } = props;
  const [seconds, setSeconds] = useState(0);
  const { time } = props;

  function decrement(time, sum) {
    time = time - sum;
    if (time <= 0) {
      return 0;
    } else return time;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      sum++;
      setSeconds(decrement(time, sum));
    }, 1000);
    return () => clearInterval(time);
  }, []);

  return seconds;
}
export default function AutoLogout(props) {
  let ComposedClass;
  let warnTimeout, logoutTimeout, browserHistory;
  const { warningTime, signOutTime } = props;

  const componentDidMount = () => {
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ];

    for (var i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    setTimeout();
  };

  const clearTimeoutFunc = () => {
    if (warnTimeout) clearTimeout(warnTimeout);

    if (logoutTimeout) clearTimeout(logoutTimeout);
  };

  const setTimeout = () => {
    warnTimeout = setTimeout(warn, warningTime);
    logoutTimeout = setTimeout(logout, signOutTime);
  };

  const resetTimeout = () => {
    clearTimeoutFunc();
    setTimeout();
  };

  const warn = () => {
    window.alert("You will be logged out automatically in 1 minute");
    console.log("You will be logged out automatically in 1 minute.");
  };

  const logout = () => {
    // Send a logout request to the API
    console.log("Sending a logout request to the API...");
    destroy();
  };

  const destroy = () => {
    //clear the session
    browserHistory.push("/login");
    window.location.assign("/login");
  };

  return (
    <div>
      <ComposedClass {...this.props} />
    </div>
  );
}
