import { Breadcrumbs } from "../../components/Breadcrumbs";
import { OrderSummary } from "../../components/Cart/OrderSummary";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { CartSection, MarginContainer } from "../CartPage/styles";
import { Text } from "../../components/Text";
import { ChevronRightSmallIcon } from "../../components/Icons/Chevron/ChevronRightSmallIcon";
import { CheckoutContent, CheckOutLeftSection, CheckOutRightSection } from "./styles";
import { useNavigate } from "react-router-dom";
import { Accordian } from "../../components/Accordion";
import { FormAdress } from "../../components/FormAdress";
import { PaymentSection } from "../../components/PaymentSection";


export function CheckoutPage() {
    const navigate = useNavigate()
    return (
        <>
        <Header/>
        <MarginContainer>
         <Breadcrumbs>
         <Text color="primary" size="medium" title="medium" 
         onClick={() => navigate('/')}
          >
                    Home
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                    Checkout        
                </Text>
         </Breadcrumbs>

         <CartSection>
        <Heading color="primary" size="medium" title="bold" >
           Checkout { /* Vou ter que passar isso por props, mas não sei como */}
        </Heading>

        <CheckoutContent>

        <CheckOutLeftSection>
        <Accordian 
            size='big' 
            textSize="big"
            text='Add New Adress' 
            withPadding={false} 
            withSeparator={true}
            type='single'
            defaultValue="1"
        >
            <FormAdress />
        </Accordian>

        <Accordian 
            size='big' 
            textSize="big"
            text='Select Payment Method' 
            withPadding={false} 
            withSeparator={true}
            type='single'
            defaultValue="2"
            
          
        >
            
            
            <Accordian 
            size='big' 
            textSize="big"
            text='Contact Information' 
            withPadding={false} 
            withSeparator={true}
            type='multiple'
            >
            
            </Accordian>

        <Accordian 
            size='big' 
            textSize="big"
            text='Payments' 
            withPadding={false} 
            withSeparator={true}
            type='multiple'
            
        >
            <PaymentSection/>
        </Accordian>
            
        </Accordian>

      
    
        </CheckOutLeftSection>
     

        <CheckOutRightSection>
            <OrderSummary
            withOrderCart={false}
            withOrderButtonsCart={false}
            withCartProduct={true}
            withOrderHeaderDetails={true}
            />
        </CheckOutRightSection>
           
        </CheckoutContent>
        </CartSection>
        </MarginContainer>


        <Footer/>
        
        </>
    )
}