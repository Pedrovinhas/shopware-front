import { createContext, ReactNode, useState } from "react";
import { Product } from "../types/Product";

interface CartContextData {
    cartItems: Product[];
    addToCart: (product: Product) => void;
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

    // function validateIfItemAlreadyExists(productId: string) {
    //     return cartItems.some((product) => product._id === productId)
    // }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            { children }
        </CartContext.Provider>
    )
}