import styled from "styled-components";

export const TopCategoriesContainer = styled.div`
    display: none;


    @media (max-width: 1140px) {
    
        margin-top: 24px;

        display: flex;
        flex-direction: column;
        gap: .5rem;
        
        width: 22.75rem;
        height: 6.625rem;

        margin-left: 1rem;
    }

    
`

export const TopCategoriesItems = styled.div`
    display: flex;
    gap: 1rem;

`


export const CategoriesItem = styled.div`
    width: 60px;
    height: 82px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

`

export const CategoriesIcon = styled.div`
    width: 60px;
    height: 60px;

    border-radius: 4px;

    background-color: ${props => props.theme.colors.accent};

    display: flex;
    align-items: center;
    justify-content: center;

`