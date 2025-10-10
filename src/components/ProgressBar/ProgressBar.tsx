import React, { useState } from "react";
import "./ProgressBar.css";
import type { ProgressBarProps } from "./types";
import { stateTokens } from "@variables/components/ProgressBar/stateTokens";

const ProgressBar = ({
  min = 0,
  max = 100,
  step = 1,
  state = "hover",
}: ProgressBarProps) => {
  const [value, setValue] = useState((min + max) / 2);
  const percent = max > min ? ((value - min) / (max - min)) * 100 : 0;

  const { bg, trackBg, circleBg } = stateTokens[state];

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="range"
      style={
        {
          "--progress": `${percent}%`,
          "--bg-color": bg,
          "--track-bg": trackBg,
          "--circle-bg": circleBg,
        } as React.CSSProperties
      }
    />
  );
};

export default ProgressBar;
