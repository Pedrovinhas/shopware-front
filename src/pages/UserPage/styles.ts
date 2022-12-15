import styled from "styled-components";



export const ContainerResponsive = styled.div`
    
    .desktop__container {
         display: block;
        @media (max-width: 740px) {
            display: none;
        }
    }
`

export const Container = styled.div`
    display: none;

    @media (min-width: 740px) {

        margin-left: 1.25rem;
    
        display: flex;
        flex-direction: column;
    }

`

export const HeadingContainer = styled.div`
    margin-top: 1.75rem;
    display: flex;
    justify-content: space-between;
   
`

export const UserSection = styled.div`
    margin-top: 1.5rem;

    display: flex;
    gap: 1.375rem;
`

export const MobileSection = styled.div`
    display: none;

    @media (max-width: 740px) {
        display: flex;
        flex-direction: column;

        gap: 16px;

        .side-navigation {
            margin-left: 16px;

            display: flex;
            flex-direction: column;

            gap: 40px;

            padding-bottom: 65px;
        }
    }

`