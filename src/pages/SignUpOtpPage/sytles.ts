import styled from "styled-components";

export const OtpForm = styled.form`
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
     
        .phone__fields {
            display: flex;
            gap: 12px;

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