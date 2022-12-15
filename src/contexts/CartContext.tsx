import { createContext, ReactNode, useState } from "react";
import { Product } from "../types/Product";

interface CartContextData {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeCartItem: (productId : string) => void;
    cartTotal: number
    // validateIfItemAlreadyExists: (productId : string) => boolean
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider( { children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    function addToCart(product: Product) {
        setCartItems((prevState) => [...prevState, product] )
      
        
    }

    const cartTotal = cartItems.reduce((total, product) => {
        return total + product.price
    }, 0)

    function removeCartItem(productId: string) {
        setCartItems((state) => state.filter((item) => item._id != productId))
    }

    function validateIfItemAlreadyExists(productId: string) {
        return cartItems.some((product) => product._id === productId)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeCartItem, cartTotal }}>
            { children }
        </CartContext.Provider>
    )
}