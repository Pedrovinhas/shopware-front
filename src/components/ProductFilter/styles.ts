import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 0;

    background-color: ${props => props.theme.colors.bright};
    display: flex;
    width: 100%;
    height: 56px;

    .filter__item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        width: 50%;

    
    }


`