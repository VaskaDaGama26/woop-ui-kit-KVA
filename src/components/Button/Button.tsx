import { Arrow, Plus } from "@assets/icons";
import { borderRadius } from "@variables/atomic/borderRadius";
import { ButtonTokens } from "@variables/components";
import type { ButtonProps, ButtonState } from "./types";
import { useTheme } from "@hooks/useTheme";
import { useState } from "react";

const Button = ({
  size = "M",
  state: externalState,
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

  const [internalState, setInternalState] =
    useState<ButtonState>("default");

  const effectiveState: ButtonState = externalState ?? internalState;

  const {
    bg,
    color: textColor,
    boxShadow,
    border = 0,
  } = stateTokens[theme][layout][effectiveState];

  const isControlled = externalState !== undefined;

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
        cursor: effectiveState === "disabled" ? "not-allowed" : "pointer",
      }}
      disabled={effectiveState === "disabled"}
      {...(!isControlled && {
        onMouseEnter: () => setInternalState("hover"),
        onMouseLeave: () => setInternalState("default"),
        onFocus: () => setInternalState("focus"),
        onBlur: () => setInternalState("default"),
        onMouseDown: () => setInternalState("click"),
        onMouseUp: () => setInternalState("hover"),
      })}
      {...props}
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
          fillIcon={effectiveState === "active" ? textColor : undefined}
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
