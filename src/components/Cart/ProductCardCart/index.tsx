import { CartProduct } from "../CartProduct";
import { CartDetails } from "../CartDetails";
import { CartContainer } from "./styles";
import LeatherCoachBag from '../../../assets/Product/leather-coach-bag.png'
import { useCart } from "../../../hooks/useCart";

export function ProductCardCart() {
    const { cartItems, removeCartItem } = useCart();
    const imageURL = 'http://localhost:3003/uploads/'
    const cartQuantity = cartItems.length
    return (
        <CartContainer>

            <div className="cart__products">
       
            {
                  cartItems.map(cartItem => (

                    <>
                        <CartProduct 
                        key={cartItem._id}
                        src={imageURL + cartItem.imagePath == imageURL ?  cartItem.imageUrl : imageURL + cartItem.imagePath } 
                        withButton={false} 
                        productModel={cartItem.model}
                        productName={cartItem.name}
                        productValue={cartItem.price}
                        
                        
                        withQuantity={false} 
                        withPrice={false} 
                        withStepper={false} 
                        /> 
                        <CartDetails
                            productValue={(cartItem.price)}
                            onClick={() => removeCartItem(cartItem._id!)}
                        />
                    </>
                    ))
                    }
           
                  
                    
            </div>
            
        </CartContainer>
    )
}