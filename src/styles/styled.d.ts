import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            primary: string;
            secondary: string;

            gray: string;
            grayDark: string;
            grayLight: string;
    

            text: string;
            
        }

        fonts: {
            KumbhSans: string;
        }

        sizes: {
            text: {
                default: string
                small: string
                medium: string;
                
            }

        }
    }
}