import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';
import { TabProps } from '.';

export const TabsRoot = styled(Tabs.Root)`
    display: none;

    @media (max-width: 1140px) {
        display: block;
        width: 100%;

    position: fixed;
    bottom: 0;
    }
    
`
export const TabsList = styled(Tabs.List)`
    display: flex;
   
    width: 100%;
    height: 56px;
`

export const TabsContent = styled(Tabs.Content)`

    display: flex;
    gap: 20px;
    flex-direction: column;

    position: absolute;

    margin-top: 24px;

`

export const BottomTab = styled(Tabs.Trigger)`
  
    border: none; 

    background-color: ${props => props.theme.colors.bright};

    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.medium};
    cursor: pointer;
    
    padding: 6px 18px;

    width: 100%;
    height: 56px;

    transition: ${props => props.theme.animation.easeOut};

    .icon__categories {
            svg {
            
            g {
                stroke: ${props => props.theme.colors.lowEmphasis};
            }
        }
    }

    .icon__home {
        g {
            path {
                stroke: ${props => props.theme.colors.lowEmphasis};
            }
        }
    }

    .icon__bag {
        path {
            stroke: ${props => props.theme.colors.lowEmphasis};
        }
    }

    .icon__profile {
        g {
            path {

                fill: ${props => props.theme.colors.lowEmphasis};
            }
        }
    }
  

    .bottom__text {

        p {
            color: ${props => props.theme.colors.lowEmphasis};
            display: none;
        }
       
    }

    

    &[data-state='active'] {
        color: ${props => props.theme.colors.primary};

        .bottom__text {
            p {
                color: ${props => props.theme.colors.primary};
                display: block;
            }
        }

        .icon__home {
        g {
            path {
                stroke: ${props => props.theme.colors.primary};
            }
        }
    }

        .icon__categories {
            svg {
            
            g {
                stroke: ${props => props.theme.colors.primary};
            }
         }
        }

        .icon__profile {
        g {
            path {

                fill: ${props => props.theme.colors.primary};
            }
        }
    }

    .icon__bag {
        path {
            stroke: ${props => props.theme.colors.primary};
        }
    }
        
   }

`