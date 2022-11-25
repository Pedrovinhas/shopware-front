import { CopyrightDiv, Social, Socials, SocialsContainer, StateContainer } from "./styles";
import { Text } from "../../Text";
import FacebookLogo from '../../../assets/Socials/facebook-logo.svg'
import InstagramLogo from '../../../assets/Socials/insta-logo.svg'
import TwitterLogo from '../../../assets/Socials/twitter-logo.svg'
import YoutubeLogo from '../../../assets/Socials/youtube-logo.svg'
import { LocationIcon } from "../../Icons/LocationIcon";


export function SocialsNav() {
    return (
        <SocialsContainer>
            <Socials>
                <Social>
                    <a href="https://www.facebook.com/" target='blank'>
                    <img src={FacebookLogo} alt="Logo do Facebook" />
                    </a>
                </Social>
                <Social>
                    <a href="https://www.instagram.com/" target='blank'>
                    <img src={InstagramLogo} alt="Logo do Instagram" />
                    </a>
                </Social>
                <Social>
                    <a href="https://www.twitter.com/" target='blank'>
                    <img src={TwitterLogo} alt="Logo do Twitter" />
                    </a>
                </Social>
                <Social>
                    <a href="https://www.yotube.com/" target='blank'>
                    <img src={YoutubeLogo} alt="Logo do Youtube" />
                    </a>
                </Social>
            </Socials>
            <CopyrightDiv>
                <StateContainer>
                    <LocationIcon isFilled/>
                    <Text color="bright" title="medium" size="medium">
                        United States
                    </Text>
                </StateContainer>
                <Text color="lightText" title="medium" size="medium">
                     © 2021 | Cora Leviene All Rights Reserved
                    </Text>
            </CopyrightDiv>
        </SocialsContainer>
    )
}