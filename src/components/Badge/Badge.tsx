import type { BadgeProps } from "./types";
import BadgeTokens from "@variables/components/Badge/index";

const { sizeTokens, stateTokens } = BadgeTokens;

const Badge = ({
  size = "M",
  state = "default",
  children = "Badge",
}: BadgeProps) => {
  const {
    bg,
    color: textColor,
    boxShadow,
    border = 0,
  } = stateTokens[state];

  const { padding, typography } = sizeTokens[size];

  return (
    <div
      style={{
        cursor: state === "disabled" ? "not-allowed" : "default",
        padding: padding,
        backgroundColor: bg,
        width: "fit-content",
        borderRadius: "4px",
        ...typography,
        color: textColor,
        boxShadow,
        border,
      }}
    >
      {children}
    </div>
  );
};

export default Badge;
