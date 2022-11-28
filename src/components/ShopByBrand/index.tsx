import { Heading } from "../Heading";
import { Brand } from "./Brand";
import { BrandDiv, BrandsContainer } from "./styles";
import { Text } from "../Text";
import ZaraLogo from '../../assets/Brand/zara-logo.svg';
import DolceGabbanaLogo from '../../assets/Brand/dolce-gabbana-logo.svg';
import H2mLogo from '../../assets/Brand/h2m-logo.svg';
import ChanelLogo from '../../assets/Brand/chanel-logo.svg'
import PradaLogo from '../../assets/Brand/prada-logo.svg'
import BibaLogo from '../../assets/Brand/biba-logo.svg'

import ZaraLogoMobile from '../../assets/Brand/Mobile/zara-mobile.svg';
import DolceGabbanaMobile from '../../assets/Brand/Mobile/dg-mobile.svg';
import H2mMobile from '../../assets/Brand/Mobile/hm-mobile.svg';
import BibaMobile from '../../assets/Brand/Mobile/biba-mobile.svg';
import ChanelMobile from '../../assets/Brand/Mobile/chanel-mobile.svg';
import PradaMobile from '../../assets/Brand/Mobile/prada-mobile.svg';

export interface ShopByBrandProps {}

export function ShopByBrand() {
    // const navigate = useNavigate()
    return (
    <BrandDiv>
        <Heading className='desktop__txt' color="highEmphasis" size="large" title="regular" >
         Shop by Brands
          </Heading>

          <Text className="mobile__txt" color="highEmphasis" size='medium' title='regular' >
            Shop by Brands
          </Text>

        <BrandsContainer>
        <div className="desktop__brands">
            <Brand src={ZaraLogo} />
            <Brand src={DolceGabbanaLogo} />
            <Brand src={H2mLogo} />
            <Brand src={ChanelLogo} />
            <Brand src={PradaLogo} />
            <Brand src={BibaLogo} />
          </div>
            <div className="mobile__brands">
              <Brand src={ZaraLogoMobile} />
              <Brand src={DolceGabbanaMobile} />
              <Brand src={H2mMobile} />
              <Brand src={BibaMobile} />
              <Brand src={ChanelMobile} />
              <Brand src={PradaMobile} />
            </div>
        </BrandsContainer>
    </BrandDiv>


  )
}
