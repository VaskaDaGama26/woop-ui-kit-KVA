import { useState } from "react";
import type { RadioProps } from "./types";
import { stateTokens } from "../../variables/components/Radio/stateTokens";

const Radio = ({
  state = "default",
  value,
  name,
  ...props
}: RadioProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const tokens = stateTokens[state] || stateTokens["default"];
  const { bg, border, boxShadow } =
    selected === value ? tokens.checked : tokens.unchecked;

  const dotColor =
    selected === value ? tokens.checked.dotColor : undefined;

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
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={(e) => setSelected(e.target.value)}
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
          borderRadius: "50%",
          border: `2px solid ${border}`,
          backgroundColor: bg,
          boxShadow,
          transition: "all 0.2s ease",
        }}
      >
        {selected === value && (
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
