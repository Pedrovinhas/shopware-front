import styled from "styled-components";
import { CollectionImageProps } from ".";


export const CollectionImageContainer = styled.div<CollectionImageProps>`
    width: 17.5rem;
    height: 17.5rem;
   
    background-image: url(${props => props.src});
 
    cursor: pointer;
    border-radius: ${props => props.theme.radii.base};
    background-repeat: no-repeat;

    display: flex;
   
    align-items: flex-end;

    .desktop__product {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    .mobile__product {
        display: none;
    }
   
    @media(max-width: 740px) {
        width: 9.75rem;
        height: 9.375rem;

        background-size: 156px 150px;
        background-position: center;

        .desktop__product {
            display: none;
        }

        .mobile__product {
            display: flex;
            margin-bottom: 10px;
            margin-left: 10px;
        }
    }

`
