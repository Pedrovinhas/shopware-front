import { ProductCollection } from "./ProductCollection";
import { Text } from "../Text";
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

    <span className="desktop__heading">
    <Heading color="bright" size="large" title="regular" >
        Handpicked Collections 
      </Heading>

    </span>
  
    <span className="mobile__heading">
    <Text color="bright" size="medium" title="medium" >
        Handpicked Collections 
      </Text>
    </span>
     
    
    <CollectionsContainer>
        <ProductCollection src={PersonalCare} productCollection="Personal Care" onClick={() => navigate('*')} />
        <ProductCollection src={Handbags} productCollection="Handbags" onClick={() => navigate('/category')}  />
        <ProductCollection src={WristWatches} productCollection="Wrist Watches" onClick={() => navigate('*')}  />
        <ProductCollection src={Sunglasses} productCollection="Sun Glasses" onClick={() => navigate('*')}  />
    </CollectionsContainer>
    
    </HandPickedContainer>
 
  )
}
