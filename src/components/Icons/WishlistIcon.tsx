import { useState } from "react"
import { IconProps } from "../../types/IconProps"


export function WishlistIcon(props: IconProps) {
  const [stroke, setStroke] = useState<boolean | undefined>(props.hasStroke)
  const [fill, setFill] = useState<boolean | undefined>()

  function handleWishlist() {
    setStroke(!props.hasStroke)
  
    setFill(!props.isFilled)
    console.log(props.isFilled)
  }


  return (
    <svg
    width={24}
    cursor='pointer'
    height={24}
    // onClick={handleWishlist}
    fill={props.isFilled ? '#1B4B66' : 'none' }
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20.25S2.625 15 2.625 8.625A4.876 4.876 0 0 1 12 6.747h0a4.876 4.876 0 0 1 9.375 1.878C21.375 15 12 20.25 12 20.25Z"
      stroke={props.hasStroke ? '#13101E' : '#1B4B66' }
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}




