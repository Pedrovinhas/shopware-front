import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../types/Product";
import { MinusIcon } from "../Icons/MinusIcon";
import { PlusIcon } from "../Icons/PlusIcon";
import { SelectStepper } from "./styles";

export function Stepper() {
    const [count, setCount] = useState(0);
    const { removeCartItem, addToCart } = useCart();
    
    function handleStepperButton() {
        // addToCart(product)
        setCount(count + 1)
    }
    return (
        <SelectStepper>


            <button 
                className="stepper__subtract" 
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
                
                >
                <MinusIcon isFilled/>
            </button>
            <span className="stepper__number">
                { count }
            </span>
            <button className="stepper__add" onClick={handleStepperButton}>
                <PlusIcon isFilled/>
            </button>

        </SelectStepper>
    )
}