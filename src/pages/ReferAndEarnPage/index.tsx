import { useNavigate } from "react-router-dom";
import { AppBar } from "../../components/AppBar";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon";
import { StatusBar } from "../../components/StatusBar";
import { MergeContainer, ReferContainer, WishContainer } from "./styles";
import { Text } from "../../components/Text";
import ReferImg from '../../assets/Alerts/refer-and-earn.png'
import { SideNavigationProfile } from "../../components/SideNavigationProfile";
import { Header } from "../../components/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { Separator } from "../../components/Separator";

export function ReferAndEarnPage() {
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
                    Refer and Earn   
                </Text>
            </Breadcrumbs>
            <div className="logout__section">
            <Heading color="primary" size="medium" title="bold" >
                Refer and Earn
                </Heading>
                
                <Button size="small" variant="outline" >
                    Logout
                </Button>
                
            </div>
        </div>
        <ReferContainer>
        <div className="profile__navigation"> 
        <SideNavigationProfile defaultValue="Refer and Earn"/> 
        
        </div>

        <div className="mobile__container">
        <div className="information__header">
                <Text size='extralarge' title="regular" color="dark">
                    Refer and Earn
                </Text>
                <Separator/>
            </div>
        <WishContainer>
            <StatusBar/>
            <AppBar>
            <div className="heading__text">
                
            <Heading color='primary' size='small' title='bold' className='heading__center'>
                <ChevronLeftIcon isFilled onClick={() => navigate('/user-profile')}/>
                Refer & Earn
            </Heading>
            </div>
            </AppBar>
          
            <div className="text__content">
        
                   
            <img src={ReferImg} alt="Empty Wishlist" />
            <div className="inf__content">
            <Text size='medium' color='highEmphasis' title='regular'> 
                Invite your friend and earn $20 on every invite
            </Text> 
            <span className="code">
            <Text size='medium' color='highEmphasis' title='regular'> 
                IVN6374730
            </Text> 
            </span>
            <Text size='small' color='lowEmphasis' title='regular'> 
            Tap to copy the code.
            </Text> 

            </div> 

           
            <span className="ul__information">
            <Text size='medium' color='highEmphasis' title='regular'> 
                How does this works?
            </Text> 
            <ul>
                <li>
                <Text size='medium' color='lowEmphasis' title='regular'> 
                Invite your friends to CORAL
            </Text>
                </li>
                <li>
                <Text size='medium' color='lowEmphasis' title='regular'> 
                Ask your friends to place their order with your code & get $20 discount
            </Text>
                </li>
                <li>
                <Text size='medium' color='lowEmphasis' title='regular'> 
                Once the order gets delivered you get the discount as well.                
            </Text>
                </li>
            </ul>
            </span>

            <div className="button">
            <Button size="large" variant="primary" onClick={() => navigate('/products')} >
                Invite Now
            </Button>
            </div>
   

            </div>
        </WishContainer>
        </div>
        </ReferContainer>
        </MergeContainer>
    )
}