import { Arrow, Plus } from "@assets/icons";
import { borderRadius } from "@variables/atomic/borderRadius";
import { ButtonTokens } from "@variables/components";
import type { ButtonProps } from "./types";
import { useTheme } from "@hooks/useTheme";

const Button = ({
  size = "M",
  state = "default",
  layout = "primary",
  icon = "none",
  category = "standart",
  customIcon: CustomIcon,
  children,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const appliedIcon = category === "icon" ? "none" : icon;
  const appliedChildren = category === "icon" ? undefined : children;

  const { iconSizeTokens, standartSizeTokens, stateTokens } =
    ButtonTokens;
  const tokens =
    category === "icon" ? iconSizeTokens : standartSizeTokens;
  const { padding, typography, icon: iconSize } = tokens[size];

  const {
    bg,
    color: textColor,
    boxShadow,
    border = 0,
  } = stateTokens[theme][layout][state];

  return (
    <button
      style={{
        ...typography,
        padding,
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
    >
      {appliedIcon === "left" && (
        <Plus
          fillPath={textColor}
          width={`${iconSize.width}`}
          height={`${iconSize.height}`}
        />
      )}
      {category === "icon" && CustomIcon && (
        <CustomIcon
          fillIcon={state === "active" ? textColor : undefined}
          fillPath={textColor}
          width={`${iconSize.width}`}
          height={`${iconSize.height}`}
        />
      )}
      {appliedChildren}
      {appliedIcon === "right" && (
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
