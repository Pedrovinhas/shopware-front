import { Text } from "../../Text"
import { ProductProps } from "../../../types/ProductProps"
import { DetailsContainer } from "./styles"

export function CartDetails(props: ProductProps) {
    return (
        <DetailsContainer>
        <div className="details__values">
            <Text color='highEmphasis' size='medium' title='normal'>
                    {props.productValue} 
                </Text>

            <Text color='highEmphasis' size='medium' title='normal'>
                    1
            </Text>
            
            <Text color='highEmphasis' size='medium' title='normal'>
                    {props.productValue} 
            </Text>
        </div>
          

          <div className="details__buttons">
          <Text as='a' cursor="pointer" color='primary' size='medium' title='regular' decoration="underline">
                Move to Wishlist
            </Text>

            <Text as='a' cursor="pointer" color='error' size='medium' title='regular' decoration="underline"> 
                Remove
            </Text>
          </div>
        </DetailsContainer>
        
    )
}