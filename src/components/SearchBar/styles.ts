import styled from "styled-components";

export const TextInputContainer = styled.div`

    width: 22.625rem;
    height: 44px;

    border-radius: 4px;
    background: ${props => props.theme.colors.grey};

    display: flex;
    align-items: center;
    gap: .5rem;

    padding-left: .5rem;

    @media (max-width: 1120px) {
        display: none;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 4px;
   
    color: ${props => props.theme.colors.highEmphasis};
    font-size: ${props => props.theme.fontSizes.base};
    background: ${props => props.theme.colors.grey};

    border-radius: 4px;
   
    border:  none;

    &::placeholder {
        font-family: ${props => props.theme.font.inter};
        color: ${props => props.theme.colors.lowEmphasis};
        font-weight: ${props => props.theme.fontWeights.medium};
       
    }

`