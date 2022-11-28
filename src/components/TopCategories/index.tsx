import { SkincareIconPrimary } from "../Icons/SkincareIcon/SkincareIconPrimary";
import { CategoriesIcon, CategoriesItem, TopCategoriesContainer, TopCategoriesItems } from "./styles";
import { Text } from "../Text";
import { JewelleryIcon } from "../Icons/JewelleryIcon";
import { HandbagsIconPrimary } from "../Icons/HandbagsIcon/HandbagsIconPrimary";
import { WatchIconPrimary } from "../Icons/WatchIcon/WatchIconPrimary";

export function TopCategories () {
    return (
        <TopCategoriesContainer>
            <Text color="highEmphasis" size="medium" title="regular" >
                Top Categories
              </Text>
            <TopCategoriesItems>
            <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Skincare
              </Text>
            </CategoriesItem>

            <CategoriesItem>
                <CategoriesIcon>
                <JewelleryIcon/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Jewellery
              </Text>
            </CategoriesItem>
            
            <CategoriesItem>
                <CategoriesIcon>
                <HandbagsIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Handbags
              </Text>
            </CategoriesItem>

            <CategoriesItem>
                <CategoriesIcon>
                <WatchIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Watches
              </Text>
            </CategoriesItem>

            <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                 Eyewear
              </Text>
            </CategoriesItem>

            <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Makeups
              </Text>
            </CategoriesItem>

            <CategoriesItem>
                <CategoriesIcon>
                <SkincareIconPrimary/>
                </CategoriesIcon>
                <Text color="highEmphasis" size="small" title="medium" >
                  Facemask
              </Text>
            </CategoriesItem>

            </TopCategoriesItems>


          
        </TopCategoriesContainer>
    )
}