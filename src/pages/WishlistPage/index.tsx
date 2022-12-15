import { AppBar } from "../../components/AppBar"
import { Heading } from "../../components/Heading"
import { StatusBar } from "../../components/StatusBar"
import { useAuth } from "../../hooks/useAuth"
import { Text  } from "../../components/Text"
import { Button } from "../../components/Button"
import EmptyWishlistImage from '../../assets/Alerts/wishlist-empty.png'

import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon"
import { WishContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export function WishlistPage() {
    const { user } = useAuth() 
    const navigate = useNavigate()
    return (
        <WishContainer>
        <StatusBar/>
        <AppBar>
       
        <Heading color='primary' size='small' title='bold' className='heading__center'>
            <ChevronLeftIcon isFilled onClick={() => navigate('/')}/>
            My Wishlist
        </Heading>
        </AppBar>
        <div className="text__content">
            
            
        <img src={EmptyWishlistImage} alt="Empty Wishlist" />
        <div className="inf__content">
        <Heading color='highEmphasis' size='midsmall' title='bold'>
           
                  Well...
        </Heading>
        <Text size='medium' color='dark' title='regular'> 
            It seems you have not added any products to for wishlist. 
        </Text> 
        </div>
        </div>
        <div className="button">
        <Button size="large" variant="primary" onClick={() => navigate('/products')} >
            Start Shopping
        </Button>
        </div>
        </WishContainer>
    )
}