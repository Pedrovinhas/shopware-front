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
                    <Text cursor="pointer" color="highEmphasis" title="medium" size="medium" as='a' onClick={() => navigate('/')}>Handbags</Text>
                    <Text  cursor="pointer" color="highEmphasis" title="medium" size="medium" onClick={() => navigate('*')} >Watches</Text>
                    <Text  cursor="pointer" color="highEmphasis" title="medium" size="medium" onClick={() => navigate('*')}>Skincare</Text>
                    <Text  cursor="pointer" color="highEmphasis" title="medium" size="medium" onClick={() => navigate('*')}>Jewellery</Text>
                    <Text  cursor="pointer" color="highEmphasis" title="medium" size="medium" onClick={() => navigate('*')}>Apparels</Text>
                </StyledNavDiv>
            </StyledNavLeft>
            <StyledNavRight>
                <SearchBar/>
                <StyledNavIconsDiv>
                    <div className='desktop-icons'>
                    <WishlistIcon isFilled={false}/>
                    <ProfileIcon isFilled/>
                    <HandbagsIconUnfilled isFilled={false}/>
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