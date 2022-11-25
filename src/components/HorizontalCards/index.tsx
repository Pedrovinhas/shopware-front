import { Heading } from "../Heading";
import { ProductCard } from "./ProductCard";
import PinkBag from '../../assets/Product/pink-bag-small.svg'
import Remus from '../../assets/Product/remus.png'
import BlackBag from '../../assets/Product/black-bag.png'
import LeatherCoachBag from '../../assets/Product/leather-coach-bag.png'
import { Cards, CardsDiv, CardsNav } from "./styles";
import { Button } from "../Button";
import { ChevronRightIcon } from "../Icons/Chevron/ChevronRightIcon";
import { useNavigate } from "react-router-dom";

export interface HorizontalCardsProps {}

export function HorizontalCards() {
    const navigate = useNavigate()

    return (
        <CardsDiv>
            <CardsNav>
            <Heading color="highEmphasis" size="large" title="regular" >
                New Arrivals
            </Heading>
            <Button size="small" variant="secondary" onClick={() => navigate('/category')}>
                View All
                <ChevronRightIcon isFilled={true}/>
            </Button>
            </CardsNav>

            <Cards>
             <ProductCard src={PinkBag} productModel='Grande' productValue='$39.49' productName='Blossom Pouch' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
             <ProductCard src={LeatherCoachBag} productModel='Coach' productValue='$54.69' productName='Leather Coach Bag' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
             <ProductCard src={Remus} productModel='Remus' productValue='$57.00' productName='Brown Strap Bag' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
             <ProductCard src={BlackBag} productModel='Boujee' productValue='$56.49' productName='Black Bag' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
            </Cards>
        </CardsDiv>
    )
}