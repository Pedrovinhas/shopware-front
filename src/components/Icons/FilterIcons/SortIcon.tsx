import { IconProps } from "../../../types/IconProps";

export function SortIcon(props: IconProps) {
    return (
         <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#B6B6B6"
      d="M2 4h4.444v4.571H2zM2 9.714h4.444v4.571H2zM2 15.429h4.444V20H2zM7.556 4H22v4.571H7.556zM7.556 9.714H22v4.571H7.556zM7.556 15.429H22V20H7.556z"
    />
  </svg>
    )
}