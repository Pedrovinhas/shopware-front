import {Accordian} from "../Accordion";
import {AboutNav} from "./AboutNav";
import {PolicyNav} from "./PolicyNav";
import {ShopByCategoryNav} from "./ShopByCategoryNav";
import {SocialsNav} from "./SocialsNav";
import {FooterContainer, LeftFooter, RightFooter, StyledFooter} from "./styles";

export interface FooterProps {
    responsive?: 'mobile' | 'desktop';
}

export function Footer({responsive} : FooterProps) {
    return (
        <StyledFooter>
            <div className='footer__desktop'>
                <FooterContainer>
                    <LeftFooter>
                        <ShopByCategoryNav/>
                        <AboutNav/>
                        <PolicyNav/>
                    </LeftFooter>
                    <RightFooter>
                        <SocialsNav/>
                    </RightFooter>
                </FooterContainer>
            </div>


            <div className='footer_mobile'>
                <Accordian text='More about Coral'>
                    <LeftFooter>
                        <ShopByCategoryNav/>
                        <AboutNav/>
                        <PolicyNav/>
                    </LeftFooter>
                </Accordian>
            </div>

        </StyledFooter>
    )
}
