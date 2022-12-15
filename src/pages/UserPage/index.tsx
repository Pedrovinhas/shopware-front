import { useNavigate } from "react-router-dom";
import { AppBar } from "../../components/AppBar";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { ProfileSection } from "../../components/ProfileSection";
import { SideNavigationProfile } from "../../components/SideNavigationProfile";
import { StatusBar } from "../../components/StatusBar";
import { Text } from "../../components/Text";
import { UserAvatar } from "../../components/UserAvatar";
import { useAuth } from "../../hooks/useAuth";
import { Container, ContainerResponsive, HeadingContainer, MobileSection, UserSection } from "./styles";

export function UserPage() {
    const { handleLogout } = useAuth()

    const navigate = useNavigate()
    return (
        <ContainerResponsive>
        <div className="desktop__container">
        <Header/>
        <Container>
            <Breadcrumbs>
                <Text color="primary" size="medium" title="medium" onClick={() => navigate('/')}>
                    Home
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                    User Profile        
                </Text>
            </Breadcrumbs>
            <HeadingContainer>
                <Heading color="primary" size="medium" title="bold" >
                Personal Information
                </Heading>
                <Button size="small" variant="outline" onClick={handleLogout} >
                    Logout
                </Button>
            </HeadingContainer>

            <UserSection>
                <SideNavigationProfile defaultValue="Profile"/>
                <ProfileSection/>
            </UserSection>
        
         </Container>
        <Footer/>
        </div>

        <MobileSection>
            <StatusBar />
            <AppBar>
                <Heading color='primary' size='small' title='bold'>
                    Profile
                </Heading>
            </AppBar>
            <UserAvatar/>
            <div className="side-navigation">
            <SideNavigationProfile defaultValue="Profile"/>
            <Button size="large" variant="outline" onClick={handleLogout} >
                    Logout
            </Button>
            </div>
        <BottomNavigation defaultValue="3"/>
        </MobileSection>
        </ContainerResponsive>
    )
}