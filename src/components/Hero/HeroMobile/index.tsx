import { Banners } from "../../Banners";
import { HeroContainer } from "./styles";
import SpringBanner from '../../../assets/Banner/spring-banner-wide.png'
import FunkBanner from '../../../assets/Banner/funk-banner-wide.png'

export function HeroMobile () {
    return (
        <HeroContainer>
        <div className="slider__banners">
            <Banners size='wide'> 
                <img src={FunkBanner} alt="" />
            </Banners>
            <Banners size='wide'> 
                <img src={SpringBanner} alt="" />
            </Banners>
        </div>
     
        
     </HeroContainer>
    )
}