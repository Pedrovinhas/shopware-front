import { StyledBanner } from "./styles"

import { ReactNode } from "react";

export interface BannersProps {
    size: 'square' | 'small' | 'wide' | 'giant';
    children: ReactNode;
}


export function Banners({ size, children }: BannersProps) {
    return (
        <StyledBanner size={size}>
           {children}
        </StyledBanner>
    )
}