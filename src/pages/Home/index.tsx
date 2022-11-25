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
import HeaderHero from '../../assets/Hero/header-hero.png'
import { useNavigate } from "react-router-dom";


export function Home() {
  const navigate = useNavigate()
    return (
      <>
       
         <Header/>
        <Hero hasBlackFriday={false} src={HeaderHero}/>
       <HorizontalCards/>
       <HandpickedCollections/>
       <ShopByBrand/>
       <HeroFooter/>
       <BannerContainer>
         <Banners size='giant' onClick={() => navigate('*')}>
         <img src={SkincareBanner} alt="Skincare Banner" />
         </Banners>
         <Banners size='giant' onClick={() => navigate('*')}>
           <img src={FacepacksBanner} alt="Facepacks Banner" />
         </Banners>
       </BannerContainer>
       <Footer responsive="desktop"/>
      </>
      
       
    )
}