import { WishlistIcon } from "../Icons/WishlistIcon";
import { HandbagsIconUnfilled } from "../Icons/HandbagsIconUnfilled";
import { StyledHeader, StyledNavDiv, StyledNavIconsDiv, StyledNavLeft, StyledNavMobile, StyledNavRight } from "./styles";
import CoralLogo from '../../assets/logo.svg'
import { SearchBar } from "../SearchBar";
import { ProfileIcon } from "../Icons/ProfileIcon";
import { Text } from "../Text";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SearchIcon } from "../Icons/SearchIcon";
import { NotificationIcon } from "../Icons/HeaderIcons/NotificationIcon";
import { AddHomeIcon } from "../Icons/HeaderIcons/AddHomeIcon";
import { MenuMobileIcon } from "../Icons/MenuMobileIcon";
import { Heading } from "../Heading";
import { ModalCart } from "../Cart/CartModal";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../../types/Product";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    const navigate = useNavigate()
    const { categoryId } = useParams();
    const [categories, setCategories] = useState<Product[]>([])
    
    useEffect(() => {
        api.get(`/categories`)
          .then(({ data }) => {
            setCategories(data)
          })
      }, [])

      const refreshPage = () => {
        navigate(0);
    }
    
    return (
        <StyledHeader>
            <StyledNavLeft>
                <img src={CoralLogo} alt="Logo do Site" />
                <StyledNavDiv>
                    {
                    categories.map((category) => (
                        <Text 
                        key={category._id}
                        cursor="pointer" 
                        color="highEmphasis" 
                        title="medium" 
                        size="medium" 
                        onClick={() => navigate(`/categories/${category._id}/products`)}
                        >
                            {category.name}
                        </Text>
                    )) 
                    }

                    {/* <Text  cursor="pointer" color="highEmphasis" title="medium" size="medium" onClick={() => navigate('*')}>Apparels</Text> */}
                </StyledNavDiv>
            </StyledNavLeft>

            <StyledNavMobile>
                <MenuMobileIcon isFilled={false}/>
                <Heading size='small' color='primary' title='regular'>
                    Home
                </Heading>
            </StyledNavMobile>

            <StyledNavRight>
                <SearchBar/>
                <StyledNavIconsDiv>
                    <div className='desktop-icons'>
                    <WishlistIcon isFilled={false} cursor='pointer' onClick={() => navigate('/user-profile/wishlist')}/>
                    <ProfileIcon isFilled cursor='pointer' onClick={() => navigate('/user-profile')}/>
                    <ModalCart />
                    </div>

                    <div className='mobile-icons'>
                         <AddHomeIcon isFilled/>
                        <SearchIcon/>
                        <NotificationIcon isFilled/>
                    </div>
                </StyledNavIconsDiv>
            </StyledNavRight>
        </StyledHeader>
    )
}