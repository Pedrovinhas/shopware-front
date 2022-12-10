import { CartProduct } from "../CartProduct";
import { CartDetails } from "../CartDetails";
import { CartContainer } from "./styles";
import LeatherCoachBag from '../../../assets/Product/leather-coach-bag.png'
import { useCart } from "../../../hooks/useCart";

export function ProductCardCart() {
    const { cartItems } = useCart();
    const cartQuantity = cartItems.length
    return (
        <CartContainer>

            <div className="cart__products">
            <CartProduct  
                productModel="Coach" 
                productName="Leather Coach Bag"
                productQuantity="1"
                src={LeatherCoachBag}
                withButton={false}
                withPrice={false}
                withStepper={false}
            />
            <CartDetails
                productValue="54.56"
            />
            </div>
            
        </CartContainer>
    )
}