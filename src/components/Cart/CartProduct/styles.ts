import styled, { css } from "styled-components";
import { ButtonCartProps, CardImageProps, PriceProps, QuantityProps, StepperProps } from ".";

export const VerticalContainer = styled.div`

    display: flex;
    gap: 16px;

    width: 383px;
    height: 114px;

    @media (max-width: 1140px) {
        width: 298px;
        height: 120px;
    }


`

export const CardImage = styled.div<CardImageProps>`
    width: 75px;
    height: 80px;

    border-radius: ${props => props.theme.radii.base};
    background-image: url(${props => props.src});
    background-size: 100%;
    
    @media (max-width: 1140px) {
        width: 120px;
    height: 120px;

        background-size: 136px 138px;

    }

`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .card__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`

export const DivPrice = styled.div<PriceProps>`
    margin-top: 4px;

    ${(props) => props.withPrice === true && css`
        display: flex;

        
    `}

    ${(props) => props.withPrice === false && css`
        display: none;
    `}

 
`

export const CardCartProductText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const ButtonCartContainer = styled.div<ButtonCartProps>`

${(props) => props.withButton === true && css`
        display: flex;

        
    `}

    ${(props) => props.withButton === false && css`
        display: none;
    `}

`

export const ProductQuantityContainer = styled.div<QuantityProps> `

${(props) => props.withQuantity === true && css`
        display: flex;

        
    `}

    ${(props) => props.withQuantity === false && css`
        display: none;
    `}
`

export const StepperContainer = styled.div<StepperProps> `

${(props) => props.withStepper === true && css`
        display: flex;
        justify-content: space-between;
        width: 250px;
        align-items: center;

        
    `}

    ${(props) => props.withStepper === false && css`
        display: none;
    `}
`