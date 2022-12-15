import styled from "styled-components";
import BgLogin from '../../assets/Login/login-bg.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: flex-end;
    align-items: center;

    background-color: #FFF6E9;
    background-image: url(${BgLogin});
    background-repeat: no-repeat;
    background-position: center;


    width: 100vw;
    height: 100vh;

    @media (min-width: 740px) {
        background-repeat: repeat;
    }

    .sign-up {
        display: flex;
        flex-direction: column;

        gap: 18px;
        align-items: center;
        justify-content: flex-end;

        width: 360px;
        height: 265px;
        
        background: linear-gradient(180deg, rgba(255, 244, 229, 0) 0%, rgba(255, 250, 244, 0.96) 51.9%);

        margin-bottom: 32px;

        @media (min-width: 740px) {
        width: 100%;
    }

        h1 {
            margin-left: 16px;
        }

        .sign-up__buttons {
            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            
            
            gap: 8px;
        }

    }
`