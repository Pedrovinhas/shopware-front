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
        margin-top: 20px;
    
        gap: 30px;
    

        display: flex;
        flex-direction: column;
        align-items: center;
 

        @media (min-width: 740px) {
        
            margin-top: 0;

            

            }

        .ul__information {
            width: 324px;
            height: 15px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            
            ul {
                display: flex;
                flex-direction: column;

                gap: 4px;
                li {
                    color: ${props => props.theme.colors.lowEmphasis};
                }
            }
        }

        .inf__content {
            width: 285px;
         

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            text-align: center;

            .code {
                width: 240px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px dashed ${props => props.theme.colors.primary};

                border-radius: 8px;
            }

        }
    }


`