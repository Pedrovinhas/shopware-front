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
import SkincareBannerSmall from '../../assets/Banner/skincare-small.png'
import FacepacksBannerSmall from '../../assets/Banner/facepacks-small.png'
import { Footer } from "../../components/Footer";
import HeaderHero from '../../assets/Hero/header-hero.png'
import { useNavigate } from "react-router-dom";
import { TrendingDealsSection } from "../../components/TrendingDealsSection";
import { Cta } from "../../components/Cta";
import { TopCategories } from "../../components/TopCategories";
import { HeroMobile } from "../../components/Hero/HeroMobile";
import { BottomNavigation } from "../../components/BottomNavigation";
import { BannerText } from "../../components/BannerText";


export function Home() {
  const navigate = useNavigate()
    return (
      <>
       
       <Header/>
       <BannerText/>
       <Hero hasBlackFriday={false} src={HeaderHero}/>
       <HeroMobile/>
       <TopCategories/>
       <HorizontalCards/>
       <HandpickedCollections/>
       <ShopByBrand/>
       
       <Cta/>
       <HeroFooter/>

       <BannerContainer>
          <div className="desktop__banners">
          <Banners size='giant' onClick={() => navigate('*')}>
            <img src={SkincareBanner} alt="Skincare Banner" />
          </Banners>
          <Banners size='small' onClick={() => navigate('*')}>
            <img src={FacepacksBanner} alt="Facepacks Banner" />
          </Banners>
          </div>
        <div className="mobile__banners">
          <Banners size='small' onClick={() => navigate('*')}>
            <img  src={SkincareBannerSmall} alt="Facepacks Banner" />
          </Banners>
          <Banners size='small' onClick={() => navigate('*')}>
            <img src={FacepacksBannerSmall} alt="Facepacks Banner" />
          </Banners>
        </div>
       </BannerContainer>

       <div className="section__mobile">
        <TrendingDealsSection/>
       </div>
       
       <Footer />
       <BottomNavigation/>
      </>
      
       
    )
}