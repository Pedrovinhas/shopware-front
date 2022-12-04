import { ProductCard } from "../../HorizontalCards/ProductCard";
import PinkBag from '../../../assets/Product/pink-bag-small.svg';
import Remus from '../../../assets/Product/remus.png';
import BlackBag from '../../../assets/Product/black-bag.png';
import LeatherCoachBag from '../../../assets/Product/leather-coach-bag.png';
import { GridContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../types/Product";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";


const productsMock: Product[] = [
  {
    "_id": "638a9c645e0f4e799f1556a6",
    "model": "Black Bag",
    "name": "Boujee",
    "price": 56.49,
    "imagePath": "1670028388569-boujee.png",
    "imageUrl": "http://localhost:3003/remus.png",
    "rating": 4.5,
    "productAttributes": [
      {
        "size": "1 metro",
        "brand": "Chanel",
        "color": "pink",
        "_id": "638a9c645e0f4e799f1556a7"
      }
    ],
    "category": "6388e6002aca14a914b6089b",
  },
  {
    "_id": "638aa4b27ff80cf5061afb4e",
    "model": "Black Bag",
    "name": "Boujee",
    "imageUrl": "http://localhost:3003/boujee.png",
    "price": 56.49,
    "imagePath": "1670030514648-boujee.png",
    "rating": 4.5,
    "productAttributes": [
      {
        "size": "1 metro",
        "brand": "Chanel",
        "color": "black",
        "_id": "638aa4b27ff80cf5061afb4f"
      }
    ],
    "category": "6388e6002aca14a914b6089b",
  },
  {
    "_id": "638aa5717ff80cf5061afb51",
    "model": "Casual Watch",
    "imageUrl": "http://localhost:3003/remus.png",
    "name": "Louis Mornaud",
    "price": 78.1,
    "imagePath": "1670030705153-louis-mornaud.png",
    "rating": 5,
    "productAttributes": [
      {
        "brand": "H2M",
        "_id": "638aa5717ff80cf5061afb52"
      }
    ],
    "category": "638a3f3c7e83d66356c9955c",
  }
]

const imageURL = 'http://localhost:3003/uploads/'

export function ProductColumns() {
    const navigate = useNavigate();

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      api.get('/products')
        .then(({ data }) => {
          setProducts(data)
          console.log(data)
        })
    }, [])

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
                  onClick={() => navigate(`${product._id}`)}
                  />
             )) 
            }


            {/* <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={Remus} productModel='Remus' productValue='$57.00' productName='Brown Strap Bag' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={LeatherCoachBag} productModel='Coach' productValue='$54.69' productName='Leather Coach Bag' withRating={true} withButton={false} withDiscount={true} withTrending={true}/>
            <ProductCard onClick={() => navigate('/product')} src={BlackBag} productModel='Boujee' productValue='$56.49' productName='Black Bag' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/> */}
        </GridContainer>
    )
}