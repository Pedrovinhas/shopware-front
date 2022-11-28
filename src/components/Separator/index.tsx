import { NavSeparator } from "./styles";

export interface SeparatorProps {
    color?: 'primaryTint'

}

export function Separator({ color }: SeparatorProps) {
    return (
        <NavSeparator color={color}>
            
        </NavSeparator>
    )
}