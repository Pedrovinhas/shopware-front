import styled, { css } from "styled-components";
import { PlaceholderIconProps } from ".";

export const Icon = styled.svg<PlaceholderIconProps>`

${(props) => props.variant === 'primary' && css`
       
        path {
            fill: ${props => props.theme.colors.bright};
        }
    `}

    ${(props) => props.variant === 'secondary' && css`
       
        path {
            fill: ${props => props.theme.colors.primary};
            transition: ${props => props.theme.animation.easeOut};
            &:hover {
                fill: ${props => props.theme.colors.primaryTint};
            }
        }
    `}

`