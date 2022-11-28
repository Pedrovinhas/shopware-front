import styled, { css } from "styled-components";

export const NavSeparator = styled.div`
    width: 100%;
    height: 1px;

    background-color: rgba(0, 0, 0, 0.12);

    
    ${(props) => props.color === 'primaryTint' && css`
        font-size: ${props => props.theme.colors.primaryTint};
    `} 


`