import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { ProfileSection } from "../../components/ProfileSection";
import { SideNavigation } from "../../components/SideNavigation";
import { SideNavigationProfile } from "../../components/SideNavigationProfile";
import { Text } from "../../components/Text";
import { Container, HeadingContainer, UserSection } from "./styles";

export function UserPage() {
    const navigate = useNavigate()
    return (
        <>
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
                <Button size="small" variant="outline"  >
                    Logout
                </Button>
            </HeadingContainer>

            <UserSection>
                <SideNavigationProfile defaultValue="Profile"/>
                <ProfileSection/>
            </UserSection>
        
         </Container>
        <Footer/>
        </>
    )
}