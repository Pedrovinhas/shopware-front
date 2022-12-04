import { Banners } from "../../Banners";
import { HeroContainer } from "./styles";
import SpringBanner from '../../../assets/Banner/spring-banner-wide.png'
import FunkBanner from '../../../assets/Banner/funk-banner-wide.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import 'swiper/css';


export function HeroMobile () {
    return (
        <HeroContainer>
        <div className="slider__banners">
        <Swiper
         modules={[ Autoplay]}
         spaceBetween={8}
         slidesPerView={1.4}
         autoplay={{
            delay: 5000,
            disableOnInteraction: false,
         }}
         
        >
            <SwiperSlide>
            <Banners size='wide'> 
                <img src={FunkBanner} alt="" />
            </Banners>
            </SwiperSlide>
           
           <SwiperSlide>
           <Banners size='wide'> 
                <img src={SpringBanner} alt="" />
            </Banners>
           </SwiperSlide>
           
        </Swiper>
        </div>
     
        
     </HeroContainer>
    )
}