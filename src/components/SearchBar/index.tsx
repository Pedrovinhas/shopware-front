import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../Icons/SearchIcon";
import { Input, TextInputContainer } from "./styles";

export interface SearchBarProps {}

export function SearchBar() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    

    return (
        <TextInputContainer onSubmit={() => navigate(`/products/${search}`)}>
            <SearchIcon/>
            <Input placeholder="Search for products or brands..." onChange={(e) => setSearch(e.target.value)}/>
        </TextInputContainer>
    )
}