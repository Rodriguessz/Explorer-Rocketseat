import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root{
    font-size: 62.5%;

    font-family: 'Roboto Slab', serif;
}
body{  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    font-size: 1.6rem;
    color: ${( { theme } ) => theme.COLORS.WHITE };
}
a{
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.3s;
}

button:hover, a:hover{
    filter: brightness(0.9);
}
`
