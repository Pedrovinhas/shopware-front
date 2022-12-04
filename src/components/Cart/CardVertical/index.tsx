import { Button } from "../../Button";
import { ButtonCartContainer, CardCartProductText, CardContent, CardImage, DivPrice, ProductQuantityContainer, VerticalContainer } from "./styles";
import { Text } from "../../Text";

export interface CardVerticalProps extends 
    CardImageProps,
    PriceProps,
    ButtonCartProps {
        productModel?: string;
        productName?: string;
        productValue?: string;
        productQuantity?: string;
        
    }

export interface PriceProps {
    withPrice?: boolean;
}

export interface ButtonCartProps {
    withButton?: boolean;
}


export interface CardImageProps {
    src: string;
}



export function CardVertical({ productModel, productName, productValue, productQuantity, src, withButton, withPrice }: CardVerticalProps) {
    return (
        <VerticalContainer>
            <CardImage src={src} />
            <CardContent>
                <div className="card__text">
                    <CardCartProductText>
                        <Text size='large' color="highEmphasis" title="medium">
                            {productModel}
                        </Text>
                    </CardCartProductText>
                    
                    <Text size='medium' color="lowEmphasis" title='normal' >
                       {productName}
                    </Text>

                    <DivPrice withPrice={withPrice}>
                    <Text size='large' color="highEmphasis" title="medium">
                        {productValue}
                    </Text>
                    </DivPrice>

                    <ProductQuantityContainer>
                    <Text size='medium' color="lowEmphasis" title='normal' >
                        Qty- {productQuantity}
                    </Text>
                    </ProductQuantityContainer>
                </div>
            
                <ButtonCartContainer withButton={withButton}>
                    <Button size="large" variant="outline" withButton={withButton}>
                        Add to Bag 
                    </Button>
                </ButtonCartContainer>
{/* 
                <StepperContainer>
                    <Stepper/>
                </StepperContainer> */}
            </CardContent>
        </VerticalContainer>
    )
}