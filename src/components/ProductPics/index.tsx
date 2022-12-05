import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon } from "../Icons/Chevron/ChevronLeftIcon";
import { ChevronRightIcon } from "../Icons/Chevron/ChevronRightIcon";
import { PhotosContainer, PictureContainer, ProductImage, ProductImageMobile, ProductPhoto, ProductPhotos, ProductSliderMobile } from "./styles";
import { Navigation } from "swiper";
import { useSwiper } from 'swiper/react';
export interface ProductPicsProps {
    productBigImage: string | undefined;
    productSmallImage?: string;
}

export function ProductPics({ productBigImage, productSmallImage }: ProductPicsProps) {
    const swiper = useSwiper()
    
    
    return (
        <>
        <PictureContainer>
            <ProductImage src={productBigImage}/>

            <ProductPhotos>
             
                <ChevronLeftIcon isFilled className='review-swiper-button-prev'/>
                <PhotosContainer>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={16}
                    navigation={{
                        nextEl: '.review-swiper-button-next',
                        prevEl: '.review-swiper-button-prev'
                    }}
                >

                    <SwiperSlide>
                    <ProductPhoto src={productSmallImage}/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductPhoto src={productSmallImage}/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductPhoto src={productSmallImage}/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductPhoto src={productSmallImage}/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductPhoto src={productSmallImage}/>
                    </SwiperSlide>
                </Swiper>
                </PhotosContainer>
                <ChevronRightIcon isFilled className='review-swiper-button-next'/>
              
            </ProductPhotos>

           
        </PictureContainer>

        <ProductSliderMobile>
            <ProductImageMobile src={productBigImage}/>           
        </ProductSliderMobile>
        </>
    )
}