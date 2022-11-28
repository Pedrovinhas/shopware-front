import { IconProps } from "../../../types/IconProps"


export function ArrowIcon(props: IconProps) {
  return (
    <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 12.5h14m0 0L14.5 8m4.5 4.5L14.5 17"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}




