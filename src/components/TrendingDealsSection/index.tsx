import { Banners } from "../Banners";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { HeroContainer } from "./styles";
import SpringBanner from '../../assets/Banner/spring-banner-wide.png'
import FunkBanner from '../../assets/Banner/funk-banner-wide.png'
import { Swiper, SwiperSlide } from "swiper/react";

export function TrendingDealsSection () {
    return (
        <HeroContainer>
        <Text color="highEmphasis" size="medium" title="regular" >
            Trending Deals
          </Text>
        
        <div className="slider__banners">
            <Swiper
             spaceBetween={8}
             slidesPerView={1.4}
            >
                
            <SwiperSlide>
            <Banners size='wide'> 
                <img src={SpringBanner} alt="" />
            </Banners>
            </SwiperSlide>

            <SwiperSlide>
            <Banners size='wide'> 
                <img src={FunkBanner} alt="" />
            </Banners>
            </SwiperSlide>
            </Swiper>
        </div>
     
        
     </HeroContainer>
    )
}