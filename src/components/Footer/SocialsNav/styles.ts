import styled from "styled-components";

export const SocialsContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.625rem;

    @media (max-width:1120px) {
        margin-left: 1rem;
        margin-top: 1.5rem;

        padding-bottom: 1.5rem;
    }

`
export const Socials = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    @media (max-width:1120px) {
        justify-content: flex-start;
    }


`

export const Social = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.375rem;
    height: 2.375rem;

    border-radius: ${props => props.theme.radii.rounded};
    background-color: ${props => props.theme.colors.primaryTint};

`

export const CopyrightDiv = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width:1120px) {
        align-items: flex-start;
    }

`
export const StateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`