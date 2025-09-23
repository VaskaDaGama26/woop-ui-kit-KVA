import icons from "./index";

const fillPath = "#7C7B7B";

export default {
  title: "Design System/Iconity",
  argTypes: {
    active: { control: "boolean" },
    size: { control: "radio", options: ["M", "S"] },
  },
  tags: ["autodocs"],
};
type IconGalleryArgs = { active: boolean; size: "M" | "S" };

export const AllIcons = ({ active, size }: IconGalleryArgs) => {
  const iconSize = {
    S: { width: "16", height: "16" },
    M: { width: "24", height: "24" },
  }[size];
  const columnSize = size === "S" ? "42px" : "50px";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${columnSize})`,
        justifyContent: "start",
      }}
    >
      {Object.entries(icons).map(([name, IconComponent]) => {
        const fillIcon = active ? fillPath : undefined;

        return (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: columnSize,
              paddingBlock: "12px",
              outline: "1px solid #EDEDED",
            }}
          >
            <IconComponent
              width={iconSize.width}
              height={iconSize.height}
              fillPath={fillPath}
              fillIcon={fillIcon}
            />
          </div>
        );
      })}
    </div>
  );
};

AllIcons.args = {
  active: false,
  size: "M",
};
