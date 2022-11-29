import { ReactNode } from "react";
import { AppBarContainer, AppBarOptionalIcons, AppBarTextWithIcon } from "./styles";

export interface AppBarProps {
    children: ReactNode;
    optionalIcons?: ReactNode;
}

export function AppBar({ children, optionalIcons}: AppBarProps) {
    return (
        <AppBarContainer>
            <AppBarTextWithIcon>
                {children}
            </AppBarTextWithIcon>
            <AppBarOptionalIcons>
                {optionalIcons}
            </AppBarOptionalIcons>
        </AppBarContainer>
    )
}