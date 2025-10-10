import Flag from "./Flag";
import flagMap from "./FlagMap";

const countries = Object.keys(flagMap)
  .map((path) => path.split("/").pop()?.replace(".svg", ""))
  .filter(Boolean)
  .sort();

export default {
  title: "Design System/Molecules/Flag",
  component: Flag,
  tags: ["autodocs"],
  argTypes: {
    country: {
      control: { type: "select" },
      options: countries,
    },
    width: {
      control: { type: "number" },
    },
  },
};

export const Default = {
  args: {
    country: "RU",
  },
};
