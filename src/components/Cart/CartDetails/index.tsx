import { Text } from "../../Text"
import { ProductProps } from "../../../types/ProductProps"
import { DetailsButton, DetailsContainer } from "./styles"
import { useCart } from "../../../hooks/useCart";

export interface CartDetailsProps extends ProductProps, DetailsButtonProps {   
}

export interface DetailsButtonProps {
    withDetailsButton?: boolean;
    onClick?: () => void;
}

export function CartDetails(props: CartDetailsProps) {
    return (
        <DetailsContainer>
        <div className="details__values">
            <Text color='highEmphasis' size='medium' title='medium'>
                    ${props.productValue} 
                </Text>

            <Text color='highEmphasis' size='medium' title='medium'>
                    1
            </Text>
            
            <Text color='highEmphasis' size='medium' title='medium'>
                    ${props.productValue} 
            </Text>
        </div>
          

          <DetailsButton withDetailsButton={props.withDetailsButton}> 
          <Text as='a' cursor="pointer" color='primary' size='medium' title='regular' decoration="underline">
                Move to Wishlist
            </Text>

            <Text as='a' cursor="pointer" color='error' size='medium' title='regular' decoration="underline" onClick={props.onClick}> 
                Remove
            </Text>
          </DetailsButton>
        </DetailsContainer>
        
    )
}