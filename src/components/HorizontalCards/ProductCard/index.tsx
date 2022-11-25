import { Button } from "../../Button";
import { HandbagsIconUnfilled } from "../../Icons/HandbagsIconUnfilled";
import { WishlistIcon } from "../../Icons/WishlistIcon";
import { Text } from "../../Text";
import { ButtonContainer, CardContainer, CardImageContainer, CardText, DivDiscount, DivPrice, ProductModelContainer, RatingDiv, Trending } from "./styles";
import { StarIcon } from "../../Icons/StarIcon";

export interface ProductCardProps extends 
    RatingProps, 
    DiscountProps, 
    CardImageProps,
    TrendingProps,
    ButtonCardProps {
        productModel: string;
        productName: string;
        productValue: string;
        onClick?: () => void;
    }


export interface RatingProps {
    withRating?: boolean;
}

export interface DiscountProps {
    withDiscount?: boolean;
}

export interface ButtonCardProps {
    withButton?: boolean;
}

export interface TrendingProps {
    withTrending?: boolean;
}

export interface CardImageProps {
    src: string;
}

export function ProductCard({ onClick, withRating, withDiscount, withButton, src, productModel, productName, productValue, withTrending }: ProductCardProps) {
    return (
        <CardContainer >
            <CardImageContainer src={src} onClick={onClick}>
                <Trending withTrending={withTrending}> 
                    Trending 
                </Trending>
            </CardImageContainer>
            <CardText>
                <ProductModelContainer>
                    <Text size='large' color="highEmphasis" title="medium">
                        {productModel}
                    </Text>
                    <WishlistIcon isFilled={false} hasStroke/>
                </ProductModelContainer>
                <Text size='medium' color="lowEmphasis" title='normal' >
                   {productName}
                </Text>
                <RatingDiv withRating={withRating}>      
                <div>
                    <StarIcon isFilled hasStroke />
                    <StarIcon isFilled hasStroke />
                    <StarIcon isFilled hasStroke/>
                    <StarIcon isFilled hasStroke/>
                    <StarIcon isFilled={false} hasStroke={false} />
                </div>
                <span> 
                    <Text color="primary" title="medium" size="medium">
                    43 Ratings
                    </Text>
                  
                </span>
                </RatingDiv>
                <DivPrice > 
                <Text size='large' color="highEmphasis" title="medium">
                    {productValue}
                </Text>
                <DivDiscount withDiscount={withDiscount}>
                 
                    <Text color='lowEmphasis' title='normal' size='medium' decoration="line-through">
                        $78.66
                    </Text>
                    <Text size='large' color='discount' title="normal"  >
                        $50% OFF
                    </Text>
             
                </DivDiscount>
                </DivPrice>
              
                <ButtonContainer withButton={withButton}>
                    <Button size="large" variant="outline" withButton={withButton}>
                      
                        <HandbagsIconUnfilled isFilled/>
                        Add to Bag 
                    </Button>
                </ButtonContainer>
            </CardText>
        </CardContainer>
    )
}