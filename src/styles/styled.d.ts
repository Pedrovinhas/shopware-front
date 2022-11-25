import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            primaryTint: string;
            error: string;
            highlight: string;
            accent: string;
            dark: string;
            bright: string;
            grey: string;
            lightText: string;
            highEmphasis: string;
            lowEmphasis: string;
            brown: string;
            discount: string;
            vibrant: string;
        },

        fontWeights: {
            strong: number;
            bold: number;
            big: number;
            medium: number;
            normal: number;
        },

        fontSizes: {
            sm: string;
            base: string;
            md: string;
            xl: string;
            xlg: string;
            'xlg2': string;
            '2xlg': string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
            '5xl': string;
            'midxl': string;
        },

        font: {
            inter: string;
        },

        radii: {
            none: number,
            base: string;
            rounded: string;
        },

        animation: {
            easeOut: string;
        }



    }
}