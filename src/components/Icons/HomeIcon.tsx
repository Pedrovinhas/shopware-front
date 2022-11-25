import { IconProps } from "../../types/IconProps"


export function HomeIcon(props: IconProps) {
  
  return (
  <svg
    width={24}
    height={24}
    fill={props.isFilled ? '#1B4B66' : 'none' }
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M14.25 19.5V15a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-8.668a.75.75 0 0 1 .245-.555l7.5-6.82a.75.75 0 0 1 1.009 0l7.5 6.82a.751.751 0 0 1 .246.555V19.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75v0Z"
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


