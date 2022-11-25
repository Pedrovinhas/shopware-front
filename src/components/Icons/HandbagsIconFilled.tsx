import { IconProps } from "../../types/IconProps"


export function HandbagsIconFilled(props: IconProps) {
  return (
    <svg
    width={24}
    height={24}
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M19.579 6.75H4.42a.75.75 0 0 0-.745.667l-1.334 12a.75.75 0 0 0 .746.833h17.824a.75.75 0 0 0 .745-.833l-1.333-12a.75.75 0 0 0-.745-.667Z"
        fill="#1B4B66"
      />
      <path
        d="M8.25 9.75v-3a3.75 3.75 0 0 1 7.5 0v3"
        stroke="#1B4B66"
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



