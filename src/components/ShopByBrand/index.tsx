import { Heading } from "../Heading";
import { Brand } from "./Brand";
import { BrandDiv, BrandsContainer } from "./styles";
import ZaraLogo from '../../assets/Brand/zara-logo.svg';
import DolceGabbanaLogo from '../../assets/Brand/dolce-gabbana-logo.svg';
import H2mLogo from '../../assets/Brand/h2m-logo.svg';
import ChanelLogo from '../../assets/Brand/chanel-logo.svg'
import PradaLogo from '../../assets/Brand/prada-logo.svg'
import BibaLogo from '../../assets/Brand/biba-logo.svg'

export interface ShopByBrandProps {}

export function ShopByBrand() {
    // const navigate = useNavigate()
    return (
    <BrandDiv>
        <Heading color="highEmphasis" size="large" title="regular" >
         Shop by Brands
          </Heading>

        <BrandsContainer>
            <Brand src={ZaraLogo} />
            <Brand src={DolceGabbanaLogo} />
            <Brand src={H2mLogo} />
            <Brand src={ChanelLogo} />
            <Brand src={PradaLogo} />
            <Brand src={BibaLogo} />
        </BrandsContainer>
    </BrandDiv>


  )
}
