import { ProductCard } from "../../HorizontalCards/ProductCard";
import { GridContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../types/Product";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";


// const productsMock: Product[] = [{}]

const imageURL = 'http://localhost:3003/uploads/'

export function ProductColumns() {
    const navigate = useNavigate();
    const { categoryId } = useParams();

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      api.get('/products')
        .then(({ data }) => {
          setProducts(data)
          console.log(data)
        })
    }, [])

    useEffect(() => {
      api.get(`/categories/${categoryId}/products`)
        .then(({ data }) => {
          setProducts(data)
          console.log(data)
        })
    }, [categoryId])

    return (
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
            

            {/* <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={Remus} productModel='Remus' productValue='$57.00' productName='Brown Strap Bag' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/> */}
        </GridContainer>
    )
}