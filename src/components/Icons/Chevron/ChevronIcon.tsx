import { IconProps } from "../../../types/IconProps";

export function ChevronIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M19.5 9 12 16.5 4.5 9"
          stroke="#13101E"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}