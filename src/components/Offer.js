import React from 'react';
import {Button} from "./styles/Button.style";
import {Flex} from "./styles/Flex.style";
import {OfferSection, OfferTypography} from "./styles/Offer.style";
import {Container} from "./styles/Container.style";


function Offer() {
    return (
        <OfferSection>
            <Container>
                <Flex direct='column'>
                    <OfferTypography>Sprawdź najnowszą, sierpniową ofertę RANDOM. </OfferTypography>
                    <h2>Kup produkty zawierające dowolny system RGB lub CMYK i zyskaj dodatkowy rabat na zamówienie. </h2>
                    <hr width='30%'/>
                    <Button>Idź do sklepu</Button>
                </Flex>
            </Container>
        </OfferSection>

    );
}

export default Offer;