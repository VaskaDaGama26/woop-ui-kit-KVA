import type { IconProps } from "./types";

const Send = ({ fillIcon, fillPath, width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {!fillIcon && (
        <g clip-path="url(#clip0_40_2293)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.99934 10.1748C2.32882 10.9676 2.50807 13.3988 4.27564 13.9223L9.45473 15.4563L10.7172 20.2262C11.1909 22.0162 13.6304 22.2579 14.4618 20.5972L21.959 5.62312C22.8161 3.91117 21.0335 2.09038 19.304 2.9112L3.99934 10.1748ZM17.545 5.96986L4.85542 11.9923L9.99907 13.5158L17.545 5.96986ZM11.405 14.9496L12.663 19.7029L18.6904 7.66419L11.405 14.9496Z"
            fill={fillPath}
          />
        </g>
      )}
      {fillIcon && (
        <>
          <g clip-path="url(#clip0_40_2293)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.99934 10.1748C2.32882 10.9676 2.50807 13.3988 4.27564 13.9223L9.45473 15.4563L10.7172 20.2262C11.1909 22.0162 13.6304 22.2579 14.4618 20.5972L21.959 5.62312C22.8161 3.91117 21.0335 2.09038 19.304 2.9112L3.99934 10.1748ZM17.545 5.96986L4.85542 11.9923L9.99907 13.5158L17.545 5.96986ZM11.405 14.9496L12.663 19.7029L18.6904 7.66419L11.405 14.9496Z"
              fill={fillIcon}
            />
            <path
              d="M17.545 5.96986L4.85542 11.9923L9.99907 13.5158L17.545 5.96986Z"
              fill={fillIcon}
            />
            <path
              d="M11.405 14.9496L12.663 19.7029L18.6904 7.66419L11.405 14.9496Z"
              fill={fillIcon}
            />
          </g>
          <defs>
            <clipPath id="clip0_40_2293">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </>
      )}
    </svg>
  );
};

export default Send;
