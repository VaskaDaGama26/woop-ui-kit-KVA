import { useState } from "react";
import type { ToggleProps } from "./types";
import { stateTokens } from "../../variables/components/Toggle/stateTokens";
import Check from "../../assets/icons/Check";
import Close from "../../assets/icons/Close";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";

const Toggle = ({
  state = "default",
  layout = "primary",
}: ToggleProps) => {
  const [isChecked, setChecked] = useState(false);
  const [isActive, setActive] = useState(false);

  const tokens =
    stateTokens[layout][state] || stateTokens["primary"]["default"];

  const { bg, boxShadow, color, fillPath } = isChecked
    ? tokens.checked
    : tokens.unchecked;

  const getIconStyles = (visible: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: visible
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0.8)",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.2s, transform 0.2s",
  });

  const thumbStyles: React.CSSProperties = {
    position: "absolute",
    top: "4px",
    left: "4px",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.15s, box-shadow 0.1s",
    transform: isChecked ? "translateX(28px)" : "translateX(0)",
    boxShadow:
      state !== "disabled" && isActive
        ? "inset 0 0 2px rgba(0, 0, 0, 0.3)"
        : "none",
    willChange: "transform, box-shadow",
  };

  return (
    <label
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      style={{
        display: "inline-block",
        height: "32px",
        lineHeight: "32px",
        marginRight: "10px",
        position: "relative",
        verticalAlign: "middle",
        fontSize: "14px",
        userSelect: "none",
        cursor: state === "disabled" ? "not-allowed" : "pointer",
      }}
    >
      <input
        style={{
          display: "block",
          width: 0,
          height: 0,
          position: "absolute",
          zIndex: -1,
          opacity: 0,
        }}
        type="checkbox"
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
        disabled={state === "disabled"}
      />
      <span
        style={{
          position: "relative",
          display: " inline-block",
          boxSizing: "border-box",
          width: "60px",
          height: "32px",
          border: "none",
          borderRadius: "25%/50%",
          verticalAlign: "top",
          transition: "0.2s",

          backgroundColor: bg,
          boxShadow: boxShadow,
          color: color,
        }}
      >
        <span style={thumbStyles}>
          {layout === "boolean" && (
            <>
              <Check
                fillPath={fillPath!}
                width="16"
                height="16"
                style={getIconStyles(isChecked)}
              />
              <Close
                fillPath={fillPath!}
                width="16"
                height="16"
                style={getIconStyles(!isChecked)}
              />
            </>
          )}
          {layout === "theme" && (
            <>
              <Moon
                fillPath={fillPath!}
                width="16"
                height="16"
                style={getIconStyles(isChecked)}
              />
              <Sun
                fillPath={fillPath!}
                width="16"
                height="16"
                style={getIconStyles(!isChecked)}
              />
            </>
          )}
        </span>
      </span>
    </label>
  );
};

export default Toggle;
