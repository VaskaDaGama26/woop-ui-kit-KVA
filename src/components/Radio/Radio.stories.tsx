import { useState, useEffect } from "react";
import Radio from "./Radio";
import "@styles/globals.css";
import { withThemeProvider } from "@context/theme/ThemeDecorator";

export default {
  title: "Design System/Molecules/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "radio",
      options: ["default", "hover", "focus", "click", "disabled"],
    },
    onChange: { action: "changed" },
  },
  decorators: [withThemeProvider],
};

export const Default = {
  render: (args: any) => {
    const [selected, setSelected] = useState<string | null>(
      args.selectedValue || null
    );

    useEffect(() => {
      if (args.selectedValue !== selected) {
        setSelected(args.selectedValue);
      }
    }, [args.selectedValue]);

    return (
      <Radio
        {...args}
        selectedValue={selected}
        onChange={(val: string) => {
          setSelected(val);
          args.onChange(val);
        }}
      />
    );
  },
  args: {
    value: "1",
    name: "test",
    state: "default",
    selectedValue: null,
  },
};

export const ThreeDots = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {["1", "2", "3"].map((val) => (
        <Radio
          key={val}
          value={val}
          name="test"
          selectedValue={selected}
          onChange={setSelected}
        />
      ))}
    </div>
  );
};
