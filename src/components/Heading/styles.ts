import styled, { css } from "styled-components";
import { HeadingProps } from '.';


export const StyledHeading = styled.h1<HeadingProps>`

    ${(props) => props.size === 'midlarge' && css`
        font-size: ${props => props.theme.fontSizes["midxl"]};
    `} 
    ${(props) => props.size === 'ultralarge' && css`
        font-size: ${props => props.theme.fontSizes["5xl"]};
    `} 

    ${(props) => props.size === 'extralarge' && css`
        font-size: ${props => props.theme.fontSizes["4xl"]};
    `} 

    ${(props) => props.size === 'large' && css`
        font-size: ${props => props.theme.fontSizes["3xl"]};
    `} 

    ${(props) => props.size === 'medium' && css`
        font-size: ${props => props.theme.fontSizes["2xl"]};
    `} 

    ${(props) => props.size === 'small' && css`
        font-size: ${props => props.theme.fontSizes["xl"]};
    `} 

    ${(props) => props.color === 'primary' && css`
        color: ${props => props.theme.colors.primary};
    `} 

    ${(props) => props.color === 'highEmphasis' && css`
        color: ${props => props.theme.colors.highEmphasis};
    `} 

    ${(props) => props.color === 'lowEmphasis' && css`
        color: ${props => props.theme.colors.lowEmphasis};
    `} 

    ${(props) => props.color === 'bright' && css`
        color: ${props => props.theme.colors.bright};
    `} 

    ${(props) => props.color === 'brown' && css`
        color: ${props => props.theme.colors.brown};
    `}

    ${(props) => props.color === 'dark' && css`
        color: ${props => props.theme.colors.dark};
    `} 

    ${(props) => props.title === 'medium' && css`
        font-weight: ${props => props.theme.fontWeights.medium};
    `} 

    ${(props) => props.title === 'regular' && css`
        font-weight: ${props => props.theme.fontWeights.big};
    `} 
    ${(props) => props.title === 'bold' && css`
        font-weight: ${props => props.theme.fontWeights.bold};
    `} 
    ${(props) => props.title === 'strong' && css`
        font-weight: ${props => props.theme.fontWeights.strong};
    `} 

`
