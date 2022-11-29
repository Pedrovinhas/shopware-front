import styled from "styled-components";

export const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.5rem;

    width: 37.8125rem;
    height: 44rem;

    @media (max-width: 1140px) {
        display: none;
    }
`

export const ProductImage = styled.img`

    width: 37.8125rem;
    height: 37.8125rem;

`

export const ProductPhotos = styled.div`

    width: 29.5625rem;
    height: 4.6875rem;

    display: flex;
    align-items: center;
    gap: 1rem;

`

export const PhotosContainer = styled.div`

    width: 24.5625rem;
    height: 100%;

    display: flex;
    gap: 1.875rem

`

export const ProductPhoto = styled.img`

    width: 4.6875rem;
    height: 4.6875rem;

`

export const ProductSliderMobile = styled.div`
    display: none;
    @media (max-width: 1140px) {
        display: flex;
        width: 100%;
        height: 21.25rem;
        
    }
  
`

export const ProductImageMobile = styled.img`
    width: 20.5rem;
    height: 21.25rem;

    border-radius: 4px;
    margin-left: 1rem;
`