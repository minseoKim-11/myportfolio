import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #212533;
        font-family: 'Noto Sans KR', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:visited {
        text-decoration: none;
        color: inherit;
    }

`;


export default GlobalStyle;
