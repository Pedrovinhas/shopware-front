import { IconProps } from "../../types/IconProps"


export function CategoriesIcon(props: IconProps) {
  return (
    <svg
    width={24}
    height={24}
    fill={props.isFilled ? '#1B4B66' : 'none' }
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#clip0_188_293)"
      stroke="#1B4B66"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.125 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM16.875 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM7.125 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM16.875 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z" />
    </g>
    <defs>
      <clipPath id="clip0_188_293">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}




