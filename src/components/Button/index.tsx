import { ReactNode } from "react"
import { StyledButton } from "./styles"

export interface ButtonProps {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'outline';
    size: 'large' | 'medium' | 'intermediary' | 'small';
    withButton?: boolean | undefined;
    onClick?: () => void;
    disabled?: boolean;
}

export function Button({variant, size, children, withButton, disabled, onClick}: ButtonProps) {
    return (
        <StyledButton as='a' disabled={disabled} size={size} onClick={onClick} variant={variant} withButton={withButton}> 
            {children}
        </StyledButton>
    )
}