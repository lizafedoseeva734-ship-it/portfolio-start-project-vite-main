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

`;
