import { borderRadius } from "../variables/atomic/borderRadius";
import ButtonTokens from "../variables/components/Button/index";
import type { ButtonProps } from "./types";

const Button = ({
  size = "M",
  state = "default",
  layout = "primary",
  children,
  ...props
}: ButtonProps) => {
  //   const [isHovered, setHovered] = useState(false);
  //   const [isClicked, setClicked] = useState(false);
  //   const [isFocused, setFocused] = useState(false);
  const { sizeTokens, stateTokens } = ButtonTokens;
  const { padding, typography } = sizeTokens[size];
  const {
    bg,
    color: textColor,
    boxShadow,
    border = 0,
  } = stateTokens[layout][state];

  return (
    <button
      style={{
        // sizeTokens
        ...typography,
        padding,

        // stateColors
        background: bg,
        color: textColor,
        boxShadow,
        border,

        borderRadius: borderRadius.base,
        transition: "all 0.2s ease",

        cursor: state === "disabled" ? "not-allowed" : "pointer",
      }}
      {...props}
      disabled={state === "disabled"}
      // Events
      //   onMouseEnter={() => setHovered(true)}
      //   onMouseLeave={() => setHovered(false)}
      //   onMouseDown={() => setClicked(true)}
      //   onMouseUp={() => setClicked(false)}
      //   onFocus={() => setFocused(true)}
      //   onBlur={() => setFocused(false)}
    >
      {children}
    </button>
  );
};

export default Button;
