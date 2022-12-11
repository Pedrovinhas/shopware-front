import { Link } from "react-router-dom";
import { CheckboxButton } from "../../CheckboxButton";
import { ArrowRightIcon } from "../../Icons/ArrowIcon/ArrowRightIcon";
import { CheckIcon } from "../../Icons/CheckIcon";
import { ChevronRightIcon } from "../../Icons/Chevron/ChevronRightIcon";
import { Text } from "../../Text";
import { OrderListContainer, OrderStatus } from "./styles";

export interface OrderProps extends OrderStatusProps {
    orderId: string;
    orderDate: string;
    orderPrice: string;
    
}

export interface OrderStatusProps {
    orderStatus: 'Paid' | 'Processing' | 'Cancelled';
}

export function OrderList({ orderId, orderDate, orderPrice, orderStatus}: OrderProps) {
    return (
        <OrderListContainer>    
            <div className="order__id">
                 <CheckboxButton icon={<CheckIcon isFilled={false}/>} text/>
                 <Text size="large" color="highEmphasis" title="medium">
                 
                 {orderId}
                 </Text>
            </div>
          
            <div className="order__date">
            <Text size="large" color="highEmphasis" title="medium">
                {orderDate}
             </Text>
                
            </div>
            <div className="order__price">
            <Text size="large" color="highEmphasis" title="medium">
                {orderPrice}
             </Text>   
            </div>
            <OrderStatus orderStatus={orderStatus}>
            <Text size="large" color="primary" title="medium">
                {orderStatus}
             </Text>  
            </OrderStatus>
            
            <Link to='/user-profile/my-orders/orderId' className="order__item">
            <ChevronRightIcon isFilled/>
            </Link>
            
        </OrderListContainer>
    )
}