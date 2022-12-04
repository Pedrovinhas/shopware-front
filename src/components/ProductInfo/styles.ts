import styled from "styled-components";


export const ProductColumn = styled.div`
    margin-left: 1.25rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .mobile__accordions {
         display: none;   
        }

   .mobile__invites {
        display: none;
    }
    
    .mobile__suggestions {
        display: none;
    }

    @media (max-width: 1140px) {
        gap: 24px;

        .mobile__separator {
            display: none;
        }

        .mobile__accordions {
            display: flex;
            flex-direction: column;
            gap: 24px;

            

        }

        .mobile__invites {
            display: flex;
            gap: 19px;
            width: 360px;

            .invites__text {
                display: flex;
                flex-direction: column;
                width: 215px;
                height: 36px;


                .invite__btn {
                    background-color: #FFFFFF;
                    width: 102px;
                    height: 30px;
                }

                p:nth-child(2) {
                    margin-bottom: 8px;
                }
               
                
            }

            .invites__block {
                width: 94px;
                height: 94px;
                border-radius: 8px;
                background-color: #FFE6CA;
            }
        }

        .mobile__suggestions {
            display: flex;
            gap: 8px;
            flex-direction: column;

            .suggestions__items {
                display: flex;
                gap: 16px;
            }
        }
    }
`

export const ProductInfoSection = styled.section`
    display: flex;
    flex-direction: column;

    width: 38.1875rem;
    height: 14.125rem;

    @media (max-width: 1140px) {
        width: 17.75rem;
        height: 10rem;
       gap: 1rem;
        .heading {
            margin-top: 14px;
            font-size: 16px; 
        }

        h1:nth-child(2) {
            font-size: 14px;
            font-weight: 500;
        }

        .mobile__products {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        

       
    }
`

export const DivRating = styled.div`
    display: flex;
    align-items: center;
    gap: .875rem;

    margin-top: 2rem;
    margin-bottom: 1.5rem;

    @media (max-width: 1140px) {
        display: none;

        .rating__mobile {
            display: flex;
        }
    }
`

export const DivRatingMobile = styled.div`
    display: none;

    @media (max-width: 1140px) {
        display: flex;
        gap: 14px;

        .rating__pill {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;

            width: 4.625rem;
            height: 2.375rem;

            background-color: ${props => props.theme.colors.accent};
        }

        .rating__content {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }

`

export const Rating = styled.div`
    display: flex;
    gap: .5rem;
`

export const DivPrice = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 1rem;

    @media (max-width: 1140px) {
        display: flex;
        
        h1:first-child {
           
            font-size: 20px; 
        }

        h1:nth-child(2) {
            font-size: 14px;
            font-weight: 500;
            color: ${ props => props.theme.colors.lowEmphasis};
        }

        h1:nth-child(3) {
            font-size: 14px;
            font-weight: 500;
        }

       
    }

`

export const DeliveryInfoSection = styled.section`
    display: flex;
    flex-direction: column; 
    gap: 2.5rem;

    .delivery-buttons__mobile {
        display: none;
    }

    @media (max-width: 1140px) {
        .delivery-buttons__mobile {
            position: fixed;
            bottom: 0;
            display: flex;
            background-color: ${props => props.theme.colors.bright};


            .delivery-buttons__container {
                display: flex;
                margin-bottom: 12px;
                gap: 10px;

                .btn__wish {
                    width: 44px;
                    height: 44px;
                    border-radius: 8px; 

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background-color: ${props => props.theme.colors.accent};
                }
         }
        
    }
    }

    
`

export const Details = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 1140px) {
        flex-direction: column;
        align-items: flex-start;
        order: 2;

        padding-bottom: 26px;
    }

`
export const DeliveryDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 12.8125rem;
   
    gap: .5rem;

    @media (max-width: 740px) {
        width: 20.5rem;
        h1:first-child {
            font-size: 14px;
        }

        p:first-child {
            font-size: 14px;
        }
        
    }
    
`

export const QuantityContainer = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 1140px) {
        display: none;
    }
`

export const CupomContainer = styled.div`
    display: flex;
    gap: 1.3125rem;

    border: .0625rem solid #1B4B66;
    border-radius: .5rem;
    padding: .9375rem 1rem;

    width: 24.4375rem;
    height: 6rem;

    @media (max-width: 1140px) {
        order: 1;
    }
`

export const Terms = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
  
`

export const CupomCode = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;

    width: 6.8125rem;
    height: 4.125rem;

    padding: .875rem .8125rem;

    border-radius: .25rem;

    background-color: ${props => props.theme.colors.grey};

   
`

export const DeliveryButtons = styled.div`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 1140px) {
        display: none;
    }
`