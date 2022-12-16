import styled from "styled-components";

export const MergeContainer = styled.div`
        .header {
            display: none;
        }

        .header__options {
            display: none;
        }

        .information__header {
                    display: none;
                }



        @media (min-width: 740px) {

            .mobile__container {
                display: flex;
                flex-direction: column;
                width: 100%;

                .information__header {
                    gap: 8px;
                    display: flex;
                    flex-direction: column;
                }
            }

            .header__options {
                margin-left: 16px;
                width: 98%;
                display: flex;
                flex-direction: column;

                gap: 28px;

                margin-bottom: 20px;

                .logout__section {
                    display: flex;
                    justify-content: space-between;

                }
            }

            .header {

                display: block;
            }
        }
`

export const ReferContainer = styled.div`

    .profile__navigation {
        display: none;
    }

    @media (min-width: 740px) {

        display: flex;
        margin-left: 1.25rem;
        gap: 45px;

        .profile__navigation {
            display: flex;
            flex-direction: column;

            gap: 16px;

            .logout__section {
                width: 100%;
                border: 1px solid red;
            }
        }
    }
`

export const WishContainer = styled.div`
    padding-bottom: 30px;

    width: 100%;

    height: 500px;

    .heading__text {
        display: block;
        @media (min-width: 740px) {

            display: none;
         
        }
    }

    .button {
        margin-top: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .heading__center {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 20px;
        }

        .text__content {
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;

        @media (min-width: 740px) {
            margin-top: 0;
        }
        
        .inf__content {
            width: 285px;
            height: 36px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            text-align: center;
        }
    }


`