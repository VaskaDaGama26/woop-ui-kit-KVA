import { useState, useEffect } from "react";
import type { RadioProps, RadioState } from "./types";
import { stateTokens } from "@variables/components/Radio/stateTokens";
import { useTheme } from "@hooks/useTheme";

const Radio = ({
  state = "default",
  value,
  name,
  selectedValue,
  onChange,
  ...props
}: RadioProps) => {
  const theme = useTheme();
  const [internalState, setInternalState] =
    useState<RadioState>(state);
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false);

  const isDisabled = state === "disabled";

  useEffect(() => {
    const handleKeyDown = () => setIsUsingKeyboard(true);
    const handleMouseDown = () => setIsUsingKeyboard(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    if (state !== internalState) setInternalState(state);
  }, [state]);

  const handleFocus = () => {
    if (!isDisabled) {
      setInternalState("focus");
      setIsKeyboardFocus(isUsingKeyboard);
    }
  };
  const handleBlur = () => {
    if (!isDisabled) {
      setInternalState("default");
      setIsKeyboardFocus(false);
    }
  };
  const handleMouseEnter = () => {
    if (!isDisabled && internalState !== "focus")
      setInternalState("hover");
  };
  const handleMouseLeave = () => {
    if (!isDisabled && internalState !== "focus")
      setInternalState("default");
  };
  const handleMouseDown = () => {
    if (!isDisabled) setInternalState("click");
  };
  const handleMouseUp = () => {
    if (!isDisabled && internalState !== "focus")
      setInternalState("hover");
  };

  const tokens =
    stateTokens[theme][internalState] || stateTokens.light.default;
  const { bg, border, boxShadow } =
    selectedValue === value ? tokens.checked : tokens.unchecked;
  const dotColor =
    selectedValue === value ? tokens.checked.dotColor : undefined;
  const visualBoxShadow =
    state === "focus" ||
    (internalState === "focus" && isKeyboardFocus)
      ? boxShadow
      : undefined;

  return (
    <label
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-flex",
        width: "fit-content",
        alignItems: "center",
        cursor: isDisabled ? "not-allowed" : "pointer",
        position: "relative",
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          position: "absolute",
          opacity: 0,
          width: 0,
          height: 0,
        }}
        {...props}
      />

      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: 16,
          height: 16,
          padding: 2,
          borderRadius: "50%",
          border: `2px solid ${border}`,
          backgroundColor: bg,
          boxShadow: visualBoxShadow,
          transition: "all 0.2s ease",
        }}
      >
        {selectedValue === value && (
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: dotColor,
            }}
          />
        )}
      </span>
    </label>
  );
};

export default Radio;
