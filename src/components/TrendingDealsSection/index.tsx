import { Banners } from "../Banners";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { HeroContainer } from "./styles";
import SpringBanner from '../../assets/Banner/spring-banner-wide.png'
import FunkBanner from '../../assets/Banner/funk-banner-wide.png'

export function TrendingDealsSection () {
    return (
        <HeroContainer>
        <Text color="highEmphasis" size="medium" title="regular" >
            Trending Deals
          </Text>
        
        <div className="slider__banners">
            <Banners size='wide'> 
                <img src={SpringBanner} alt="" />
            </Banners>
            <Banners size='wide'> 
                <img src={FunkBanner} alt="" />
            </Banners>
        </div>
     
        
     </HeroContainer>
    )
}