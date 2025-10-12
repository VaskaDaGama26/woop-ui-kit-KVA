import type { CheckboxProps, CheckboxState } from "./types";
import { Check } from "@assets/icons";
import { useState, useEffect } from "react";
import { stateTokens } from "@variables/components/Checkbox/stateTokens";
import color from "@variables/atomic/color";
import { useTheme } from "@hooks/useTheme";

const Checkbox = ({
  state = "default",
  value,
  ...props
}: CheckboxProps) => {
  const theme = useTheme();

  const [checked, setChecked] = useState(false);
  const [internalState, setInternalState] =
    useState<CheckboxState>(state);
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false);

  const isDisabled = state === "disabled";

  useEffect(() => {
    setInternalState(state);
  }, [state]);

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

  const tokens =
    stateTokens[theme][internalState] || stateTokens.light.default;
  const { bg, border, boxShadow } = checked
    ? tokens.checked
    : tokens.unchecked;
  const iconColor = checked
    ? tokens.checked.iconColor
    : color.grayScale.white;
  const visualBoxShadow =
    state === "focus" ||
    (internalState === "focus" && isKeyboardFocus)
      ? boxShadow
      : undefined;

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
    if (
      !isDisabled &&
      internalState !== "focus" &&
      state === "default"
    ) {
      setInternalState("hover");
    }
  };
  const handleMouseLeave = () => {
    if (
      !isDisabled &&
      internalState !== "focus" &&
      state === "default"
    ) {
      setInternalState("default");
    }
  };
  const handleMouseDown = () => {
    if (!isDisabled && state === "default") {
      setInternalState("click");
    }
  };
  const handleMouseUp = () => {
    if (
      !isDisabled &&
      internalState !== "focus" &&
      state === "default"
    ) {
      setInternalState("hover");
    }
  };

  return (
    <label
      style={{
        width: "fit-content",
        display: "inline-flex",
        alignItems: "center",
        cursor: isDisabled ? "not-allowed" : "pointer",
        position: "relative",
        opacity: isDisabled ? 0.6 : 1,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        value={value}
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
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
          border: `2px solid ${border}`,
          borderRadius: 4,
          backgroundColor: bg,
          boxShadow: visualBoxShadow,
          transition: "all 0.2s ease",
        }}
      >
        {checked && (
          <Check fillPath={iconColor} width="16" height="16" />
        )}
      </span>
    </label>
  );
};

export default Checkbox;
