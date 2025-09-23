import Badge from "./Badge";
import type { BadgeSize, BadgeState } from "./types";

const sizes: BadgeSize[] = ["M", "S"];
const states: BadgeState[] = [
  "default",
  "new",
  "active",
  "disabled",
  "outlined",
];

export default {
  title: "Design System/Molecules/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: false },
    },
  },
};

export const Default = {
  args: {},
};

export const AllBadges = () => (
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
          {states.map((state) => (
            <Badge size={size} state={state} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
