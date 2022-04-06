import {ThemeProvider} from "styled-components";
import Header from "./components/Header";
import Products from "./components/Products";
import Offer from "./components/Offer";
import Gallery from "./components/Gallery";
import FindShop from "./components/FindShop";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";
import SocialMedia from "./components/SocialMedia";

const theme = {
    colors: {
        header: 'red',
        body: 'blue'
    }
}

function App() {
  return (
   <ThemeProvider theme={theme}>
       <>
           <GlobalStyles/>
           <Header/>
           <Products/>
           <Offer/>
           <Gallery/>
           <FindShop/>
           <SocialMedia/>
           <Footer/>
       </>
   </ThemeProvider>

  );
}

export default App;
