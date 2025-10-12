import Avatar from "./Avatar";
import "@styles/globals.css";
import type {
  AvatarIndicator,
  AvatarSize,
  AvatarType,
} from "./types";
import { withThemeProvider } from "@context/theme/ThemeDecorator";

const types: AvatarType[] = ["photo", "initials", "empty", "add"];
const sizes: AvatarSize[] = ["XL", "L", "M", "S"];
const indicators: AvatarIndicator[] = ["none", "online", "offline"];

export default {
  title: "Design System/Molecules/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
};

export const Default = {
  args: {
    imageSrc: "src/components/Avatar/TestAvatar2.svg",
  },
};

export const AllAvatars = () => (
  <div style={{ display: "grid", gap: "50px" }}>
    {sizes.map((size) => (
      <div key={size}>
        <h3>{size}</h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {types.map((type) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {indicators.map((indicator) => (
                <Avatar size={size} type={type} indicator={indicator}>
                  VK
                </Avatar>
              ))}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
