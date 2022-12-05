import styled, { css } from "styled-components";
import { OrderButtonsCartProps, OrderCartProps, OrderHeaderProps, OrderPageButtonsProps, OrderPageTextProps } from ".";

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 411px;
    height: 273px;
    gap: 40px;

`

export const OrderHeader = styled.header<OrderHeaderProps>`
     display: flex;
    flex-direction: column;
    gap: 8px;

    ${(props) => props.withHeader === true && css`
    display: flex;
    flex-direction: column;
    gap: 8px;

        
    `}

    ${(props) => props.withHeader === false && css`
        display: none;
    `}

`

export const OrderInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

`

export const OrderValue = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-end;

`

export const OrderText = styled.div`
    display: flex;
    
    flex-direction: column;
    gap: 12px;

`

export const Order= styled.div<OrderPageTextProps>`
   display: flex;
    justify-content: space-between;

    ${(props) => props.withOrderPageText === true && css`
    display: flex;
    justify-content: space-between;

        
    `}

    ${(props) => props.withOrderPageText === false && css`
        display: none;
    `}
`


export const OrderButtons = styled.div<OrderPageButtonsProps>`
    display: flex;
    justify-content: space-between;

    ${(props) => props.withOrderPageButtons === true && css`
    display: flex;
    justify-content: space-between;

        
    `}

    ${(props) => props.withOrderPageButtons === false && css`
        display: none;
    `}

`

export const OrderCart = styled.div<OrderCartProps>`
    display: flex;
    justify-content: space-between;

    width: 378px;

    ${(props) => props.withOrderCart === true && css`
    display: flex;
    justify-content: space-between;

    width: 378px;

        
    `}

    ${(props) => props.withOrderCart === false && css`
        display: none;
    `}
    
`



export const OrderButtonsCart = styled.div<OrderButtonsCartProps>`
    display: flex;
    flex-direction: column;
    gap: 34px;
    align-items: center;
    width: 360px;

    ${(props) => props.withOrderButtonsCart === true && css`
    display: flex;
    justify-content: space-between;
 
        
    `}

    ${(props) => props.withOrderButtonsCart === false && css`
        display: none;
    `}

`
