import type { CheckboxProps } from "./types";
import Check from "../../assets/icons/Check";
import { useState } from "react";
import { stateTokens } from "../../variables/components/Checkbox/stateTokens";
import color from "../../variables/atomic/color";

const Checkbox = ({ state = "default", ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const tokens = stateTokens[state] || stateTokens["default"];

  const { bg, border, boxShadow } =
    tokens[checked ? "checked" : "unchecked"];

  const iconColor = checked
    ? tokens.checked.iconColor
    : color.grayScale.white;

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: state === "disabled" ? "not-allowed" : "pointer",
        position: "relative",
        opacity: state === "disabled" ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        disabled={state === "disabled"}
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
          boxShadow,
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
