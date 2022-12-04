import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8125rem;

    .details__values {
        display: flex;
        
        p:first-child {
            margin-right: 59px;
        }

        p:nth-child(2) {
            margin-right: 99px;
        }
    }

    .details__buttons {
        display: flex;
        gap: 52px;
    }
`