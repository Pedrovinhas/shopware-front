import { IconProps } from "../../../types/IconProps";

export function AddHomeIcon(props: IconProps) {
    return (
        <svg
        width={24}
        height={24}
        fill="none"
        cursor='pointer'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g
          clipPath="url(#a)"
          stroke="#1B4B66"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 7.757v8.486M16.243 12H7.757M19.023 3.75H4.477a.727.727 0 0 0-.727.727v14.546c0 .401.326.727.727.727h14.546a.727.727 0 0 0 .727-.727V4.477a.727.727 0 0 0-.727-.727Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    )
}