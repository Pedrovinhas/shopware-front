import { useNavigate } from "react-router-dom";
import { Accordian } from "../../components/Accordion";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { OrderSummary } from "../../components/Cart/OrderSummary";
import { ProductCardCart } from "../../components/Cart/ProductCardCart";
import { Footer } from "../../components/Footer";
import { TextField } from "../../components/FormControl";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { TableHeading } from "../../components/TableHeading";
import { Text } from "../../components/Text";
import { useCart } from "../../hooks/useCart";
import ProductAlert from '../../assets/Alerts/alert-product.png'
import { CartContent, CartLeftSection, CartRightSection, CartSection, EmptyCartPage, MarginContainer } from "./styles";

export function CartPage() {
    const { cartItems } = useCart()
    const navigate = useNavigate()
    return (
        <>
         <Header/>
         
         <MarginContainer>
         <Breadcrumbs>
         <Text color="primary" size="medium" title="medium" onClick={() => navigate('/')} >
                    Home
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                    My Cart           
                </Text>

         </Breadcrumbs>
         <Heading color="primary" size="medium" title="bold" >
            My Cart 
        </Heading>
        {
           cartItems.length === 0 ? (
            <EmptyCartPage>
            <img src={ProductAlert} alt="Empty Cart" />
            <Heading title='bold' size='large' color='dark'> Uh Oh....! </Heading>
            <Text size='medium' color='dark' title='regular'> You haven’t added any any items. Start shopping to make your bag bloom </Text> 
            </EmptyCartPage>
                    ) : (
                       
        <CartSection>
        

        <CartContent>
        <CartLeftSection>
            <TableHeading/>
            <ProductCardCart/>
        </CartLeftSection>

        <CartRightSection>
            <OrderSummary
            withCartProduct={false}
            withOrderCart={false}
            withOrderButtonsCart={false}
            withOrderHeaderDetails={false}

            discount={3.50}
            />
        </CartRightSection>
       
           
        </CartContent>
    
       
        <Accordian 
            size='big' 
            text='Apply Coupon Code' 
            withPadding={false} 
            withSeparator={true}
            type='multiple'
        >
            <TextField hasActionButton={true} actionLabel='CHECK' size="big" text="Apply Coupon Code"/>
        </Accordian>
        </CartSection>
        )}
         

         </MarginContainer>
        

         <Footer/>
        
        </>
    )
}