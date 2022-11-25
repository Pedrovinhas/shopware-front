import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 5rem;

`

export const StyledNavLeft = styled.nav`
     display: flex;
     gap: 32px; 

     margin-left: 20px;

`

export const StyledNavRight = styled.nav`
     display: flex;
     align-items: center;
     gap: 24px; 

     margin-right: 1.25rem;

`

export const StyledNavDiv = styled.div`
    display: flex;
    gap: 1.25rem;

    
`
export const StyledNavIconsDiv = styled.div`
  
    .mobile-icons {
        display: none;
    }

    .desktop-icons {
        display: flex;
        gap: 1.25rem;
    }

    @media (max-width:1120px) {
        .desktop-icons {
            display: none;
        }

        .mobile-icons {
            display: flex;
             gap: 1.25rem;
        }
    }
    

    
`