import { ElementType, ReactNode } from "react";
import { StyledText } from "./styles";

export interface TextProps {
    size: 'large' | 'medium' | 'small' | 'extralarge' | 'doublexlg';
    title: 'medium' | 'regular' | 'normal';
    color: 'primary' | 'highEmphasis' | 'lowEmphasis' | 'brown' | 'bright' | 'lightText' | 'discount';
    decoration?: 'line-through' | 'normal'
    children: ReactNode;
    onClick?: () => void;
    as?: ElementType;
}


export function Text({ as, children, size, title, color, onClick, decoration }: TextProps) {
    return (
        <StyledText size={size} title={title} color={color} as={as} onClick={onClick} decoration={decoration}>
            {children}
        </StyledText>
    )
}
