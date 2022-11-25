import { Heading } from "../../Heading";
import { Text } from "../../Text";
import { HeroContainer, HeroText } from "./styles";

export function HeroFooter() {
    return (
         <HeroContainer>
            <HeroText>
            <Text color="brown" size='doublexlg' title='normal'>
            LIFESTYLE
            </Text>
            <Heading color='brown' size='extralarge' title='bold' >
            Makeup Accessories from Top Brands
            </Heading>
            </HeroText>
         </HeroContainer>
    )
}