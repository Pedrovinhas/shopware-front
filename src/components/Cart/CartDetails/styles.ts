import styled, { css } from "styled-components";
import { DetailsButtonProps } from ".";

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

export const DetailsButton = styled.div<DetailsButtonProps>`
        display: flex;
        gap: 52px;

        ${(props) => props.withDetailsButton === true && css`
            display: flex;
            gap: 52px;

        `} 

        ${(props) => props.withDetailsButton === false && css`
            display: none;

        `} 
`