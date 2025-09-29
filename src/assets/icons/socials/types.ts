export type SocialType =
  | "youtube"
  | "instagram"
  | "vk"
  | "facebook"
  | "odnoklassniki"
  | "tiktok"
  | "twitter"
  | "whatsapp"
  | "whatsapp business"
  | "viber"
  | "telegram"
  | "yandex"
  | "google";

export type SocialVariant = "mono" | "multi";

export interface SocialProps {
  type: SocialType;
  variant?: SocialVariant;
  size?: number;
}
