import styled, { css } from 'styled-components';
// import { ButtonProps } from '.';

export const StyledChips = styled.button`

    width: 105px;
    height: 32px;
    padding: 7px 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4px;

    cursor: pointer;

    outline: none;
    font-size: ${props => props.theme.fontSizes.md};
    font-weight: ${props => props.theme.fontWeights.big};
    
    border: none;
    border-radius: ${props => props.theme.radii.base};

    transition: ${props => props.theme.animation.easeOut};

    background: ${props => props.theme.colors.accent};

    &:hover {
        background: ${props => props.theme.colors.grey};
    }


    &:disabled {
        background: ${props => props.theme.colors.lightText};
        color: ${props => props.theme.colors.grey};
        cursor: disabled;
    }

    &:focus {
        border: 2px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.lightText};
        transition: none;
    }


   
`