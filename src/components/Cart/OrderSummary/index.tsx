import { Button } from "../../Button";
import { Heading } from "../../Heading";
import { Text } from "../../Text";
import { Separator } from "../../Separator";
import { Order, OrderButtons, OrderButtonsCart, OrderCart, OrderCartProduct, OrderContainer, OrderHeader, OrderHeaderDetails, OrderInformations, OrderText, OrderValue } from "./styles";
import { useNavigate } from "react-router-dom";
import { TextField } from "../../FormControl";
import { CartProduct, CartProductProps } from "../CartProduct";
import PinkBag from '../../../assets/Product/pink-bag-small.svg'
import { Product } from "../../../types/Product";
import { useCart } from "../../../hooks/useCart";

export interface OrderSummaryProps extends 
    OrderHeaderProps, OrderPageTextProps, OrderCartProps, ICartItemsProps, OrderButtonsCartProps, OrderPageButtonsProps, OrderCartProductProps, OrderHeaderDetailsProps {}

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

export interface OrderCartProductProps {
    withCartProduct: boolean;
}

export interface OrderHeaderDetailsProps {
    withOrderHeaderDetails: boolean;
}

interface ICartItemsProps {
    ICartItem?: Product | undefined;
    cartSubtotal?: number ;
}

export function OrderSummary({ cartSubtotal, ICartItem, withOrderHeaderDetails, withHeader,withCartProduct, withOrderPageText, withOrderCart, withOrderButtonsCart, withOrderPageButtons }: OrderSummaryProps) {
    const { cartTotal, cartItems } = useCart();
    
    const navigate = useNavigate()
    // const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') 

    console.log(cartItems);

    const imageURL = 'http://localhost:3003/uploads/'
    return (
        <OrderContainer>
            <OrderInformations>
                <OrderHeader withHeader={withHeader}>
                    <Heading size='small' color="dark" title="regular">
                        Order Summary
                    </Heading>
                    <Separator/>
                </OrderHeader>
                <OrderCartProduct withCartProduct={withCartProduct}>
                {
                    cartItems.length === 0 ? (
                        <h1> Não há nada aqui </h1>
                    ) : (
                        <>
                        {
                    // cartItems.map((cartItem: typeof ICartItem ) => (
                    //     <CartProduct 
                    //     key={cartItem?._id}
                    //     src={imageURL + cartItem?.imagePath == imageURL ?  cartItem?.imageUrl : imageURL + cartItem?.imagePath } 
                    //     withButton={false} 
                    //     productModel={cartItem?.model}
                    //     productName={cartItem?.name}
                    //     productValue={cartItem?.price}
                        
                    //     withQuantity={false} 
                    //     withPrice={false} 
                    //     withStepper={false} 
                    //     /> 
                    // ))

                    cartItems.map(cartItem => (
                        <CartProduct 
                        key={cartItem?._id}
                        src={imageURL + cartItem?.imagePath == imageURL ?  cartItem?.imageUrl : imageURL + cartItem?.imagePath } 
                        withButton={false} 
                        productModel={cartItem?.model}
                        productName={cartItem?.name}
                        productValue={cartItem?.price}
                        
                        withQuantity={false} 
                        withPrice={false} 
                        withStepper={false} 
                        /> 
                    ))
                }
                        </>
                    )
                }
                
                </OrderCartProduct>
                <OrderHeaderDetails withOrderHeaderDetails={withOrderHeaderDetails}>
                    <Heading size='small' color="dark" title="regular">
                        Order Details
                    </Heading>
                    <Separator/>
                </OrderHeaderDetails>
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
                        {cartTotal}
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
                      {cartSubtotal}
                    </Text>
                    <Text color='highEmphasis' size='medium' title='normal'>
                    $2.00
                    </Text>
                    <Text color='highEmphasis' size='medium' title='regular'>
                    {cartSubtotal}
                    </Text>
                </OrderValue>
                </OrderCart>
            </OrderInformations>
            <OrderButtons withOrderPageButtons={withOrderPageButtons}>
                <Button variant="primary" size="intermediary" onClick={() => navigate('/checkout')}>
                    Place Order
                </Button>
                <Button variant="outline" size="intermediary" onClick={() => navigate('/')}>
                    Continue Shopping
                </Button>
            </OrderButtons>
            
            <OrderButtonsCart withOrderButtonsCart={withOrderButtonsCart}>
            <TextField hasActionButton={true} actionLabel='CHECK' size="intermediary" text="Apply Coupon Code"/>
            <Button variant="primary" size="large" onClick={() => navigate('/checkout')}>
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