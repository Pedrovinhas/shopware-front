import {useNavigate} from "react-router-dom";
import {Breadcrumbs} from "../../components/Breadcrumbs";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";
import {ChevronRightSmallIcon} from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import {ProductPics} from "../../components/ProductPics";
import {Text} from "../../components/Text";
import {Container, ProductContainer, ProductPageContainer, ProductPageMobile, RowContainer} from "./styles";
import CoachBigPhoto from '../../assets/Product/coach-big.png'
import CoachSmallPhoto from '../../assets/Product/coach-small.png'
import { ProductInfo } from "../../components/ProductInfo";
import { ProductDescription } from "../../components/ProductDescription";
import { AppBar } from "../../components/AppBar";
import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon";

export function ProductPage() {
    const navigate = useNavigate()
    return (
        <>
        <ProductPageContainer>
            <Header/>
            <Container>
                <Breadcrumbs>
                    <Text color="primary" size="medium" title="medium"
                        onClick={
                            () => navigate('/')
                    }>
                        Home
                    </Text>
                    <ChevronRightSmallIcon isFilled/>
                    <Text color="primary" size="medium" title="medium"
                        onClick={
                            () => navigate('/category')
                    }>
                        Handbag
                    </Text>
                    <ChevronRightSmallIcon isFilled/>
                    <Text color="lowEmphasis" size="medium" title="medium">
                        Label {/* Vou ter que passar isso por props quando clicar lá no componente Horizontal Card (agrupar tudo em um Array de Objetos e fazer .map?) */} </Text>
                </Breadcrumbs>
                <RowContainer>
                    <ProductContainer>
                        <ProductPics 
                            productBigImage={CoachBigPhoto}
                            productSmallImage={CoachSmallPhoto}/>
                    </ProductContainer>
                    <ProductInfo 
                        productModel="asas" 
                        productValue="$54.69" 
                        productName="dsad"/>
                </RowContainer>
                    <ProductDescription/>
            </Container>

            <div className="footer__desktop">
            <Footer/>
            </div>

            
           
        </ProductPageContainer>

        <ProductPageMobile>
                <AppBar>
                    <ChevronLeftIcon isFilled/>
                </AppBar>
                <ProductPics productBigImage={CoachBigPhoto}/>
                <ProductInfo 
                        productModel="asas" 
                        productValue="$54.69" 
                        productName="dsad"/>
        </ProductPageMobile>

        </>
    )
}
