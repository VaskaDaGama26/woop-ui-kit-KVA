import Arrow from "../assets/icons/Button/Arrow";
import Plus from "../assets/icons/Button/Plus";
import { borderRadius } from "../variables/atomic/borderRadius";
import ButtonTokens from "../variables/components/Button/index";
import type { ButtonProps } from "./types";

const Button = ({
  size = "M",
  state = "default",
  layout = "primary",
  icon = "none",
  children,
  ...props
}: ButtonProps) => {
  //   const [isHovered, setHovered] = useState(false);
  //   const [isClicked, setClicked] = useState(false);
  //   const [isFocused, setFocused] = useState(false);
  const { sizeTokens, stateTokens } = ButtonTokens;
  const { padding, typography, icon: iconSize } = sizeTokens[size];
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

        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
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
      {icon === "left" && (
        <Plus
          fillPath={textColor}
          width={`${iconSize.width}`}
          height={`${iconSize.height}`}
        />
      )}
      {children}
      {icon === "right" && (
        <Arrow
          fillPath={textColor}
          width={`${iconSize.width}`}
          height={`${iconSize.height}`}
        />
      )}
    </button>
  );
};

export default Button;
