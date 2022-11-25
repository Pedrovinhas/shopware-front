import { IconProps } from "../../types/IconProps";

export function ProfileIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#a)">
          <path
            d="M2.272 19.314a1 1 0 0 0 1.456 1.372l-1.456-1.372Zm18 1.372a1 1 0 0 0 1.456-1.372l-1.456 1.372ZM15.5 7.5A3.5 3.5 0 0 1 12 11v2a5.5 5.5 0 0 0 5.5-5.5h-2ZM12 11a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 12 13v-2ZM8.5 7.5A3.5 3.5 0 0 1 12 4V2a5.5 5.5 0 0 0-5.5 5.5h2ZM12 4a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 12 2v2ZM3.728 20.686C5.893 18.389 8.808 17 12 17v-2c-3.795 0-7.222 1.656-9.728 4.314l1.456 1.372ZM12 17c3.191 0 6.107 1.389 8.272 3.686l1.456-1.372C19.222 16.656 15.795 15 12 15v2Z"
            fill="#1B4B66"
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