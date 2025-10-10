import { getFlagSrc } from "./FlagMap";
import type { FlagProps } from "./types";

const Flag = ({ country, width = 32 }: FlagProps) => {
  const src = getFlagSrc(country);

  if (!src) {
    console.warn(`❗ Flag for country "${country}" not found`);
    return null;
  }

  return <img src={src} alt={`${country} flag`} width={width} />;
};

export default Flag;
