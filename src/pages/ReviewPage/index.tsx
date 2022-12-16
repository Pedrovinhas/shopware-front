
import { AppBar } from "../../components/AppBar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { SideNavigationProfile } from "../../components/SideNavigationProfile";
import { StatusBar } from "../../components/StatusBar";
import { MergeContainer, ReferContainer, WishContainer } from "./styles";
import { Text } from "../../components/Text";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";

export function ReviewPage() {
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
                My Reviews    
                </Text>
            </Breadcrumbs>
            <div className="logout__section">
            <Heading color="primary" size="medium" title="bold" >
            My Reviews
                </Heading>
                
                <Button size="small" variant="outline" >
                    Logout
                </Button>
                
            </div>
        </div>
        <ReferContainer>
        <div className="profile__navigation"> 
        <SideNavigationProfile defaultValue="My Reviews"/> 
        
        </div>

        <div className="mobile__container">
        <div className="information__header">
                <Text size='extralarge' title="regular" color="dark">
                My Reviews
                </Text>
                <Separator/>
            </div>
        <WishContainer>
            <StatusBar/>
            <AppBar>
            <div className="heading__text">
                
            <Heading color='primary' size='small' title='bold' className='heading__center'>
                <ChevronLeftIcon isFilled onClick={() => navigate('/user-profile')}/>
                My Reviews
            </Heading>
            </div>
            </AppBar>
          
            <div className="text__content">
            
        
        <div className="inf__content">
        <Heading color='highEmphasis' size='midsmall' title='bold'>
                  Woops...
        </Heading>
        <Text size='medium' color='dark' title='regular'> 
            It seems you have not made any reviews yet. 
        </Text> 
        </div>
        </div>
        <div className="button">
        <Button size="large" variant="primary" onClick={() => navigate('/products')} >
            Make a Review
        </Button>
        </div>
        </WishContainer>
        </div>
        </ReferContainer>
        </MergeContainer>
    )
}