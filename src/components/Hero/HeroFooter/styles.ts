import styled from "styled-components";
import HeroFooterImg from '../../../assets/Hero/hero-footer.svg'

export const HeroContainer = styled.div`
    width: 100%;

    margin-left: 1.25rem;
    margin-right: 1.25rem;
    background-image: url(${HeroFooterImg});
    background-size: 100%;

    height: 25rem;
    align-items: center;
    display: flex;
   
    width: 95%;
    background-repeat: no-repeat;

    border-radius: ${props => props.theme.radii.base};
`
export const HeroText = styled.div`
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    width: 38.625rem;
`


