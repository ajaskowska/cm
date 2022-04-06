import React from 'react';
import  rec1  from '../assets/Rectangle 16.png'
import  rec2  from '../assets/Rectangle 17.png'
import  rec3  from '../assets/Rectangle 18.png'
import  rec4  from '../assets/Rectangle 19.jpg'
import {Flex} from "./styles/Flex.style";
import {Image} from "./styles/Gallery.style.js";
import {Container} from "./styles/Container.style";

function Gallery() {
    return (
        <>
            <Container>
                <Flex direct='column'>
                    <h1>Zainspiruj się <b>naszymi realizacjami</b></h1>
                    <h4> Wybierz model i kolor okien RGB idealnie dopasowanych do projektu Twojego wymarzonego domu.
                        Poznaj również szeroki asortyment rolet okiennych. </h4>
                </Flex>
            </Container>

            <Flex>
                <Image src={rec1} alt='okno balkonowe z widokiem na zieleń' />
                <Image src={rec2} alt='okno balkonowe z widokiem na zimę' />
                <Image src={rec3} alt='okno otwarte na taras' />
                <Image src={rec4} alt='salon z dużymi oknami'/>
            </Flex>


        </>

    );
}

export default Gallery;