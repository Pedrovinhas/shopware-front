import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Text } from "../../components/Text";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { AlignContainer, CategoriesContainer, ColumnContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Heading } from "../../components/Heading";
import { SideNavigation } from "../../components/SideNavigation";
import { ProductListing } from "../../components/ProductListing";
import { AppBar } from "../../components/AppBar";
import { ChevronLeftIcon } from "../../components/Icons/Chevron/ChevronLeftIcon";
import { HorizontalCards } from "../../components/HorizontalCards";
import { ProductColumns } from "../../components/ProductListing/ProductColumns";
import { ProductFilter } from "../../components/ProductFilter";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../../types/Product";

export function CategoryPage() {
    const navigate = useNavigate()
    const { categoryId } = useParams();

    const [products, setProducts] = useState<Product[]>([])

    // useEffect(() => {
    //   api.get('/products')
    //     .then(({ data }) => {
    //       setProducts(data)
    //       console.log(data)
    //     })
    // }, [])

    useEffect(() => {
      api.get(`/categories/${categoryId}/products`)
        .then(({ data }) => {
          setProducts(data)
          console.log(data)
        })
    }, [])

    return (
        <CategoriesContainer>
           <div className="desktop__categories">
            
           <Header/>
           <Hero hasBlackFriday/>
        <ColumnContainer>
            <Breadcrumbs>
                <Text color="primary" size="medium" title="medium" onClick={() => navigate('/')} >
                    Home
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                {/* {products[0].name} */}
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
            </div>
       

        <div className="mobile__categories">
            <AppBar>
                <ChevronLeftIcon isFilled/>
                <Heading size='small' color='primary' title='regular'>
                    Handbags
                </Heading>
            </AppBar>

            <ProductColumns/>
            <ProductFilter/>
        </div>
        </CategoriesContainer>
    )
}