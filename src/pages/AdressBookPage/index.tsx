import { useNavigate } from "react-router-dom";
import { AppBar } from "../../components/AppBar";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon";
import { StatusBar } from "../../components/StatusBar";
import { MergeContainer, ReferContainer, WishContainer } from "./styles";
import { Text } from "../../components/Text";
import AddressImg from '../../assets/Alerts/address-book.png'
import { SideNavigationProfile } from "../../components/SideNavigationProfile";
import { Header } from "../../components/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { Separator } from "../../components/Separator";
import { useAuth } from "../../hooks/useAuth";

export function AdressBookPage() {
    const { user } = useAuth()
    console.log(user);
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
                My Address Book 
                </Text>
            </Breadcrumbs>
            <div className="logout__section">
            <Heading color="primary" size="medium" title="bold" >
                My Address Book
                </Heading>
                
                <Button size="small" variant="outline" >
                    Logout
                </Button>
                
            </div>
        </div>
        <ReferContainer>
        <div className="profile__navigation"> 
        <SideNavigationProfile defaultValue="My Address Book"/> 
        
        </div>

        <div className="mobile__container">
        <div className="information__header">
                <Text size='extralarge' title="regular" color="dark">
                My Address Book
                </Text>
                <Separator/>
            </div>

            {
                user?.address?.length <= 0 ?
                (
                    
        <WishContainer>
            <StatusBar/>
            <AppBar>
            <div className="heading__text">
                
            <Heading color='primary' size='small' title='bold' className='heading__center'>
                <ChevronLeftIcon isFilled onClick={() => navigate('/user-profile')}/>
                My Addres Book
            </Heading>
            </div>
            </AppBar>
          
            <div className="text__content">
            
            
        <img src={AddressImg} alt="Empty Wishlist" />
        <div className="inf__content">
        <Heading color='highEmphasis' size='midsmall' title='bold'>
            No Address
        </Heading>
        <Text size='medium' color='dark' title='regular'> 
            It seems you have not updated your address yet.
        </Text> 
        </div>
        </div>
        <div className="button">
        <Button size="large" variant="primary" onClick={() => navigate('/products')} >
            Add Address
        </Button>
        </div>
        </WishContainer>
                )
                : 

           
        <div>
                <Text color="primary" size="medium" title="medium" >
                            {user?.address[0]?.street}      
                        </Text>
                        <Text color="primary" size="medium" title="medium" >
                            {user?.address[0]?.city}      
                        </Text>
                        <Text color="primary" size="medium" title="medium" >
                            {user?.address[0]?.pinCode}      
                        </Text>
                        <Text color="primary" size="medium" title="medium">
                            {user?.address[0]?.state}      
                        </Text>
                </div>
            }


        </div>
        </ReferContainer>
        </MergeContainer>
    )
}