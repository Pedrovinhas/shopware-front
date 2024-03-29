import { AppBar } from "../../components/AppBar"
import { Heading } from "../../components/Heading"
import { StatusBar } from "../../components/StatusBar"
import { useAuth } from "../../hooks/useAuth"
import { Text  } from "../../components/Text"
import { Button } from "../../components/Button"
import EmptyWishlistImage from '../../assets/Alerts/wishlist-empty.png'

import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon"
import { MergeContainer, ReferContainer, WishContainer } from "./styles"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Separator } from "../../components/Separator"
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon"
import { SideNavigationProfile } from "../../components/SideNavigationProfile"

export function WishlistPage() {
    const { user } = useAuth() 
    const navigate = useNavigate()
    return (
        <MergeContainer>
        <div className="header">
            <Header/>
        </div>
        <div className="header__options">

        <Breadcrumbs>
                <Text color="primary" size="medium" title="medium" onClick={() => navigate('/')}>
                    Home
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="primary" size="medium" title="medium" onClick={() => navigate('/user-profile')}>
                    User Profile        
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                My Wishlist      
                </Text>
            </Breadcrumbs>
            <div className="logout__section">
            <Heading color="primary" size="medium" title="bold" >
                My Wishlist
                </Heading>
                
                <Button size="small" variant="outline" >
                    Logout
                </Button>
                
            </div>
        </div>
        <ReferContainer>
        <div className="profile__navigation"> 
        <SideNavigationProfile defaultValue="My Wishlist"/> 
        
        </div>

        <div className="mobile__container">
        <div className="information__header">
                <Text size='extralarge' title="regular" color="dark">
               My Wishlist
                </Text>
                <Separator/>
            </div>
        <WishContainer>
            <StatusBar/>
            <AppBar>
            <div className="heading__text">
                
            <Heading color='primary' size='small' title='bold' className='heading__center'>
                <ChevronLeftIcon isFilled onClick={() => navigate('/user-profile')}/>
                Wishlist
            </Heading>
            </div>
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
        </div>
        </ReferContainer>
        </MergeContainer>
    )
}