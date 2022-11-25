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

    span {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
   

`
