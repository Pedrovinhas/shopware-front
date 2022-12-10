import * as Dialog from '@radix-ui/react-dialog';
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: absolute;
    width: 100vw;
    height: 100vh;

    top: 0;
    background-color: ${props => props.theme.colors.dark};
    opacity: 0.5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Content = styled(Dialog.Content)`
    width: 24.625rem;
    min-height: 43.5625rem;

    background-color: ${props => props.theme.colors.bright};

    position: absolute;
    right: 0;
    top: 0rem;

    margin-right: .375rem;

    display: flex;
    justify-content: center;

    .modal__container {
        width: 23.5625rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
`

export const CloseButton = styled(Dialog.Close)`
    border: 0;
    background-color: ${props => props.theme.colors.bright};

    margin-top: .375rem;
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.grey};
      
    }
`

export const EmptyCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;

    text-align: center;

    p { 
        width: 70%;
    }

    img {
        width: 50%;
    }
`