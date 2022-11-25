import { IconProps } from "../../types/IconProps";

export function CheckIcon(props: IconProps) {
    return (
        <svg
        width={14}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5.314 9.699a.453.453 0 0 1-.628 0L.734 5.906a.977.977 0 0 1 1.352-1.41L5 7.284l6.91-6.63a.98.98 0 1 1 1.356 1.413L5.314 9.7Z"
          fill="#fff"
        />
      </svg>
    )
}