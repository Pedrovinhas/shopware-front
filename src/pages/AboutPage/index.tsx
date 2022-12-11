import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import AboutBannerBags from "../../assets/About/about-second-banner.png"
import AboutBannerWatch from "../../assets/About/about-third-banner.png"
import AboutBannerSunglasses from "../../assets/About/about-fourth-banner.png"
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { AboutContainer, HeroAbout } from "./styles";
import { MarginContainer } from "../CartPage/styles";

export function AboutPage() {
    return (
        <>
            <Header/>
            <HeroAbout>
                <div className="banner__gradient">
                    <div className='banner__text'>
                        <Heading className='heading__spacing'color="dark" title="bold" size="large">
                            ABOUT
                        </Heading>
                        <Text color="lowEmphasis" size="large" title="normal">
                            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                        </Text>
                    </div>
                </div>
            </HeroAbout>
            <MarginContainer>
           
            <AboutContainer>
                <div className="main__about">
                    <Heading color='highEmphasis' title='bold' size='small' >
                        About
                    </Heading>
                    <Text color="lowEmphasis" size="large" title="normal">
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. 
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. 
                    </Text>
                </div>
                <div className="content__about">
                    <div className="about__right-banner">
                        <div className="content__text">
                            <Heading color='highEmphasis' title='bold' size='small' >
                                About
                            </Heading>
                            <Text color="lowEmphasis" size="large" title="normal">
                            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                            </Text>
                        </div>
                        <img src={AboutBannerBags} alt="Bags Banner" />
                    </div>
                    <div className="about__left-banner">
                        <img src={AboutBannerWatch} alt="Bags Banner" />
                        <div className="content__text">
                        <Heading color='highEmphasis' title='bold' size='small' >
                            About
                         </Heading>
                        <Text color="lowEmphasis" size="large" title="normal">
                        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                        </Text>
                        </div>
                    </div>
                    <div className="about__right-banner">
                        <div className="content__text">
                        <Heading color='highEmphasis' title='bold' size='small' >
                            About
                        </Heading>
                        <Text color="lowEmphasis" size="large" title="normal">
                        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                        </Text>
                        </div>
                        <img src={AboutBannerSunglasses} alt="Bags Banner" />
                    </div>
                </div>
            </AboutContainer>
            </MarginContainer>
            <Footer/>
        
        </>
    )
}