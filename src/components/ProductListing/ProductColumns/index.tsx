import { ProductCard } from "../../HorizontalCards/ProductCard"
import PinkBag from '../../../assets/Product/pink-bag-small.svg'
import { GridContainer } from "./styles"

export function ProductColumns() {
    return (
        <GridContainer>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
        </GridContainer>
    )
}