export type AvatarSize = "XL" | "L" | "M" | "S";
export type AvatarType = "photo" | "initials" | "empty" | "add";
export type AvatarIndicator = "none" | "online" | "offline";

export interface AvatarProps {
  size?: AvatarSize;
  type?: AvatarType;
  indicator?: AvatarIndicator;
  children: React.ReactNode;
  imageSrc?: string;
}
