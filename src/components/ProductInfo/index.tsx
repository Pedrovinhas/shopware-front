import { Button } from "../Button";
import { TextField } from "../FormControl";
import { Heading } from "../Heading";
import { StarIcon } from "../Icons/StarIcon";
import { CupomCode, CupomContainer, DeliveryButtons, DeliveryDetails, DeliveryInfoSection, Details, DivPrice, DivRating, DivRatingMobile, ProductColumn, ProductInfoSection, QuantityContainer, Rating, Terms } from "./styles";
import { Text } from "../Text";
import { Separator } from "../Separator";
import { WishlistIcon } from "../Icons/WishlistIcon";
import { HandbagsWhiteIcon } from "../Icons/HandsbagWhiteIcon";
import { Accordian } from "../Accordion";
import { ProductCard } from "../HorizontalCards/ProductCard";
import PinkBag from '../../assets/Product/pink-bag-small.svg'
import { useNavigate } from "react-router-dom";

export interface ProductInfoProps {
        productModel: string;
        productName: string;
        productValue: string;
}

export function ProductInfo({  productModel, productName, productValue }: ProductInfoProps) {
    const navigate = useNavigate()
    return (
        <ProductColumn>
        <ProductInfoSection>
            <div className="mobile__products">
                <Heading className='heading' color="dark" size="medium" title="regular">
                    Coach
                </Heading>
                <Heading as='h2' color="lowEmphasis" size="small" title="regular">
                    Leather Coach Bag with adjustable starps.
                </Heading>
            </div>
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

            
            <DivRatingMobile>
                                <div className="rating__pill">
                                    <Text color='highEmphasis' title='medium' size="large">
                                        4.5
                                    </Text>
                                    <StarIcon isFilled hasStroke/>
                                </div>
                                <div className="rating__content">
                                    <Text color='highEmphasis' title='regular' size="medium">
                                        Average Rating
                                    </Text>
                                    <Text color='lowEmphasis' title='medium' size="small">
                                    43 Ratings & 23 Reviews
                                    </Text>
                     </div>
                </DivRatingMobile>
        
        </ProductInfoSection>

        <div className="mobile__separator">
            <Separator/>
        </div>
        
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

      

            <div className="delivery-buttons__mobile">
            <Button size="small" variant="secondary" >
                    <WishlistIcon  isFilled={false}/>
                </Button>
            <Button size="large" variant="primary" >
                    <HandbagsWhiteIcon isFilled/>
                    Add to Bag
                </Button>
        
            </div>

         

        </DeliveryInfoSection>

        <div className="mobile__accordions">
            <Accordian text='Product Description'>
                <Text color="lowEmphasis" size="medium" title='medium'>
                Experience comfortable and easy travelling like never before with this coach bag.
                 It features a zip closure, removable straps and multiple organization compartments 
                 to keep your valuables safe. Crafted from premium material, it is durable and lasts long.
                </Text>
            </Accordian>
            <Accordian text='Ratings & Reviews'>
                <Text color="lowEmphasis" size="medium" title='medium'>
                Experience comfortable and easy travelling like never before with this coach bag.
                 It features a zip closure, removable straps and multiple organization compartments 
                 to keep your valuables safe. Crafted from premium material, it is durable and lasts long.
                </Text>
            </Accordian>
            </div>
         
         <div className="mobile__invites">
            <div className="invites__text">
            <Text color="highEmphasis" size="medium" title='medium'>
            Invite Friends & Earn
            </Text>
            <Text color="lowEmphasis" size="medium" title='medium'>
            Get upto 100 reward points for every friend you invite
            </Text>
            <Button>

            </Button>
            </div>
            <div className="inivtes__block">

            </div>
         </div>

         <div className="mobile__suggestions">
            
            <Text color="highEmphasis" size="medium" title='medium'>
            You Might Also Like
            </Text>
            <ProductCard onClick={() => navigate('/product')} src={PinkBag} withRating={false} withButton={false} withDiscount={false} withTrending={true}/>
         </div>

       
        </ProductColumn>
    )
}
