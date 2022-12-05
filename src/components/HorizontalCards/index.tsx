import { Heading } from "../Heading";
import { Text } from "../Text";
import { ProductCard } from "./ProductCard";
import PinkBag from '../../assets/Product/pink-bag-small.svg'
import Remus from '../../assets/Product/remus.png'
import BlackBag from '../../assets/Product/black-bag.png'
import LeatherCoachBag from '../../assets/Product/leather-coach-bag.png'
import { Cards, CardsDiv, CardsNav } from "./styles";
import { Button } from "../Button";
import { ChevronRightIcon } from "../Icons/Chevron/ChevronRightIcon";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
export interface HorizontalCardsProps {
    products: Product[];
}

export function HorizontalCards() {
    const navigate = useNavigate()

    return (
        <CardsDiv>
            <CardsNav>

            <span className="desktop__heading">
                <Heading color="highEmphasis" size="large" title="regular" >
                New Arrivals
                </Heading>
            </span>
         

            <span className="mobile__heading">
            <Text color="highEmphasis" size="medium" title="regular" >
                  New Arrivals
              </Text>
            </span>
          
            <Button size="small" variant="secondary" onClick={() => navigate('/category')}>
                View All
                <ChevronRightIcon isFilled={true}/>
            </Button>
            </CardsNav>

            <Cards>
             <Swiper
             slidesPerView={4}
             spaceBetween={150}
             modules={[ A11y]}
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             breakpoints={{
                940: {
                    width: 940,
                    spaceBetween: 50,
                    slidesPerView: 3,
                }
             }}
             >

                <SwiperSlide>
                <ProductCard src={PinkBag} productModel='Grande' productValue='39.49' productName='Blossom Pouch' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
                </SwiperSlide>
                <SwiperSlide>
                <ProductCard src={LeatherCoachBag} productModel='Coach' productValue='54.69' productName='Leather Coach Bag' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
                </SwiperSlide>
                <SwiperSlide>
                <ProductCard src={Remus} productModel='Remus' productValue='57.00' productName='Brown Strap Bag' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
                </SwiperSlide>
                <SwiperSlide>
                <ProductCard src={BlackBag} productModel='Boujee' productValue='56.49' productName='Black Bag' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
                </SwiperSlide>
                <SwiperSlide>
                <ProductCard src={PinkBag} productModel='Grande' productValue='39.49' productName='Blossom Pouch' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
                </SwiperSlide>
                <SwiperSlide>
                <ProductCard src={LeatherCoachBag} productModel='Coach' productValue='54.69' productName='Leather Coach Bag' withRating={false} withButton={false} withDiscount={false} withTrending={false}/>
                </SwiperSlide>
             </Swiper>
            </Cards>
        </CardsDiv>
    )
}