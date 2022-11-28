import { CollectionImageContainer } from "./styles";
import { Text } from "../../Text";

export interface ProductCollectionProps extends CollectionImageProps {
    productCollection: string;
    onClick?: () => void;
}

export interface CollectionImageProps {
    src: string;
}

export function ProductCollection({ src, productCollection, onClick }: ProductCollectionProps) {
    return (
        
            <CollectionImageContainer src={src} onClick={onClick}>
                <span className='desktop__product'>
                <Text size="extralarge" color="highEmphasis" title="regular"> 
                    {productCollection}
                </Text>
                </span>

                <span className="mobile__product">
                <Text size="medium" color="highEmphasis" title="regular"> 
                    {productCollection}
                </Text>
                </span>
                
            </CollectionImageContainer>
       
    )
}