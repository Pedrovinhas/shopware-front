import {Accordian} from "../Accordion";
import { BottomNavigation } from "../BottomNavigation";
import { Separator } from "../Separator";
import {AboutNav} from "./AboutNav";
import {PolicyNav} from "./PolicyNav";
import {ShopByCategoryNav} from "./ShopByCategoryNav";
import {SocialsNav} from "./SocialsNav";
import {FooterContainer, LeftFooter, RightFooter, StyledFooter} from "./styles";

export interface FooterProps {}

export function Footer(props : FooterProps) {
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
                <Accordian text='More about Coral' withSeparator={false} withPadding={true}>
                    <LeftFooter>
                        <ShopByCategoryNav/>
                        <div className="row-reverse">
                            <AboutNav/>
                            <PolicyNav/>
                        </div>
                        <div className="mobile-socials">
                        <Separator color='primaryTint'/>
                        <SocialsNav/>
                        </div>
                        
                    </LeftFooter>
                </Accordian>
               
            </div>

        </StyledFooter>
    )
}
