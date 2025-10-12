import Button from "./Button";
import "@styles/globals.css";
import type {
  ButtonSize,
  ButtonLayout,
  ButtonState,
  ButtonIcon,
  ButtonCategory,
} from "./types";
import { IconityIcons } from "@assets/icons/index";
import type { IconName } from "@assets/icons/index";
import { withThemeProvider } from "@context/theme/ThemeDecorator";

const sizes: ButtonSize[] = ["S", "M", "L"];
const layouts: ButtonLayout[] = ["primary", "secondary", "tertiary"];
const states: ButtonState[] = [
  "default",
  "active",
  "hover",
  "click",
  "focus",
  "disabled",
];
const icons: ButtonIcon[] = ["none", "left", "right"];
const categories: ButtonCategory[] = ["standart", "icon"];

export default {
  title: "Design System/Molecules/Button",
  component: Button,
  decorators: [withThemeProvider],
  argTypes: {
    customIconName: {
      control: { type: "select" },
      options: Object.keys(IconityIcons),
    },
    customIcon: {
      control: { type: false },
    },
    children: {
      control: { type: false },
    },
  },
  tags: ["autodocs"],
};

type ButtonStoryArgs = {
  customIconName?: IconName;
  size?: "S" | "M" | "L";
  layout?: "primary" | "secondary" | "tertiary";
  state?: any;
  icon?: any;
  category?: any;
  children?: React.ReactNode;
};

export const Default = (args: ButtonStoryArgs) => {
  const { customIconName, ...rest } = args;
  const CustomIcon = customIconName
    ? IconityIcons[customIconName]
    : undefined;

  return <Button {...rest} customIcon={CustomIcon} />;
};

Default.args = {
  children: "Action",
  size: "M",
  layout: "primary",
  state: "default",
  icon: "none",
  category: "standart",
};

export const AllButtons = () => (
  <div style={{ display: "grid", gap: "50px" }}>
    {categories.map((category) => (
      <div key={category}>
        <h3>{category} buttons</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${sizes.length}, auto)`,
            gap: "50px",
          }}
        >
          {layouts.map((layout) =>
            sizes.map((size) => (
              <div key={`${layout}-${size}`}>
                <strong>
                  {layout} / {size}
                </strong>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  {(category === "standart" ? icons : ["left"]).map(
                    (icon) => (
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginTop: "5px",
                          justifyContent:
                            category === "icon"
                              ? "flex-start"
                              : "space-evenly",
                        }}
                        key={icon}
                      >
                        {states
                          .filter((state) => {
                            if (
                              category === "standart" &&
                              state === "active"
                            ) {
                              return false;
                            }
                            return true;
                          })
                          .map((state) => (
                            <Button
                              size={size as ButtonSize}
                              layout={layout as ButtonLayout}
                              state={state as ButtonState}
                              icon={icon as ButtonIcon}
                              category={category as ButtonCategory}
                              key={`${size}-${layout}-${state}-${icon}`}
                              customIcon={
                                category === "icon"
                                  ? IconityIcons.Heart
                                  : undefined
                              }
                            >
                              {category === "standart"
                                ? "Action"
                                : undefined}
                            </Button>
                          ))}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    ))}
  </div>
);
