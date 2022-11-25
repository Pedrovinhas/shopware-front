import { IconProps } from "../../../types/IconProps";

export function ChevronRightSmallIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="m10 8 4 4-4 4"
          stroke="#13101E"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}