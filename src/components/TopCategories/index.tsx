import { SkincareIconPrimary } from "../Icons/SkincareIcon/SkincareIconPrimary";
import { CategoriesIcon, CategoriesItem, TopCategoriesContainer, TopCategoriesItems } from "./styles";
import { Text } from "../Text";
import { JewelleryIcon } from "../Icons/JewelleryIcon";
import { HandbagsIconPrimary } from "../Icons/HandbagsIcon/HandbagsIconPrimary";
import { WatchIconPrimary } from "../Icons/WatchIcon/WatchIconPrimary";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function TopCategories () {
    return (
        <TopCategoriesContainer>
            <Text color="highEmphasis" size="medium" title="regular" >
                Top Categories
              </Text>
            <TopCategoriesItems>
            <Swiper
            spaceBetween={8}
            slidesPerView={4.5}
            >

              <SwiperSlide>
              <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Skincare
              </Text>
            </CategoriesItem>
              </SwiperSlide>
           
            <SwiperSlide>
            <CategoriesItem>
                <CategoriesIcon>
                <JewelleryIcon/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Jewellery
              </Text>
            </CategoriesItem>
            </SwiperSlide>
            
            <SwiperSlide>
            <CategoriesItem>
                <CategoriesIcon>
                <HandbagsIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Handbags
              </Text>
            </CategoriesItem>
            </SwiperSlide>

            <SwiperSlide>
            <CategoriesItem>
                <CategoriesIcon>
                <WatchIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Watches
              </Text>
            </CategoriesItem>
            </SwiperSlide>

       
            <SwiperSlide>
            <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                 Eyewear
              </Text>
            </CategoriesItem>
            </SwiperSlide>

            <SwiperSlide>
            <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Makeups
              </Text>
            </CategoriesItem>
            </SwiperSlide>

            <SwiperSlide>
            <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Facemask
              </Text>
            </CategoriesItem>
            </SwiperSlide>
          </Swiper>
            </TopCategoriesItems>


          
        </TopCategoriesContainer>
    )
}