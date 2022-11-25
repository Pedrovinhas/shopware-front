import { ReactNode } from "react";
import { StyledBreadcrumb } from "./styles";

export interface BreadcrumbsProps {
    children: ReactNode;
    onClick?: () => void;
}

export function Breadcrumbs({ children, onClick }: BreadcrumbsProps) {
    return (
        <StyledBreadcrumb onClick={onClick}>
            { children }
        </StyledBreadcrumb>
    )
}