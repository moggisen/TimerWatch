/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/TimerCard.jsx
import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";

const TimerCard = ({
  time,
  status,
  onStart,
  onPause,
  onRestart,
  running,
  paused,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <TimerDisplay time={time} />
      </div>
      <TimerButtons
        onStart={onStart}
        onPause={onPause}
        onRestart={onRestart}
        running={running}
        paused={paused}
      />
      <div className="timer-status">
        <p>{status}</p> {/* Här visas statusen */}
      </div>
    </div>
  );
};

export default TimerCard;
