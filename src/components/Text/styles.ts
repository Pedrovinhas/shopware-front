import styled, { css } from "styled-components";
import { TextProps } from '.';


export const StyledText = styled.p<TextProps>`

    ${(props) => props.size === 'large' && css`
        font-size: ${props => props.theme.fontSizes.md};
    `} 

    ${(props) => props.size === 'extralarge' && css`
        font-size: ${props => props.theme.fontSizes.xlg};
    `} 
    ${(props) => props.size === 'doublexlg' && css`
        font-size: ${props => props.theme.fontSizes["2xlg"]};
    `} 
    ${(props) => props.size === 'triplexlg' && css`
        font-size: ${props => props.theme.fontSizes["xlg2"]};
    `} 

    ${(props) => props.size === 'medium' && css`
        font-size: ${props => props.theme.fontSizes.base};
    `} 

    ${(props) => props.size === 'small' && css`
        font-size: ${props => props.theme.fontSizes.sm};
    `} 

    ${(props) => props.color === 'primary' && css`
        color: ${props => props.theme.colors.primary};
    `}
     
    ${(props) => props.color === 'discount' && css`
        color: ${props => props.theme.colors.discount};
    `}
     
    ${(props) => props.color === 'bright' && css`
        color: ${props => props.theme.colors.bright};
    `} 

    ${(props) => props.color === 'highEmphasis' && css`
        color: ${props => props.theme.colors.highEmphasis};
    `} 

    ${(props) => props.color === 'lowEmphasis' && css`
        color: ${props => props.theme.colors.lowEmphasis};
    `} 

    ${(props) => props.color === 'brown' && css`
        color: ${props => props.theme.colors.brown};
    `} 

    ${(props) => props.color === 'dark' && css`
        color: ${props => props.theme.colors.dark};
    `} 

    ${(props) => props.color === 'lightText' && css`
        color: ${props => props.theme.colors.lightText};
    `} 


    ${(props) => props.title === 'medium' && css`
        font-weight: ${props => props.theme.fontWeights.medium};
    `} 

    ${(props) => props.title === 'regular' && css`
        font-weight: ${props => props.theme.fontWeights.big};
    `} 

    ${(props) => props.title === 'normal' && css`
        font-weight: ${props => props.theme.fontWeights.normal};
    `} 

    ${(props) => props.decoration === 'line-through' && css`
        text-decoration-line: line-through;
    `} 

`