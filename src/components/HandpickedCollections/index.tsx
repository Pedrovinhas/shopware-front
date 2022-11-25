import { ProductCollection } from "./ProductCollection";;
import Handbags from '../../assets/Collection/handbags.png';
import PersonalCare from '../../assets/Collection/personal-care.png';
import WristWatches from '../../assets/Collection/wrist-watches.png';
import Sunglasses from '../../assets/Collection/sun-glasses.png';
import { CollectionsContainer, HandPickedContainer } from "./styles";
import { Heading } from "../Heading";

export interface HandpickedCollectionsProps {}

export function HandpickedCollections() {
  return (
    <HandPickedContainer>

    <Heading color="bright" size="large" title="regular" >
        Handpicked Collections 
      </Heading>
    
    <CollectionsContainer>
        <ProductCollection src={PersonalCare} productCollection="Personal Care" />
        <ProductCollection src={Handbags} productCollection="Handbags" />
        <ProductCollection src={WristWatches} productCollection="Wrist Watches" />
        <ProductCollection src={Sunglasses} productCollection="Sun Glasses" />
    </CollectionsContainer>
    
    </HandPickedContainer>
 
  )
}
