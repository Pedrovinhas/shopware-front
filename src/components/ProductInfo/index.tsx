import { Button } from "../Button";
import { TextField } from "../FormControl";
import { Heading } from "../Heading";
import { StarIcon } from "../Icons/StarIcon";
import { CupomCode, CupomContainer, DeliveryButtons, DeliveryDetails, DeliveryInfoSection, Details, DivPrice, DivRating, ProductInfoSection, QuantityContainer, Rating, Terms } from "./styles";
import { Text } from "../Text";
import { ColumnContainer } from "../../pages/CategoryPage/styles";
import { Separator } from "../Separator";
import { WishlistIcon } from "../Icons/WishlistIcon";
import { HandbagsWhiteIcon } from "../Icons/HandsbagWhiteIcon";

export interface ProductInfoProps {
        productModel: string;
        productName: string;
        productValue: string;
}

export function ProductInfo({  productModel, productName, productValue }: ProductInfoProps) {
    return (
        <ColumnContainer>
        <ProductInfoSection>
            <Heading color="dark" size="medium" title="regular">
                Coach
            </Heading>
            <Heading color="lowEmphasis" size="small" title="regular">
                Leather Coach Bag with adjustable starps.
            </Heading>
            <DivRating>
                <Rating>
                <StarIcon isFilled hasStroke/>
                <StarIcon isFilled hasStroke/>
                <StarIcon isFilled hasStroke/>
                <StarIcon isFilled hasStroke/>
                <StarIcon isFilled={false} hasStroke={false}/>
                </Rating>
                <Text color="lightText" size="large" title="normal" > 
                    { '(250) Ratings' }
                </Text>
            </DivRating>
            <DivPrice > 
                <Heading size='large' color="highEmphasis" title="bold">
                    {productValue}
                </Heading>
                    <Heading color='lightText' title='regular' size='medium' decoration="line-through">
                        $78.66
                    </Heading>
                    <Heading size='small' color='vibrant' title="regular"  >
                        $50% OFF
                    </Heading>
    
                </DivPrice>
        
        </ProductInfoSection>
        <Separator/>

        <DeliveryInfoSection>

            <Details>
                <DeliveryDetails>
                    <Heading size="small" color="dark" title="bold">
                     Delivery Details
                    </Heading>
                    <Text color="lowEmphasis" size="medium" title='medium'>
                    Check estimated delivery date/pickup option.
                    </Text>
                </DeliveryDetails>
                <TextField hasActionButton={true} actionLabel='CHECK' size="big" text="Apply Valid Pincode"/>
            </Details>

            <QuantityContainer>
                <Heading size="small" color="dark" title="bold">
                Quantity:
                </Heading>
                {/* <Stepper/> */}
            </QuantityContainer>
            <CupomContainer>
                <Terms>
                    <Text size="large" color="highEmphasis" title="medium">
                    Get upto 30% Off on order value above $100
                    </Text>
                    <Text size='medium' color='primary' title="medium">
                    Terms & Conditions
                    </Text>
                </Terms>
                <CupomCode>
                    <Text size='medium' color='lowEmphasis' title="medium">
                    Use Code
                    </Text>
                    <Text size="large" color="highEmphasis" title="regular">
                    ORDER100
                    </Text>
                </CupomCode>
            </CupomContainer>
            <DeliveryButtons>
                <Button size="large" variant="primary" >
                    <HandbagsWhiteIcon isFilled/>
                    Add to Bag
                </Button>
                <Button size="medium" variant="outline" >
                    <WishlistIcon isFilled={false}/>
                Add to Wishlist
                </Button>
            </DeliveryButtons>
        </DeliveryInfoSection>
        </ColumnContainer>
    )
}
