import { IconProps } from "../../../types/IconProps";

export function ChevronRightIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        cursor='pointer'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="m9 4.5 7.5 7.5L9 19.5"
          stroke="#13101E"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}