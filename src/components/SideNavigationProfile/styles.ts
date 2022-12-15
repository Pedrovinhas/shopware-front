import styled from "styled-components";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
    width: 286px;
    height: 504px;

    background-color: ${props => props.theme.colors.grey};

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

   border-radius: 8px;

    @media (max-width: 740px) {
        width: 328px;
        height: 420px;
    }
   
    .toggle-group__item {
        display: flex;
        
        align-items: center;

        width: 286px;
        height: 54px;

        border: none;

        cursor: pointer;

        .border {
               display: none;
            }

        .item__text {
            display: flex;
            justify-content: space-between;
            width: 271px;
            
            padding-left: 8px;
           
        }

        &[data-state='on'] {
            .border {
                background-color: #17494D;
                height: 54px;
                width: 4px;

                border-radius: 8px;
                display: block;

                @media (max-width: 740px) {
                    display: none;
                }
    
            }   

            .item__text {
                padding-left: 4px;
            }
            


            
            p {
                color: ${props => props.theme.colors.primary};
            }
        }
    }


`