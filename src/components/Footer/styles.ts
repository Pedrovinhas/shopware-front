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
            align-items: center;
            justify-content: center;
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

    ${(props) => props.responsive === 'mobile' && css`
        
        border: 1px solid red;

    `}

`

export const LeftFooter = styled.div`
    display: flex;
    gap: 4.25rem;

`

export const RightFooter = styled.div`
    margin-top: 2rem;
    margin-right: 3.875rem;

`