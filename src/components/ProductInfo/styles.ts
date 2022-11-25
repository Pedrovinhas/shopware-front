import styled from "styled-components";

export const ProductInfoSection = styled.section`
    display: flex;
    flex-direction: column;

    width: 38.1875rem;
    height: 14.125rem;
`

export const DivRating = styled.div`
    display: flex;
    align-items: center;
    gap: .875rem;

    margin-top: 2rem;
    margin-bottom: 1.5rem;
`

export const Rating = styled.div`
    display: flex;
    gap: .5rem;
`

export const DivPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const DeliveryInfoSection = styled.section`
    display: flex;
    flex-direction: column; 
    gap: 2.5rem;
`

export const Details = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

`
export const DeliveryDetails = styled.div`
    display: flex;
    flex-direction: column;

    width: 12.8125rem;
   
    gap: .5rem;
`

export const QuantityContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const CupomContainer = styled.div`
    display: flex;
    gap: 1.3125rem;

    border: .0625rem solid #1B4B66;
    border-radius: .5rem;
    padding: .9375rem 1rem;

    width: 24.4375rem;
    height: 6rem;
`

export const Terms = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const CupomCode = styled.span`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5rem;

    width: 6.8125rem;
    height: 4.125rem;

    padding: .875rem .8125rem;

    border-radius: .25rem;

    background-color: ${props => props.theme.colors.grey};
`

export const DeliveryButtons = styled.div`
    display: flex;
    gap: 1.5rem;
`