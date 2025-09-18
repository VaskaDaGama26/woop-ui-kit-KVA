import type { IconProps } from "./types";

const Minus = ({ fillPath, width, height, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.43557 12C2.43557 11.4192 2.90636 10.9485 3.48711 10.9485L20.3119 10.9485C20.8926 10.9485 21.3634 11.4192 21.3634 12C21.3634 12.5808 20.8926 13.0515 20.3119 13.0515L3.48711 13.0515C2.90636 13.0515 2.43557 12.5808 2.43557 12Z"
        fill={fillPath}
      />
    </svg>
  );
};
export default Minus;
