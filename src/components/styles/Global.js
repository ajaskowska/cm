import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    
  }
  body {
    width: 100vw;
    font-family: 'Montserrat', sans-serif;
    color: #474040;
  }
  
  h1, h2, h3, h4, p {
    padding: 3rem 3rem 1rem 3rem;
    text-align: center;
  }
  h1 {
    font-size: 36px;
  }
  h4 {
    font-size: 19px;
  }
  
  .bannerTxt {
    font-family: 'arial', sans-serif;
    font-weight: 400;
    size: 48px;
  }
`

export default GlobalStyles;