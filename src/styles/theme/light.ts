import { DefaultTheme } from "styled-components";

const LightTheme : DefaultTheme = {
    title: 'light',

    colors: {
        background: 'hsl(223, 64%, 98%)',
        primary: 'hsl(26, 100%, 55%)',
        secondary: 'hsl(25, 100%, 94%)',

        gray: 'hsl(219, 9%, 45%)',
        grayDark: 'hsl(220, 13%, 13%)',
        grayLight: 'hsl(220, 14%, 75%)',

        text: 'hsl(219, 9%, 45%)',
    },

    fonts: {
        KumbhSans: 'Kumbh Sans, sans-serif',
    },

    sizes: {
        text: {
            default: '16px',
            small: '12px',
            medium: '22px',
        }
    }
}

export default LightTheme;