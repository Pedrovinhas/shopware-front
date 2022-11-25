import { SearchIcon } from "../Icons/SearchIcon";
import { Input, TextInputContainer } from "./styles";

export interface SearchBarProps {}

export function SearchBar() {
    return (
        <TextInputContainer>
            <SearchIcon/>
            <Input placeholder="Search for products or brands..."/>
        </TextInputContainer>
    )
}