import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`

    width: 328px;
    height: 44px;
    /* padding: 10px 120px; */

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    outline: none;
    font-size: ${props => props.theme.fontSizes.md};
    font-weight: ${props => props.theme.fontWeights.big};
    
    border: none;
    border-radius: ${props => props.theme.radii.base};

    transition: ${props => props.theme.animation.easeOut};


    &:disabled {
        background: ${props => props.theme.colors.grey};
        cursor: disabled;
    }

    &:focus {
        border: 2px solid ${props => props.theme.colors.primaryTint};
        color: ${props => props.theme.colors.lightText};
        transition: none;
    }

    ${(props) => props.size === 'small' && css`
        width: 6.4375rem;
        height: 2.75rem;

    `}

    ${(props) => props.size === 'smallTwo' && css`
        width: 8.5rem;
        height: 2.75rem;

    `}

    ${(props) => props.size === 'medium' && css`
        width: 15rem;
        height:2.75rem;

    `}

    ${(props) => props.size === 'intermediary' && css`
        width: 11.25rem;
        height:2.75rem;

    `}

    ${(props) => props.variant === 'primary' && css`

    color: ${props => props.theme.colors.bright};
    background: ${props => props.theme.colors.primary};

    &:hover {
        background: ${props => props.theme.colors.primaryTint};
    }

    `} 
    
    ${(props) => props.variant === 'secondary' && css`

    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.accent};

    &:hover {
        color: ${props => props.theme.colors.primaryTint};

        .placeholder__icon {
        fill: ${props => props.theme.colors.primaryTint};
        }
    }

    &:focus {
        color: ${props => props.theme.colors.primary};
      
    }

    `} 

    ${(props) => props.variant === 'outline' && css`

    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.accent};
    border: 2px solid ${props => props.theme.colors.primary};

    &:hover {
        color: ${props => props.theme.colors.primaryTint};
    }

    &:focus {
        color: ${props => props.theme.colors.primary};
    }

    &:disabled {
        border: 2px solid ${props => props.theme.colors.lightText};
        background: ${props => props.theme.colors.bright};
    }

    `} 

    ${(props) => props.withButton === true && css`
        display: flex;
    `}

    ${(props) => props.withButton === false && css`
         display: none;
    `}
`