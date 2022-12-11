import { ReactNode } from "react"
import { StyledButton } from "./styles"

export interface ButtonProps {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'outline';
    size: 'large' | 'medium' | 'intermediary' | 'small' | 'smallTwo';
    withButton?: boolean | undefined;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export function Button({variant, size, children, withButton, className, disabled, onClick}: ButtonProps) {
    return (
        <StyledButton className={className} as='a' disabled={disabled} size={size} onClick={onClick} variant={variant} withButton={withButton}> 
            {children}
        </StyledButton>
    )
}