import YouTubeMulti from "./images/YouTubeMulti.svg";
import YouTubeMono from "./images/YouTubeMono.svg";

import InstagramMulti from "./images/InstagramMulti.svg";
import InstagramMono from "./images/InstagramMono.svg";

import VKMulti from "./images/VKMulti.svg";
import VKMono from "./images/VKMono.svg";

import FacebookMulti from "./images/FacebookMulti.svg";
import FacebookMono from "./images/FacebookMono.svg";

import OdnoklassnikiMulti from "./images/OdnoklassnikiMulti.svg";
import OdnoklassnikiMono from "./images/OdnoklassnikiMono.svg";

import TikTokMulti from "./images/TikTokMulti.svg";
import TikTokMono from "./images/TikTokMono.svg";

import TwitterMulti from "./images/TwitterMulti.svg";
import TwitterMono from "./images/TwitterMono.svg";

import WhatsAppMulti from "./images/WhatsAppMulti.svg";
import WhatsAppMono from "./images/WhatsAppMono.svg";

import WhatsAppBusinessMulti from "./images/WhatsAppBusinessMulti.svg";
import WhatsAppBusinessMono from "./images/WhatsAppBusinessMono.svg";

import ViberMulti from "./images/ViberMulti.svg";
import ViberMono from "./images/ViberMono.svg";

import TelegramMulti from "./images/TelegramMulti.svg";
import TelegramMono from "./images/TelegramMono.svg";

import YandexMulti from "./images/YandexMulti.svg";
import YandexMono from "./images/YandexMono.svg";

import GoogleMulti from "./images/GoogleMulti.svg";
import GoogleMono from "./images/GoogleMono.svg";
import type { SocialProps, SocialType } from "./types";

const iconMap: Record<
  SocialType,
  {
    mono: string;
    multi: string;
  }
> = {
  youtube: {
    mono: YouTubeMono,
    multi: YouTubeMulti,
  },
  instagram: {
    mono: InstagramMono,
    multi: InstagramMulti,
  },
  vk: {
    mono: VKMono,
    multi: VKMulti,
  },
  facebook: {
    mono: FacebookMono,
    multi: FacebookMulti,
  },
  odnoklassniki: {
    mono: OdnoklassnikiMono,
    multi: OdnoklassnikiMulti,
  },
  tiktok: {
    mono: TikTokMono,
    multi: TikTokMulti,
  },
  twitter: {
    mono: TwitterMono,
    multi: TwitterMulti,
  },
  whatsapp: {
    mono: WhatsAppMono,
    multi: WhatsAppMulti,
  },
  "whatsapp business": {
    mono: WhatsAppBusinessMono,
    multi: WhatsAppBusinessMulti,
  },
  viber: {
    mono: ViberMono,
    multi: ViberMulti,
  },
  telegram: {
    mono: TelegramMono,
    multi: TelegramMulti,
  },
  yandex: {
    mono: YandexMono,
    multi: YandexMulti,
  },
  google: {
    mono: GoogleMono,
    multi: GoogleMulti,
  },
};

const Social = ({
  type,
  variant = "mono",
  size = 24,
}: SocialProps) => {
  const iconEntry = iconMap[type];

  if (!iconEntry) {
    console.warn(`Icon for type "${type}" not found`);
    return null;
  }

  const src = iconEntry[variant];
  return <img src={src} alt={type} width={size} height={size} />;
};

export default Social;
