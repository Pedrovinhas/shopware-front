import { ElementType, ReactNode } from "react";
import { StyledHeading } from "./styles";

export interface HeadingProps {
    size: 'midlarge'| 'ultralarge' | 'extralarge' | 'large' | 'medium' | 'small';
    title: 'medium' | 'regular' | 'bold' | 'strong';
    color: 'primary' | 'highEmphasis' | 'lowEmphasis' | 'bright' | 'brown' | 'dark';
    children: ReactNode;
    as?: ElementType;
}


export function Heading({ as, children, size, title, color }: HeadingProps) {
    return (
        <StyledHeading size={size} as={'h1'} title={title} color={color}>
            {children}
        </StyledHeading>
    )
}