import styled from "styled-components";
import { HeroImg } from ".";

export const HeroDiv = styled.div<HeroImg>`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    background: url(${props => props.src});
    
    
    margin-left: 1.25rem;
    margin-right: 1.25rem;

    height: 25rem;

    border-radius: 16px;

    width: 100%;
    max-width: 1240px;

    @media (max-width: 640px) {
        display: none;
    }

`

export const Card = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1.875rem;
    padding-left: 3rem;

    width: 47.4375rem;
    height: 19.75rem;
    background: rgba(222, 222, 222, 0.7);
    backdrop-filter: blur(.1563rem);
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
`

export const Box = styled.div`
    width: 33.125rem;
`