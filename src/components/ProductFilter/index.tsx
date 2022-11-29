import { FilterIcon } from "../Icons/FilterIcons/FilterIcon"
import { SortMobileIcon } from "../Icons/FilterIcons/SortMobileIcon"
import { Text } from "../Text"
import { Container } from "./styles"

export function ProductFilter() {
    return (
        <Container>
            <div className="filter__item">
            <Text cursor="pointer" color="highEmphasis" title='medium' size="medium">
                SORT
            </Text>
            <SortMobileIcon isFilled/>
            </div>

            <div className="filter__item">
            <Text cursor="pointer" color="highEmphasis" title='medium' size="medium">
                FILTER
            </Text>
            <FilterIcon isFilled/>
            </div>
        </Container>
    )
}