import styled from "styled-components";


export const OrderInformationContainer = styled.div`
    display: flex;
    flex-direction: column;

    .information__header {
        display: flex;
        flex-direction: column;

        gap: .5rem;
    }

    .order__details {
        margin-top: .875rem;

        display: flex;
        justify-content: space-between;

        .order__details-price {
            display: flex;
            flex-direction: column;

            width: 16.25rem;
            gap: .5rem;
           

            .details__container {
                display: flex;
                justify-content: space-between;
                
                .price__texts {
                    display: flex;
                    flex-direction: column;
                    gap: .75rem;
    
                }

                .price__values {
                    display: flex;
                    flex-direction: column;
                    gap: .75rem;

                    align-items: flex-end;
                }
            }
            

        }

        .order__details-payment {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }

        .order__details-address {
            display: flex;
            
            gap: .5rem;

            .address__text {
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }

            .address__home {
                margin-top: 1.75rem;
            }
        }

    }

    .order__buttons {
            display: flex;

            margin-top: 2.5rem;

            gap: 1.5rem;

            align-self: flex-end;
    }
`