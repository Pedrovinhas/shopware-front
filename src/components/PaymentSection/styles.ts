import styled from "styled-components";

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 68px;

    height: 750px;

   

`

export const PaymentDetails = styled.div`
    width: 100%;
    height: 100%;
 
  
    border-radius: 8px;

    border: 1px solid ${props => props.theme.colors.primary};
    display: flex;
 

    .details__root {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

       
        
        .details__pay {
            height: 100%;
            

            width: 100%;
            
            display: flex;
    
            
            align-items: center;
            flex-direction: row-reverse;

            position: relative;

            z-index: 5;

            &:first-child {
                margin-top: 13px;
            }

            &:nth-child(3) {
                margin-bottom: 8px;
            }

     
            button {
                align-self: center;
                margin-right: 26px;
            }

            .radio-details__label {
                display: flex;
                flex-direction: column;
                width: 100%;
               
                position: absolute;
                gap: 12px;


                z-index: -4;

                .pay__brand {
                    margin-left: 12px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-top: 12px;

                    .brand__box {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        width: 68px;
                        height: 68px;

                        border-radius: 4px;
                        border: 1px solid #dcdcdc;
                    }
                }

                .pay__information {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    margin-left: 12px;

                    .pay__input-div {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;

                        .input__pay {
                            width: 287px;
                            height: 40px;

                            border: 1px solid ${props => props.theme.colors.primaryTint};
                            border-radius: 4px;

                            padding: .5rem;

                            font-size: ${props => props.theme.fontSizes.md};
                            color: ${props => props.theme.colors.highEmphasis};

                            &::placeholder {
                                font-size: ${props => props.theme.fontSizes.md};
                                color: ${props => props.theme.colors.lightText};
                            }
                        }
                    }

                    .pay__save {
                        display: flex;
                        align-items: center;
                  
                        p {
                            margin-left: -110px;
                        }

                    }
                }
            }
        }

    }

`


export const PaymentMethodForm = styled.div`
    display: flex;
    width: 44.3125rem;
    height: 8.9375rem;

    .payment__root {
        display: flex;
        gap: 1.25rem;

        .radio__pay {
            width: 10rem;
            height: 8.9375rem;

            display: flex;
           flex-direction: column;
           gap: 1.375rem;

           position: relative;
            
           .radio__label {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 10rem;
            height: 8.9375rem;

            position: absolute;
            gap: .5rem;

            z-index: -4;

            justify-content: center;

            border: 1px solid #E3E3E3;
            border-radius: .75rem;

            .img__credit {
                margin-bottom: 16px;
            }

            .img__apple {
                margin-bottom: 8px;
            }

            .img__amazon {
                margin-bottom: 8px;
            }
           }
        }

        .radio-group__item {
            background-color: white;
            width: 1.125rem;
            height: 1.125rem;

            border-radius: 100%;
            border: .125rem solid ${props => props.theme.colors.lowEmphasis};

            margin-right: 1rem;
            margin-top: .75rem;

            flex-direction: column;
            align-self: flex-end;

            cursor: pointer;
            &[data-state='checked'] {
                border: .125rem solid ${props => props.theme.colors.primary};
            }
            &[data-state='checked']~.radio__label {
                background-color: rgba(99, 149, 153, 0.1);
                
            }
        }


        .RadioGroupIndicator {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: relative;

            
        }

        .RadioGroupIndicator::after {
            content: '';
            display: block;
            width: .625rem;
            height: .625rem;
            border-radius: 50%;
            background-color: ${props => props.theme.colors.primary};
        
        }

    }

`