import { useNavigate } from "react-router-dom"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Footer } from "../../components/Footer"
import { Heading } from "../../components/Heading"
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon"
import { SideNavigationProfile } from "../../components/SideNavigationProfile"
import { Container, HeadingContainer, UserSection } from "../UserPage/styles"
import { Text } from "../../components/Text"
import { Header } from "../../components/Header"
import { OrderContainer } from "./styles"
import { OrderDetails } from "../../components/OrderDetails"

export function OrdersPage() {
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
                <Text color="primary" size="medium" title="medium">
                    User Profile        
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                   My Orders  
                </Text>
            </Breadcrumbs>
            <HeadingContainer>
                <Heading color="primary" size="medium" title="bold" >
                My Orders 
                </Heading>
            </HeadingContainer>

            <OrderContainer>
                <SideNavigationProfile defaultValue="My Orders"/>
                <OrderDetails />
            </OrderContainer>
        
         </Container>
        <Footer/>
        </>
    )
}