import styled from "styled-components";
import AboutBannerMain from "../../assets/About/about-banner.png"

export const HeroAbout = styled.div`
    background-image: url(${AboutBannerMain});

    width: 100%;
    height: 400px;

    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    gap: 12px;

    align-items: center;
    justify-content: center;

    .banner__gradient {
        width: 827px;
        height: 401px;

        align-self: flex-end;

        display: flex;
        align-items: center;
        justify-content: center;

        background: linear-gradient(269.9deg, rgba(255, 255, 255, 0.8) 0.08%, rgba(217, 217, 217, 0) 99.9%);

        .banner__text {
            display: flex;
            flex-direction: column;
            gap: 12px;
    
            width: 453px;
            height: 113px;
    
            .heading__spacing {
                letter-spacing: 4.54545px;
        
            }
        }
    }

`
export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .main__about {
        margin-top: 40px; 

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 8px;

        width: 713px;
        height: 98px;

        text-align: center;
    }

    .content__about {
        display: flex;
        flex-direction: column;

        gap: 40px;

        .about__right-banner {
            display: flex;
            gap: 32px;

            width: 1240px;
            height: 300px;
        }

        .about__left-banner {
            display: flex;
            gap: 32px;

            width: 1240px;
            height: 300px;
        }

        .content__text {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }
`