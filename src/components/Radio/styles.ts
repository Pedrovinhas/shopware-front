import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from "styled-components";

export const RadioGroupItem = styled(RadioGroup.Item)`
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

    &~.radio-details__label>.pay__information { 
        visibility: hidden;
        width: 0;
        height: 0;     
        
    }
    
    &[data-state='checked'] {
        border: .125rem solid ${props => props.theme.colors.primary};
       }
    
       &[data-state='checked']~.radio__label {
          background-color: rgba(99, 149, 153, 0.1);
                
        }

        &[data-state='checked']~.radio-details__label {
          background-color: rgba(99, 149, 153, 0.1);
                
          .pay__information {
            visibility: visible;
            width: 328px;
            height: 112px;
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

`