import Social from "./Social";
import type { SocialType, SocialVariant } from "./types";

const types: SocialType[] = [
  "youtube",
  "instagram",
  "vk",
  "facebook",
  "odnoklassniki",
  "tiktok",
  "twitter",
  "whatsapp",
  "whatsapp business",
  "viber",
  "telegram",
  "yandex",
  "google",
];

const variants: SocialVariant[] = ["mono", "multi"];

export default {
  title: "Design System/Molecules/Social",
  component: Social,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    type: "youtube",
  },
};

export const AllSocials = () => (
  <div style={{ display: "grid", gap: "50px" }}>
    {types.map((type) => (
      <div key={type}>
        <h3>{type}</h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {variants.map((variant) => (
            <Social type={type} variant={variant} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
