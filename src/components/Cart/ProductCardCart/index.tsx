import { CardVertical } from "../CardVertical";
import { CartDetails } from "../CartDetails";
import { CartContainer } from "./styles";
import LeatherCoachBag from '../../../assets/Product/leather-coach-bag.png'

export function ProductCardCart() {
    return (
        <CartContainer>

            <div className="cart__products">
            <CardVertical  
                productModel="Coach" 
                productName="Leather Coach Bag"
                productQuantity="1"
                src={LeatherCoachBag}
                withButton={false}
                withPrice={false}
            />
            <CartDetails
                productValue="54.56"
            />
            </div>
            
        </CartContainer>
    )
}