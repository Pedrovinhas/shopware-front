import { ProductCard } from "../../HorizontalCards/ProductCard"
import PinkBag from '../../../assets/Product/pink-bag-small.svg'
import Remus from '../../../assets/Product/remus.png'
import BlackBag from '../../../assets/Product/black-bag.png'
import LeatherCoachBag from '../../../assets/Product/leather-coach-bag.png'
import { GridContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export function ProductColumns() {
    const navigate = useNavigate()
    return (
        <GridContainer>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={Remus} productModel='Remus' productValue='$57.00' productName='Brown Strap Bag' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={LeatherCoachBag} productModel='Coach' productValue='$54.69' productName='Leather Coach Bag' withRating={true} withButton={false} withDiscount={true} withTrending={true}/>
            <ProductCard onClick={() => navigate('/product')} src={BlackBag} productModel='Boujee' productValue='$56.49' productName='Black Bag' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={true} withButton={false} withDiscount={true} withTrending={false}/>
        </GridContainer>
    )
}