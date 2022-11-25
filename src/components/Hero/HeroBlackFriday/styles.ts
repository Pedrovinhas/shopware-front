import styled from "styled-components";
import BlackFridayBanner from '../../../assets/Banner/blackfriday-banner.png'
import Banner from '../../../assets/Banner/banner.png'
import BlackFridayHero from '../../../assets/Hero/BlackFriday-hero.png'

export const HeroDiv = styled.div`
    display: flex;

    width: 100%;
    height: 25rem;

    padding-bottom: 4.25rem;

`

export const Card = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${BlackFridayBanner});


    margin-left: 1.25rem;
    margin-right: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    
    background-color: ${props => props.theme.colors.grey};

`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap:.75rem;

    margin-right: 1.5625rem;
`