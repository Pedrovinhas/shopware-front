import styled from "styled-components";

export const PhoneForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 56px;

    @media (min-width: 540px) {
            justify-content: center;
            height: 100vh;
  
        }

    .phone-sign {
        align-self: center;

        display: flex;
        flex-direction: column;
        gap: 24px;

     
        h1 {
            width: 305px;
        }
     
        .login__fields {
            display: flex;
            flex-direction: column;
            gap: 18px;

            width: 375px;
            
        }

        .buttons {
            width: 375px;
            border: 0;
            background-color: none;

            margin-top: 102px;
        }
    }

`