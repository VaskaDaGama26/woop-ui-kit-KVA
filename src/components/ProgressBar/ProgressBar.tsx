import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import type { ProgressBarProps, ProgressBarState } from "./types";
import { stateTokens } from "@variables/components/ProgressBar/stateTokens";
import { useTheme } from "@hooks/useTheme";

const ProgressBar = ({
  min = 0,
  max = 100,
  step = 1,
  state = "default",
}: ProgressBarProps) => {
  const theme = useTheme();
  const [internalState, setInternalState] =
    useState<ProgressBarState>(state);
  const [value, setValue] = useState((min + max) / 2);

  useEffect(() => {
    setInternalState(state);
  }, [state]);

  const percent = max > min ? ((value - min) / (max - min)) * 100 : 0;

  const { bg, trackBg, circleBg } =
    stateTokens[theme][internalState] || stateTokens.light.default;

  const handleMouseEnter = () => {
    if (state === "default") setInternalState("hover");
  };
  const handleMouseLeave = () => {
    if (state === "default") setInternalState("default");
  };
  const handleMouseDown = () => {
    if (state === "default") setInternalState("active");
  };
  const handleMouseUp = () => {
    if (state === "default") setInternalState("hover");
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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
