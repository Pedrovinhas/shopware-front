import styled from "styled-components";

export const Bar = styled.div `
    display: none;

    @media (max-width: 740px) {
        display: block;

        min-width: 360px;
        width: 100%;
        height: 24px;

        background-color: ${props => props.theme.colors.grey};
    }

`