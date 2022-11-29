import styled from "styled-components";

export const HeroContainer = styled.div`
    display: none;

    @media (max-width:640px) {
        width: 100%;
        height: 7.5rem;

        margin-left: 1.25rem;
        margin-right: 1.25rem;
        margin-top: .5rem;
    

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