import { Button } from "../../Button";
import { Heading } from "../../Heading";
import { Text } from "../../Text";
import { Separator } from "../../Separator";
import { Order, OrderButtons, OrderButtonsCart, OrderCart, OrderContainer, OrderHeader, OrderInformations, OrderText, OrderValue } from "./styles";
import { useNavigate } from "react-router-dom";
import { TextField } from "../../FormControl";

export interface OrderSummaryProps extends 
    OrderHeaderProps, OrderPageTextProps, OrderCartProps, OrderButtonsCartProps, OrderPageButtonsProps {}

export interface OrderHeaderProps {
    withHeader?: boolean;
}

export interface OrderPageTextProps {
    withOrderPageText?: boolean;
}

export interface OrderCartProps {
    withOrderCart?: boolean;
}
export interface OrderPageButtonsProps {
    withOrderPageButtons?: boolean;
}
export interface OrderButtonsCartProps {
    withOrderButtonsCart?: boolean;
}

export function OrderSummary({ withHeader, withOrderPageText, withOrderCart, withOrderButtonsCart, withOrderPageButtons }: OrderSummaryProps) {
    const navigate = useNavigate()
    
    
    return (
        <OrderContainer>
            <OrderInformations>
                <OrderHeader withHeader={withHeader}>
                    <Heading size='small' color="dark" title="medium">
                        Order Summary
                    </Heading>
                    <Separator/>
                </OrderHeader>
                <Order withOrderPageText={withOrderPageText}>
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
                
                <OrderCart withOrderCart={withOrderCart}>
                <OrderText>
                <Text color='highEmphasis' size='medium' title='normal'>
                        Sub Total
                    </Text>
                    <Text color='highEmphasis' size='medium' title='normal'>
                        Tax
                    </Text>
                    <Text color='highEmphasis' size='medium' title='regular'>
                       Total
                    </Text>
                </OrderText>
                <OrderValue>
                <Text color='highEmphasis' size='medium' title='normal'>
                      $109.38
                    </Text>
                    <Text color='highEmphasis' size='medium' title='normal'>
                    $2.00
                    </Text>
                    <Text color='highEmphasis' size='medium' title='regular'>
                    $111.38
                    </Text>
                </OrderValue>
                </OrderCart>
            </OrderInformations>
            <OrderButtons withOrderPageButtons={withOrderPageButtons}>
                <Button variant="primary" size="intermediary" >
                    Place Order
                </Button>
                <Button variant="outline" size="intermediary">
                    Continue Shopping
                </Button>
            </OrderButtons>
            
            <OrderButtonsCart withOrderButtonsCart={withOrderButtonsCart}>
            <TextField hasActionButton={true} actionLabel='CHECK' size="intermediary" text="Apply Coupon Code"/>
            <Button variant="primary" size="large" onClick={() => navigate('/cart')}>
                    Place Order
                </Button>
                <Text decoration="underline" color="primary" size="medium" title="regular" cursor="pointer" onClick={
                            () => navigate('/')
                    }>
                    Continue Shopping
                </Text>
            </OrderButtonsCart>
        </OrderContainer>
    )
}