import styled from "styled-components";

export const ProductPageContainer = styled.section`
    

    @media (max-width: 1140px) {
       display: none;
        .footer__desktop {
        display: none;
    }
    }

`

export const ProductPageMobile = styled.section`
    display: none;

    @media (max-width: 1140px) {
        display: flex;
        flex-direction: column;
    }
`

export const Container = styled.div `
    margin-left: 1.25rem;
   
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const RowContainer = styled.div `
    display: flex;
    gap: 1.5rem;
  
`

export const ProductContainer = styled.div `
    display: flex;
    gap: 1.5rem;

`
