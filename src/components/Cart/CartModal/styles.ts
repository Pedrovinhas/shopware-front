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
    width: 394px;
    height: 697px;
  
    background-color: ${props => props.theme.colors.bright};

    position: absolute;
    right: 0;
    top: 55px;

    margin-right: 10px;

    display: flex;
    justify-content: center;

    .modal__container {
        width: 377px;

        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
`

export const CloseButton = styled(Dialog.Close)`
    border: 0;
    background-color: ${props => props.theme.colors.bright};

    margin-top: 12px;
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.grey};
      
    }
`