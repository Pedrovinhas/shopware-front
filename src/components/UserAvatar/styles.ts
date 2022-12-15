import styled from "styled-components";

export const Avatar = styled.div`
    width: 328px;
    height: 112px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    background-color: ${props => props.theme.colors.grey};

    border-radius: 8px;

    margin-left: 16px;

    .rounded__img {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 80px;
        height: 80px;

        border-radius: 50%;
    }
`