import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};
        font-size: ${({theme}) => theme.sizes.text.default};
        font-family: ${({theme}) => theme.fonts.KumbhSans};
    }
`