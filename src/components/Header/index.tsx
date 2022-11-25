import { WishlistIcon } from "../Icons/WishlistIcon";
import { HandbagsIconUnfilled } from "../Icons/HandbagsIconUnfilled";
import { StyledHeader, StyledNavDiv, StyledNavIconsDiv, StyledNavLeft, StyledNavRight } from "./styles";
import CoralLogo from '../../assets/logo.svg'
import { SearchBar } from "../SearchBar";
import { ProfileIcon } from "../Icons/ProfileIcon";
import { Text } from "../Text";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../Icons/SearchIcon";
import { NotificationIcon } from "../Icons/HeaderIcons/NotificationIcon";
import { AddHomeIcon } from "../Icons/HeaderIcons/AddHomeIcon";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    const navigate = useNavigate()
    
    return (
        <StyledHeader>
            <StyledNavLeft>
                <img src={CoralLogo} alt="Logo do Site" />
                <StyledNavDiv>
                    <Text color="highEmphasis" title="medium" size="medium" as='a' onClick={() => navigate('/')}>Handbags</Text>
                    <Text color="highEmphasis" title="medium" size="medium">Watches</Text>
                    <Text color="highEmphasis" title="medium" size="medium">Skincare</Text>
                    <Text color="highEmphasis" title="medium" size="medium">Jewellery</Text>
                    <Text color="highEmphasis" title="medium" size="medium">Apparels</Text>
                </StyledNavDiv>
            </StyledNavLeft>
            <StyledNavRight>
                <SearchBar/>
                <StyledNavIconsDiv>
                    <div className='desktop-icons'>
                    <WishlistIcon isFilled={false}/>
                    <HandbagsIconUnfilled isFilled={false}/>
                    <ProfileIcon isFilled/>
                    </div>

                    <div className='mobile-icons'>
                        <SearchIcon/>
                        <NotificationIcon isFilled/>
                        <AddHomeIcon isFilled/>
                    </div>
                </StyledNavIconsDiv>
            </StyledNavRight>
        </StyledHeader>
    )
}