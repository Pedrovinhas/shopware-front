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
import { ProductColumns } from "../../components/ProductListing/ProductColumns";
import { ProductFilter } from "../../components/ProductFilter";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../../types/Product";
import { SkeletonLoading } from "../../components/SkeletonLoading";

export function CategoryPage() {
    const navigate = useNavigate()

    const { categoryId } = useParams();
    const [products, setProducts] = useState<Product[]>()
    const [category, setCategory] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const [categories, setCategories] = useState<Product[]>([])
    
    useEffect(() => {
        Promise.all([
            api.get(`/categories/${categoryId}/products`),
            api.get(`/categories`),
        ]).then(([categoriesResponse, productsResponse]) => {
            setCategories(categoriesResponse.data)
            console.log(categoriesResponse.data)
            setProducts(productsResponse.data)

            setIsLoading(false)
        })
    }, [])


    // useEffect(() => {
    //   api.get('/products')
    //     .then(({ data }) => {
    //         setIsLoading(true)
    //       setProducts(data)
    //     })
    // }, [])

    // const fetchCategories = async () => {
    //     setIsLoading(true)
    //     const { data } = await api.get(`/categories`)
    //     setCategories(data)
    //     console.log(data)
    // }
    
    

    // const fetchProducts = async () => {
    //     setIsLoading(true)
    //     const { data } = await api.get(`/categories/${categoryId}/products`)
    //     setProducts(data)

        
    // }

    // useEffect(() => {
    //     fetchProducts()
    //     fetchCategories()
    //     setIsLoading(false);
    // }, [])

    const filteredCategory = products?.filter((category) => category._id === categoryId)


        if(!products) {
            return <SkeletonLoading/>
        }
        return  ( 
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
                 
                   {filteredCategory === undefined ? 'All' : filteredCategory[0].name} 
                 
                 </Text>
             </Breadcrumbs>
             
             <Heading color="primary" size="medium" title="bold" >
             {filteredCategory === undefined ? 'All' : filteredCategory[0].name} 
             </Heading>
 
             <AlignContainer>
                 {/* <SideNavigation/> */}
                 <ProductListing/>
             </AlignContainer>
         </ColumnContainer>
         <Footer/>
             </div>
        
 
         <div className="mobile__categories">
             <div className="margin__container">
                 <AppBar>
                     <ChevronLeftIcon isFilled cursor='pointer' onClick={() => navigate('/')}/>
                     <Heading size='small' color='primary' title='regular'>
                     {filteredCategory === undefined ? 'All' : filteredCategory[0].name}
                     </Heading>
                 </AppBar>
             </div>
 
             <ProductColumns/>
             <ProductFilter/>
         </div>
         </CategoriesContainer>)
       
}