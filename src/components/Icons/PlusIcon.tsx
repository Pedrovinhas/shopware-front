import { IconProps } from "../../types/IconProps";

export function PlusIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g
          clipPath="url(#a)"
          stroke="#13101E"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 7v10M17 12H7" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    )
}