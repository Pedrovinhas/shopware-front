import { ProductCollection } from "./ProductCollection";;
import Handbags from '../../assets/Collection/handbags.png';
import PersonalCare from '../../assets/Collection/personal-care.png';
import WristWatches from '../../assets/Collection/wrist-watches.png';
import Sunglasses from '../../assets/Collection/sun-glasses.png';
import { CollectionsContainer, HandPickedContainer } from "./styles";
import { Heading } from "../Heading";
import { useNavigate } from "react-router-dom";

export interface HandpickedCollectionsProps {}

export function HandpickedCollections() {
  const navigate = useNavigate()
  return (
    <HandPickedContainer>

    <Heading color="bright" size="large" title="regular" >
        Handpicked Collections 
      </Heading>
    
    <CollectionsContainer>
        <ProductCollection src={PersonalCare} productCollection="Personal Care" onClick={() => navigate('*')} />
        <ProductCollection src={Handbags} productCollection="Handbags" onClick={() => navigate('/category')}  />
        <ProductCollection src={WristWatches} productCollection="Wrist Watches" onClick={() => navigate('*')}  />
        <ProductCollection src={Sunglasses} productCollection="Sun Glasses" onClick={() => navigate('*')}  />
    </CollectionsContainer>
    
    </HandPickedContainer>
 
  )
}
