import { ChevronLeftIcon } from "../Icons/Chevron/ChevronLeftIcon";
import { ChevronRightIcon } from "../Icons/Chevron/ChevronRightIcon";
import { PhotosContainer, PictureContainer, ProductImage, ProductPhoto, ProductPhotos } from "./styles";

export interface ProductPicsProps {
    productBigImage: string;
    productSmallImage: string;
}

export function ProductPics({ productBigImage, productSmallImage }: ProductPicsProps) {
    return (
        <PictureContainer>
            <ProductImage src={productBigImage}/>
                
          
            <ProductPhotos>
                <ChevronLeftIcon isFilled/>
                <PhotosContainer>
                <ProductPhoto src={productSmallImage}/>
                <ProductPhoto src={productSmallImage}/>
                <ProductPhoto src={productSmallImage}/>
                <ProductPhoto src={productSmallImage}/>
                </PhotosContainer>
                <ChevronRightIcon isFilled/>
            </ProductPhotos>
        </PictureContainer>
    )
}