import { TabsDescription } from "../Tabs/TabsDescription";
import { ProductDescriptionSection } from "./styles";

export interface ProductDescriptionProps {}

export function ProductDescription() {
    return (
        <ProductDescriptionSection>
            <TabsDescription/>
        </ProductDescriptionSection>

    )
}