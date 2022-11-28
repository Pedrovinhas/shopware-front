import styled, { css } from "styled-components";
import { FooterProps } from ".";

export const StyledFooter = styled.div`
    .footer_mobile {
        display: none;
    }

    

    @media (max-width:1120px) {
        .footer__desktop {
            display: none;
        }

        .footer_mobile{
            display: flex;
            align-items: flex-start;
            justify-content: center;

            flex-direction: column;
            width: 100%;
          
           padding-bottom: 58px;
        }
    }

`

export const FooterContainer = styled.footer<FooterProps>`
    width: 100%;
    height: 21.375rem;

    margin-top: 4.25rem;

    background-color: ${props => props.theme.colors.primary};

    display: flex;
    justify-content: space-between;

    padding-top:2rem;


`

export const LeftFooter = styled.div`
    display: flex;
    gap: 4.25rem;

    .row-reverse {
        display: none;
    }

    .mobile-socials {
        display: none;
    }

    
    @media (max-width:1120px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100vw;
        background-color: ${props => props.theme.colors.primary};

        gap: 1.5rem;

        .row-reverse {
            display: flex;
            flex-direction: column-reverse;

            gap: 1.5rem;
        }

        .mobile-socials {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        
    }

`

export const RightFooter = styled.div`
    margin-top: 2rem;
    margin-right: 3.875rem;

    @media (max-width:1120px) {
        margin-right: 0;
    }


`