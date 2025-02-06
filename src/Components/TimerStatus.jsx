/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/TimerStatus.jsx
import React from "react";

const TimerStatus = ({ status }) => {
  return (
    <div className="timer-status">
      <p>{status}</p>
    </div>
  );
};

export default TimerStatus;