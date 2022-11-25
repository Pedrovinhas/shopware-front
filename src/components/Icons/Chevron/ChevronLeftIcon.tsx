import { IconProps } from "../../../types/IconProps";

export function ChevronLeftIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        cursor='pointer'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#a)">
          <path
            d="M15 19.5 7.5 12 15 4.5"
            stroke="#13101E"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    )
}