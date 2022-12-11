import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    height: 883px;

    display: flex;
    flex-direction: column;

    .submit__button {
       margin-top: 24px;
       align-self: flex-end;

    }
   

    .form__names {
        display: flex;
        gap: 32px;

        margin-bottom: 8px;
    }

    .label__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .label__email {
        display: flex;
        margin-top: 4px;
        flex-direction: column;
        gap: 8px;

        width: 641px;
    }

    .label__select {
        margin-top: 28px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .phone-number__container {
        display: flex; 
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;

        .span__phone {
            display: flex;
            gap: 8px;
        }
    }

    
`

export const SectionPassword = styled.section`
    margin-top: 53px;
    display: flex;
    flex-direction: column;

    gap: 38px;

    .header__password {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .inputs__container { 
        display: flex;
        flex-direction: column;
        gap: 16px;

    }

`