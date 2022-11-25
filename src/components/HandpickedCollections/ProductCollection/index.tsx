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
                <span>
                <Text size="extralarge" color="highEmphasis" title="regular"> 
                    {productCollection}
                </Text>
                </span>
                
            </CollectionImageContainer>
       
    )
}