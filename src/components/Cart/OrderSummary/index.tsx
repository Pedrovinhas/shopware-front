import { Button } from "../../Button";
import { Heading } from "../../Heading";
import { Text } from "../../Text";
import { Separator } from "../../Separator";
import { Order, OrderButtons, OrderContainer, OrderHeader, OrderInformations, OrderText, OrderValue } from "./styles";

export function OrderSummary() {
    return (
        <OrderContainer>
            <OrderInformations>
                <OrderHeader>
                    <Heading size='small' color="dark" title="medium">
                        Order Summary
                    </Heading>
                    <Separator/>
                </OrderHeader>
                <Order>
                <OrderText>
                <Text color='lowEmphasis' size='large' title='medium'>
                        Sub Total
                    </Text>
                    <Text color='lowEmphasis' size='large' title='medium'>
                        Discount
                    </Text>
                    <Text color='lowEmphasis' size='large' title='medium'>
                        Delivery Fee
                    </Text>
                    <Text color='highEmphasis' size='large' title='regular'>
                        Grand Total
                    </Text>
                </OrderText>
                <OrderValue>
                <Text color='highEmphasis' size='large' title='regular'>
                      $119.69
                    </Text>
                    <Text color='highEmphasis' size='large' title='regular'>
                    -$13.40
                    </Text>
                    <Text color='highEmphasis' size='large' title='regular'>
                    -$0.00
                    </Text>
                    <Text color='highEmphasis' size='large' title='regular'>
                    $106.29
                    </Text>
                </OrderValue>
                </Order>
            </OrderInformations>
            <OrderButtons>
                <Button variant="primary" size="intermediary" >
                    Place Order
                </Button>
                <Button variant="outline" size="intermediary">
                    Continue Shopping
                </Button>
            </OrderButtons>
        </OrderContainer>
    )
}