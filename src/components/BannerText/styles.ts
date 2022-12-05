import styled from "styled-components";

export const StyledBannerDiv = styled.div`
    background-color: #F0F0F0;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 3.125rem;

    margin-bottom: 24px;

    .here {
        text-decoration: underline;
        color: ${props => props.theme.colors.primary};
    }

`