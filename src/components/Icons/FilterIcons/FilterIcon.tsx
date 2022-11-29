import { IconProps } from "../../../types/IconProps";

export function FilterIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        cursor='pointer'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#a)">
          <path
            d="M3.945 4.5h16.11a.75.75 0 0 1 .554 1.255l-6.164 6.78a.75.75 0 0 0-.195.505v5.309a.75.75 0 0 1-.334.624l-3 2a.75.75 0 0 1-1.166-.624V13.04a.75.75 0 0 0-.195-.504L3.39 5.755A.75.75 0 0 1 3.945 4.5v0Z"
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