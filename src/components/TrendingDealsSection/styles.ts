import styled from "styled-components";
import HeroFooterImg from '../../../assets/Hero/hero-footer.svg'

export const HeroContainer = styled.div`
    display: none;

    @media (max-width:1120px) {
        width: 100%;
        height: 9.3125rem;

        margin-left: 1.25rem;
        margin-right: 1.25rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        display: flex;
        gap: .875rem;
        flex-direction: column;


        width: 95%;
        background-repeat: no-repeat;

        border-radius: ${props => props.theme.radii.base};

        .slider__banners {
            display: flex;
            gap: .5rem;

        }
    }
`