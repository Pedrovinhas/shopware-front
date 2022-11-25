import styled, { css } from "styled-components";
import { ButtonCardProps, CardImageProps, DiscountProps, RatingProps, TrendingProps } from ".";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 17.875rem;
    height: 28rem;
`

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    
`

export const ProductModelContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardImageContainer = styled.div<CardImageProps>`
    width: 100%;
    border-radius: ${props => props.theme.radii.base};
    height: 17.875rem;
    background-image: url(${props => props.src});
    
    display: flex;
    justify-content: flex-end;

`

export const Trending = styled.span<TrendingProps>`

    ${(props) => props.withTrending === true && css`
        margin-top: .875rem;
        margin-right: .625rem;

        width: 6.25rem;

        height: 2.25rem;
        border-radius: .25rem;
        background: ${props => props.theme.colors.highlight};

        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.bright};
        font-weight: 500;
        font-size: 14px;
    `}

    ${(props) => props.withTrending === false && css`
        display: none;


    `}
  

`

export const RatingDiv = styled.div<RatingProps>`
    
    ${(props) => props.withRating === true && css`
        display: flex;
        align-items: center;
        gap: 1rem;

        
    `}

    ${(props) => props.withRating === false && css`
         display: none;
        

         span {
            display: none;
         }

         div {
            display: none;
         }
    `}
`

export const DivPrice = styled.div`
    display: flex;
    align-items: center;
    gap: .375rem;
  
 
`

export const DivDiscount = styled.div<DiscountProps>`
    

    ${(props) => props.withDiscount === true && css`
        display: flex;
        align-items: center;
        gap: .375rem;

        
    `}

    ${(props) => props.withDiscount === false && css`
        display: none;
    `}

`

export const ButtonContainer = styled.div<ButtonCardProps>`
    width: 100%;


    ${(props) => props.withButton === true && css`
        display: block
    `}

    ${(props) => props.withButton === false && css`
         display: none;
    `}

`