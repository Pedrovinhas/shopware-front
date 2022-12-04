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
import { CartContent, CartLeftSection, CartRightSection, CartSection, MarginContainer } from "./styles";

export function CartPage() {
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

        <CartSection>
        <Heading color="primary" size="medium" title="bold" >
            My Cart { /* Vou ter que passar isso por props, mas não sei como */}
        </Heading>

        <CartContent>
        <CartLeftSection>
            <TableHeading/>
            <ProductCardCart/>
            <ProductCardCart/>
        </CartLeftSection>

        <CartRightSection>
            <OrderSummary/>
        </CartRightSection>
           
        </CartContent>
    
       
        </CartSection>

        <Accordian 
            size='big' 
            text='Apply Coupon Code' 
            withPadding={false} 
            withSeparator={true}
        >
            <TextField hasActionButton={true} actionLabel='CHECK' size="big" text="Apply Coupon Code"/>
        </Accordian>
         </MarginContainer>
        

         <Footer/>
        
        </>
    )
}