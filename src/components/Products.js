import React from 'react';
import windows from '../assets/windows.png'
import {Flex} from "./styles/Flex.style";
import {ProductImage} from "./styles/Product.style";
import {Container} from "./styles/Container.style";


function Products() {
    return (
        <Container>
            <Flex direct='column'>
                <h2>Ładny tekst opisujący proudkty firmy <b>RANDOM</b> </h2>
                <ProductImage src={windows} alt='ramy okienne'/>
            </Flex>
        </Container>




    );
}

export default Products;