import styled from "styled-components";
import { BrandProps } from ".";

export const BrandImageContainer = styled.div<BrandProps>`
width: 10.5rem;
height: 10.5rem;

background-image: url(${props => props.src});
background-position: center;

cursor: pointer;
background-repeat: no-repeat;

background-color: ${props => props.theme.colors.accent};

    @media (max-width: 740px) {
        width: 6.25rem;
        height: 6.25rem;
    }

`