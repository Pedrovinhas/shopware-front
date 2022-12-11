import styled, { css } from "styled-components";
import { OrderStatusProps } from ".";

export const OrderListContainer = styled.div`
    width: 100%;
    height: 4.875rem;
    background-color: ${props => props.theme.colors.grey};

    padding: 1.1875rem 1.5rem;

    border-radius: 8px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .order__id {
        display: flex;
        align-items: center;

        gap: 4px;

        div {
            width: 30px;
        }
    }

    .order__date {
        width: 139px;
        margin-left: 30px;
       
    }

    .order__price {
        margin-right: 70px;
    }


`

export const OrderStatus = styled.span<OrderStatusProps>`
     margin-right: 90px;

${(props) => props.orderStatus === 'Processing' && css`

    p {
        color: ${props => props.theme.colors.highlight};
    }
    
`} 

${(props) => props.orderStatus === 'Cancelled' && css`

    p {
        color: ${props => props.theme.colors.error};
    }
    
`} 
`