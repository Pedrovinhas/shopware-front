import { Separator } from "../../Separator"
import { Text } from "../../Text"
import { OrderHeaderContainer } from "./styles"

export function OrderHeader() {
    return (
    <OrderHeaderContainer>
        <div className="header__list">
            <Text size='large' color='lowEmphasis' title='medium'>
                Order ID
            </Text>
            <Text size='large' color='lowEmphasis' title='medium'>
                Date
            </Text>
            <Text size='large' color='lowEmphasis' title='medium'>
                Price
            </Text>
            <Text size='large' color='lowEmphasis' title='medium'>
                Status
            </Text>
            <span>
                
            </span>
        </div>
        <Separator/>
    </OrderHeaderContainer>
    )
}