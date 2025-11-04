import { useState, useEffect } from "react";
import type { ToggleProps, ToggleState } from "./types";
import { stateTokens } from "@variables/components/Toggle/stateTokens";
import { Check, Close, Sun, Moon } from "@assets/icons";
import { useTheme } from "@hooks/useTheme";

const Toggle = ({
  state: externalState,
  layout = "primary",
}: ToggleProps & { state?: ToggleState }) => {
  const theme = useTheme();
  const [isChecked, setChecked] = useState(false);
  const [internalState, setInternalState] = useState<ToggleState>(
    externalState || "default"
  );
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);

  useEffect(() => {
    if (externalState) setInternalState(externalState);
  }, [externalState]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") setIsKeyboardFocus(true);
    };
    const handleMouseDown = () => setIsKeyboardFocus(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const tokens =
    stateTokens[theme][layout][internalState] ||
    stateTokens.light.primary.default;

  const { bg, boxShadow, color, fillPath } = isChecked
    ? tokens.checked
    : tokens.unchecked;

  const isDisabled = internalState === "disabled";

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
    boxShadow: "none",
    willChange: "transform, box-shadow",
  };

  const handleMouseEnter = () => {
    if (!externalState && !isDisabled) setInternalState("hover");
  };
  const handleMouseLeave = () => {
    if (!externalState && !isDisabled) setInternalState("default");
  };
  const handleFocus = () => {
    if (!externalState && !isDisabled && isKeyboardFocus) {
      setInternalState("focus");
    }
  };
  const handleBlur = () => {
    if (!externalState && !isDisabled) setInternalState("default");
  };

  return (
    <label
      style={{
        display: "inline-block",
        height: "32px",
        lineHeight: "32px",
        position: "relative",
        verticalAlign: "middle",
        fontSize: "14px",
        userSelect: "none",
        cursor: isDisabled ? "not-allowed" : "pointer",
        marginRight: "10px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          opacity: 0,
          zIndex: -1,
        }}
      />
      <span
        style={{
          position: "relative",
          display: "inline-block",
          boxSizing: "border-box",
          width: "60px",
          height: "32px",
          borderRadius: "25%/50%",
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
