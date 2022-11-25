import { IconProps } from "../../../types/IconProps";
import { Icon } from "./styles";

export interface PlaceholderIconProps {
    variant: 'primary' | 'secondary';
}

export function PlaceholderIcon(props: PlaceholderIconProps) {
    return (
        <Icon
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          className='placeholder__icon'
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.75 4.5a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1v3.75a1 1 0 1 1-2 0V5.5h-2.75a1 1 0 0 1-1-1ZM4.5 14.75a1 1 0 0 1 1 1v2.75h2.75a1 1 0 1 1 0 2H4.5a1 1 0 0 1-1-1v-3.75a1 1 0 0 1 1-1ZM19.5 14.75a1 1 0 0 1 1 1v3.75a1 1 0 0 1-1 1h-3.75a1 1 0 1 1 0-2h2.75v-2.75a1 1 0 0 1 1-1ZM3.5 4.5a1 1 0 0 1 1-1h3.75a1 1 0 0 1 0 2H5.5v2.75a1 1 0 0 1-2 0V4.5Z"
          fill={props.variant}
        />
      </Icon>
    )
}