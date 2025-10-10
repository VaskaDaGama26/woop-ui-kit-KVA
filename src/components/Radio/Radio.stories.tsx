import { useState } from "react";
import Radio from "./Radio";
import "@styles/globals.css";

export default {
  title: "Design System/Molecules/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    selectedValue: { control: "text" },
    onChange: { action: "changed" },
  },
};

export const Default = {
  render: (args: any) => {
    const [selected, setSelected] = useState<string | null>(
      args.selectedValue || null
    );

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
  },
};

export const ThreeDots = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "6px" }}
    >
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
