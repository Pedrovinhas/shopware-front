import { Banners } from "../../components/Banners";
import { BannerContainer } from "../../components/Banners/styles";
import { HandpickedCollections } from "../../components/HandpickedCollections";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { HeroFooter } from "../../components/Hero/HeroFooter";
import { HorizontalCards } from "../../components/HorizontalCards";
import { ShopByBrand } from "../../components/ShopByBrand";
import FacepacksBanner from '../../assets/Banner/facepacks.png'
import SkincareBanner from '../../assets/Banner/skincare.png'
import { Footer } from "../../components/Footer";


export function Home() {
    return (
      <>
       
         <Header/>
        <Hero hasBlackFriday={false}/>
       <HorizontalCards/>
       <HandpickedCollections/>
       <ShopByBrand/>
       <HeroFooter/>
       <BannerContainer>
         <Banners size='giant'>
         <img src={SkincareBanner} alt="" />
         </Banners>
         <Banners size='giant'>
           <img src={FacepacksBanner} alt="" />
         </Banners>
       </BannerContainer>
       <Footer responsive="desktop"/>
      </>
      
       
    )
}