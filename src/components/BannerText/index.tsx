import { StyledBannerDiv } from "./styles";
import { Text } from "../Text";

export interface BannerTextProps {}

export function BannerText(props: BannerTextProps) {
    return (
        <StyledBannerDiv>
            <Text color='highEmphasis' size='medium' title="medium" >
            We are currently experiencing local customs clearance delays. 
            For the latest updates, please check your order status 
            here
            </Text>
        </StyledBannerDiv>
    )
}