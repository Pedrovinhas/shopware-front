import { ElementType, ReactNode } from "react";
import { StyledHeading } from "./styles";

export interface HeadingProps {
    size: 'midlarge'| 'ultralarge' | 'extralarge' | 'large' | 'medium' | 'small';
    title: 'medium' | 'regular' | 'bold' | 'strong';
    color: 'primary' | 'highEmphasis' | 'lowEmphasis' | 'bright' | 'brown' | 'dark' | 'lightText' | 'vibrant';
    decoration?: 'line-through'
    children: ReactNode;
    as?: ElementType;
    className?: string;
}


export function Heading({ as, children, size, title, color, decoration, className }: HeadingProps) {
    return (
        <StyledHeading size={size} as={'h1'} title={title} color={color} decoration={decoration} className={className}>
            {children}
        </StyledHeading>
    )
}