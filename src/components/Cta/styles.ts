import styled from "styled-components";

export const CtaContainer = styled.div`
    display: none;
    
    
    @media(max-width: 1140px) {
        margin-left: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        display: flex;
        gap: .75rem;

        width: 20.5rem;
        height: 7.5rem;

        background-color: ${props => props.theme.colors.primary};

        align-items: center;

        border-radius: .5rem;
        
        .square {
            width: 6.5rem;
            height: 6.5rem;
            border-radius: .5rem;

           margin-left: .5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: #FFE6CA;

            .retangle {
                width: 3.0625rem;
                height: 5.125rem;

                display: flex;
                align-items: flex-end;
                justify-content: center;
                

                border: .25rem solid ${props => props.theme.colors.primary};
                border-radius: .25rem;

                background-color: ${props => props.theme.colors.bright};

                .circle {
                    width: .375rem;
                    height: .375rem;

                    border-radius: ${props => props.theme.radii.rounded};
                    background-color: ${props => props.theme.colors.primary};

                    margin-bottom: .375rem;
                }
            }
          }

          .cta__text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            width: 12.1875rem;

            gap: 1.25rem;

            margin-right: .625rem;

            .center {
              display: flex;
              align-items: center;

            }
          }
        }
`