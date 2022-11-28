import { Heading } from "../../Heading";
import { Text } from "../../Text";
import { HeroContainerMobile, HeroContainerDesktop, HeroText } from "./styles";
import HeroMobileImg from '../../../assets/Hero/makeup-hero-mobile.png'

export function HeroFooter() {
    return (
        <>
         <HeroContainerDesktop>
            <HeroText>
            <Text color="brown" size='doublexlg' title='normal'>
            LIFESTYLE
            </Text>
            <Heading color='brown' size='extralarge' title='bold' >
            Makeup Accessories from Top Brands
            </Heading>
            </HeroText>
         </HeroContainerDesktop>
         
         <HeroContainerMobile>
           <img src={HeroMobileImg} alt="Imagem Hero do Footer" />
        </HeroContainerMobile>
         </>
    )
}