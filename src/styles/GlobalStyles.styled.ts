import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
    ::before,
    ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    }

    body {
    font-family: 'Manrope', 'Inconsolata', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: #ffffff;
    color: #0f3aaf;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-x: hidden;
    min-width: 320px;
    }

    a {
        cursor: pointer;
    text-decoration: none;


    }

    button {
    border: none;
    cursor: pointer;

    }
ul{
list-style-type:none;
padding:0;
margin:0;


}
html {
scroll-behavior: smooth;
}

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    }

`;
