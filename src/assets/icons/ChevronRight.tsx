import type { IconProps } from "./types";

const ChevronRight = ({
  fillPath,
  width,
  height,
  ...props
}: IconProps) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_40_2424)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.33558 21.7474C6.9228 21.3805 6.88561 20.7484 7.25253 20.3356L14.662 12L7.25253 3.66435C6.88561 3.25157 6.92279 2.6195 7.33558 2.25258C7.74836 1.88566 8.38043 1.92284 8.74735 2.33563L16.1568 10.6713C16.8304 11.429 16.8304 12.5709 16.1568 13.3287L8.74735 21.6644C8.38043 22.0771 7.74836 22.1143 7.33558 21.7474Z"
          fill={fillPath}
        />
      </g>
      <defs>
        <clipPath id="clip0_40_2424">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ChevronRight;
