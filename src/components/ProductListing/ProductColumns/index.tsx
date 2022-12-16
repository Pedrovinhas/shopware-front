import { ProductCard } from "../../HorizontalCards/ProductCard";
import { Container, EmptyProducts, GridContainer, TabLink, TabsContainer, ToggleGroupItem, ToggleGroupRoot } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../types/Product";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Text } from "../../Text";
import ProductsEmptyImage from "../../../assets/404.png"
import { Heading } from "../../Heading";
import { SideNavigation } from "../../SideNavigation";
import { ListingOptions } from "../ListingOptions";


// const productsMock: Product[] = [{}]

const imageURL = 'http://localhost:3003/uploads/'

export function ProductColumns() {
    const navigate = useNavigate();
    const { categoryId } = useParams();

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
      api.get('/products')
        .then(({ data }) => {
          setProducts(data)
     
          console.log(data)
        })
    }, [])

    useEffect(() => {
      api.get(`/categories/${categoryId}/products?page=${pageNumber}`)
        .then(({ data }) => {
          setProducts(data)
        
          console.log(data)
        })
    }, [categoryId, pageNumber])

    const nextPage = () => {
      setPageNumber(Math.min(5 - 1, pageNumber + 1))
    }

    return (
            <>
                { products.length == 0  ?  (
                  <Container>
                
                 
                  <SideNavigation/>
                  <div className="product__listing">
                  <ListingOptions/>
                  <EmptyProducts> 
                    <img src={ProductsEmptyImage} alt="Empty Products Section" />
                    <Heading color="dark" size="medium" title="bold">
                      Sorry!
                   </Heading>
                    <Text color="dark" size="medium" title="medium">
                      Seems there are no products to buy here at moment.
                    </Text>
                  </EmptyProducts>
                  </div>
                 
                  
                  </Container>
                )
                :
                (
                  <Container>
                  
                   
                      <SideNavigation/>
                      <div className="product__listing">
                      <ListingOptions/>
                      <GridContainer>

                          { 
                          products.map((product) => (
                              <ProductCard 
                                src={imageURL + product.imagePath == imageURL ?  product.imageUrl : imageURL + product.imagePath } 
                                productName={product.name} 
                                productModel={product.model}
                                productValue={product.price.toFixed(2)}
                                withButton={false}
                                withTrending={false}
                                onClick={() => navigate(`/products/${product._id}`)}
                                />
                          )) 
                          }
                          </GridContainer>
                          <TabsContainer>
                              <ToggleGroupRoot 
                                type='single' 
                                className='filter-icons'
                                defaultValue='1'
                                >
                                <ToggleGroupItem value='1' onClick={() => {setPageNumber(0)}}>
                                  <Tab label="1"/>
                                </ToggleGroupItem>

                                <ToggleGroupItem value='2' onClick={() => {setPageNumber(1)}}>
                                    <Tab label="2"/>
                                </ToggleGroupItem>

                                <ToggleGroupItem value='3' onClick={() => {setPageNumber(2)}}>
                                    <Tab label="3"/>
                                </ToggleGroupItem>

                                <ToggleGroupItem value='4' onClick={() => {setPageNumber(3)}}>
                                    <Tab label="4"/>
                                </ToggleGroupItem>

                                <ToggleGroupItem  value='5' onClick={() => {setPageNumber(4)}}>
                                    <Tab label="5"/>
                                </ToggleGroupItem>
                                
                            </ToggleGroupRoot>

                            <button className='tab-next' onClick={nextPage}>
                              Next
                            </button>

                            </TabsContainer>
                            </div>
                          </Container>
                ) 
                }
            </>
          )
    
}


export interface TabProps {
  label: string;
  onClick?: () => void;
}

function Tab({ label }: TabProps) {
  return (
      <TabLink>
          {label}
      </TabLink>
  )
}