import { IconProps } from "../../../types/IconProps";

export function SortMobileIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        cursor='pointer'
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
          <path d="m13.5 15.75 3.75 3.75L21 15.75M17.25 10.5v9M4.5 12h6.75M4.5 6h12.75M4.5 18h5.25" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    )
}