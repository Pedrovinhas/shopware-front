import { ListingOptions } from "./ListingOptions";
import { ProductColumns } from "./ProductColumns";
import { ProductListingContainer } from "./styles";

export interface ProductListingProps {}

export function ProductListing() {
    return (
        <ProductListingContainer>
            {/* <ListingOptions/> */}
            <ProductColumns/>
            
        </ProductListingContainer>
      
    )
}