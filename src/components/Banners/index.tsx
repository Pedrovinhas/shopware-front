import { StyledBanner } from "./styles"

import { ReactNode } from "react";

export interface BannersProps {
    size: 'square' | 'small' | 'wide' | 'giant';
    children: ReactNode;
    onClick?: () => void;
}


export function Banners({ size, children, onClick }: BannersProps) {
    return (
        <StyledBanner size={size} onClick={onClick}>
           {children}
        </StyledBanner>
    )
}