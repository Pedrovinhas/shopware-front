import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 31px;
    row-gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .phone-number {
        .span__phone {
            display: flex;
            gap: 12px;
        }
    }
`