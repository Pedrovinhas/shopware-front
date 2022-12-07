import {useNavigate, useParams} from "react-router-dom";
import {Breadcrumbs} from "../../components/Breadcrumbs";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";
import {ChevronRightSmallIcon} from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import {ProductPics} from "../../components/ProductPics";
import {Text} from "../../components/Text";
import {Container, ProductContainer, ProductPageContainer, ProductPageMobile, RowContainer} from "./styles";
import CoachBigPhoto from '../../assets/Product/coach-big.png'
import { ProductInfo } from "../../components/ProductInfo";
import { ProductDescription } from "../../components/ProductDescription";
import { AppBar } from "../../components/AppBar";
import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../../types/Product";
import { SkeletonLoading } from "../../components/SkeletonLoading";

export function ProductPage() {
    const { productId } = useParams();
    const navigate = useNavigate()
    const imageURL = 'http://localhost:3003/uploads/'

    const [product, setProduct] = useState<Product>()
   
    useEffect(() => {
      api.get(`/products/${productId}`)
        .then(({ data }) => {
          setProduct(data)         
        })
    }, [])
    

        if(!product) {
            return <SkeletonLoading/>
        }

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
                            () => navigate(`/category`)
                    }>
                       {product?.category?.name}
                    </Text>
                    <ChevronRightSmallIcon isFilled/>
                    <Text color="lowEmphasis" size="medium" title="medium">
                    {product?.name}</Text>
                </Breadcrumbs>
                <RowContainer>
                    <ProductContainer>
                        <ProductPics 
                            productBigImage={imageURL + product?.imagePath == imageURL ?  product?.imageUrl : imageURL + product?.imagePath}
                            productSmallImage={imageURL + product?.imagePath == imageURL ?  product?.imageUrl : imageURL + product?.imagePath}
                            />
                    </ProductContainer>
                 
                    <ProductInfo 
                        product={product!}
                        // model={product?.model} 
                        // price={product?.price}
                        // name={product?.name}
                        />
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
                        product={product!}
                        // model={product?.model} 
                        // price={product?.price}
                        // name={product?.name}
                        />
        </ProductPageMobile>
        </>
    )
}
