import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Text } from "../../components/Text";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { AlignContainer, ColumnContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading";
import { SideNavigation } from "../../components/SideNavigation";
import { ProductListing } from "../../components/ProductListing";

export function CategoryPage() {
    const navigate = useNavigate()
    return (
        <>
         <Header/>
        <Hero hasBlackFriday/>
        <ColumnContainer>
            <Breadcrumbs>
                <Text color="primary" size="medium" title="medium" onClick={() => navigate('/')} >
                    Home
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                    Handbag { /* Vou ter que passar isso por props quando clicar lá no componente Horizontal Card (agrupar tudo em um Array de Objetos e fazer .map?) */}
                </Text>
            </Breadcrumbs>

            <Heading color="primary" size="medium" title="bold" >
                Handbags  { /* Vou ter que passar isso por props, mas não sei como */}
            </Heading>

            <AlignContainer>
                <SideNavigation/>
                <ProductListing/>
            </AlignContainer>
        </ColumnContainer>
            

      
        <Footer/>
        </>
    )
}