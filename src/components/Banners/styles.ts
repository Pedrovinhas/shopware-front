import styled, { css } from 'styled-components';
import { BannersProps } from '.';

export const BannerContainer = styled.div`
    margin-left: 1.25rem;
    margin-top: 2.5rem;

    .desktop__banners {
        display: flex;
         gap: 4.5rem;
    }

    .mobile__banners {
        display: none;
    }

     @media(max-width: 1120px) {
        margin-top: 1rem;

        .desktop__banners {
            display: none;
        }

        .mobile__banners {
        display: flex;
        gap: 1rem;
    }
    }

`


 export const StyledBanner = styled.div<BannersProps>`
    cursor: pointer;
    ${(props) => props.size === 'small' && css`
        width: 9.75rem
        height: 6.25rem
    `} 

    ${(props) => props.size === 'square' && css`
        width: 9.75rem
        height: 9.375rem
    `} 

    ${(props) => props.size === 'wide' && css`
        width: 20.5rem
        height: 7.5rem
    `} 

    ${(props) => props.size === 'giant' && css`
        width: 37.75rem;
        height: 14.25rem;
    `} 

   
 
 `