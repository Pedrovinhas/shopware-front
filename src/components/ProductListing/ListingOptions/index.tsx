import { GridIcon } from "../../Icons/FilterIcons/GridIcon"
import { SortIcon } from "../../Icons/FilterIcons/SortIcon"
import { Text } from "../../Text"
import { TextField } from "../../FormControl"
import { ListingContainer, PageLayout, SortByContainer, SortOptions, ToggleGroupItem, ToggleGroupRoot, ToShowContainer } from "./styles"

export function ListingOptions() {
    return (
        <ListingContainer>
            <PageLayout>
                <ToggleGroupRoot 
                    type='single' 
                    className='filter-icons'
                    defaultValue='grid'
                    >
                     <ToggleGroupItem value='grid'>
                        <GridIcon className='grid-icon' isFilled/>
                     </ToggleGroupItem>

                     <ToggleGroupItem value='sort'>
                        <SortIcon className='sort-icon' isFilled/>
                     </ToggleGroupItem>
                </ToggleGroupRoot>
                <Text color='highEmphasis' title="medium" size="large">
                   Showing 1 - 40 of 145 items  
                   {/* Passar por props com a quantidade de itens do Array de Objetos de Produtos */}
                </Text>
            </PageLayout>
            <SortOptions>
                <ToShowContainer>
                    <Text color='highEmphasis' title="medium" size="large">
                        To Show
                    </Text>
                    <TextField text='9' size="small" hasActionButton={false} hasLeadingIcon={false} hasTraillingIcon={false} hasTraillingIconTwo={false}/>
                </ToShowContainer>
                <SortByContainer>
                <Text color='highEmphasis' title="medium" size="large">
                    Sort By
                 </Text>
                </SortByContainer>
            </SortOptions>
        </ListingContainer>
      
    )
}