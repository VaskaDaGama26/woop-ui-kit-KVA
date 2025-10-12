import type { AvatarProps } from "./types";
import AvatarTokens from "@variables/components/Avatar/index";
import { User, Plus } from "@assets/icons";
import { useTheme } from "@hooks/useTheme";

const Avatar = ({
  type = "empty",
  indicator = "none",
  size = "M",
  children = "LZ",
  imageSrc = "src/components/Avatar/TestAvatar.svg",
}: AvatarProps) => {
  const theme = useTheme();
  const { sizeTokens, stateTokens } = AvatarTokens;

  const { bg, color } = stateTokens[theme][type];
  const {
    sizes,
    typography,
    icon: iconSize,
    indicatorSizes,
    indicatorColor,
  } = sizeTokens[size];

  return (
    <div
      style={{
        ...sizes,
        ...typography,
        color: color,
        backgroundColor: bg,

        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
      }}
    >
      {type === "empty" && (
        <User
          width={`${iconSize.width}`}
          height={`${iconSize.height}`}
          fillPath="#8A8A8A"
        />
      )}
      {type === "add" && (
        <Plus
          width={`${iconSize.width}`}
          height={`${iconSize.height}`}
          fillPath="#2D5BFF"
        />
      )}
      {type === "initials" && children}
      {type === "photo" && (
        // example image
        <img
          style={{
            ...sizes,
          }}
          src={imageSrc}
          alt="Test Image"
        />
      )}
      {indicator !== "none" && type !== "add" && (
        <span
          style={{
            position: "absolute",
            ...indicatorSizes,
            backgroundColor:
              indicator === "online"
                ? indicatorColor.online
                : indicatorColor.offline,
            borderRadius: 999,
          }}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
