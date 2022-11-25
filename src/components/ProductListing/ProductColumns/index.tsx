import { ProductCard } from "../../HorizontalCards/ProductCard"
import PinkBag from '../../../assets/Product/pink-bag-small.svg'
import { GridContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export function ProductColumns() {
    const navigate = useNavigate()
    return (
        <GridContainer>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
        </GridContainer>
    )
}