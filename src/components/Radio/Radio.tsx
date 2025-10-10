// import { useState } from "react";
// import type { RadioProps } from "./types";
// import { stateTokens } from "@variables/components/Radio/stateTokens";

// const Radio = ({
//   state = "default",
//   value,
//   name,
//   ...props
// }: RadioProps) => {
//   const [isSelected, setSelected] = useState<string | null>(null);

//   const tokens = stateTokens[state] || stateTokens["default"];
//   const { bg, border, boxShadow } =
//     isSelected === value ? tokens.checked : tokens.unchecked;

//   const dotColor =
//     isSelected === value ? tokens.checked.dotColor : undefined;

//   return (
//     <label
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         cursor: state === "disabled" ? "not-allowed" : "pointer",
//         position: "relative",
//       }}
//     >
//       <input
//         type="radio"
//         name={name}
//         value={value}
//         checked={isSelected === value}
//         onChange={(e) => setSelected(e.target.value)}
//         disabled={state === "disabled"}
//         style={{
//           position: "absolute",
//           opacity: 0,
//           width: 0,
//           height: 0,
//         }}
//         {...props}
//       />

//       <span
//         style={{
//           display: "inline-flex",
//           justifyContent: "center",
//           alignItems: "center",
//           width: 16,
//           height: 16,
//           padding: 2,
//           borderRadius: "50%",
//           border: `2px solid ${border}`,
//           backgroundColor: bg,
//           boxShadow,
//           transition: "all 0.2s ease",
//         }}
//       >
//         {isSelected === value && (
//           <span
//             style={{
//               width: 12,
//               height: 12,
//               borderRadius: "50%",
//               backgroundColor: dotColor,
//             }}
//           />
//         )}
//       </span>
//     </label>
//   );
// };

// export default Radio;

import { useState } from "react";
import type { RadioProps, RadioState } from "./types";
import { stateTokens } from "@variables/components/Radio/stateTokens";

const Radio = ({
  state = "default",
  value,
  name,
  selectedValue,
  onChange,
  ...props
}: RadioProps) => {
  const [currentState, setCurrentState] = useState<RadioState>(state);

  const tokens = stateTokens[currentState] || stateTokens["default"];
  const { bg, border, boxShadow } =
    selectedValue === value ? tokens.checked : tokens.unchecked;
  const dotColor =
    selectedValue === value ? tokens.checked.dotColor : undefined;

  return (
    <label
      onMouseEnter={() =>
        state !== "disabled" && setCurrentState("hover")
      }
      onMouseLeave={() =>
        state !== "disabled" && setCurrentState("default")
      }
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: state === "disabled" ? "not-allowed" : "pointer",
        position: "relative",
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        disabled={state === "disabled"}
        onFocus={() =>
          state !== "disabled" && setCurrentState("focus")
        }
        onBlur={() =>
          state !== "disabled" && setCurrentState("default")
        }
        onMouseDown={() =>
          state !== "disabled" && setCurrentState("click")
        }
        onMouseUp={() =>
          state !== "disabled" && setCurrentState("hover")
        }
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
