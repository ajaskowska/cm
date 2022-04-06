import React from 'react';
import {Button} from "./styles/Button.style";
import {FindShopSection} from "./styles/FindShop.style";
import {Flex} from "./styles/Flex.style";
import {Container} from "./styles/Container.style";

function FindShop() {
    return (
        <FindShopSection>
            <Container>
                <Flex direct='column'>
                    <h1>Skorzystaj z oferty</h1>
                    <h2>Odwiedź nasz salon i sprawdź, co zyskujesz</h2>
                    <Button bg='#ECECEC' color='#191919'>Znajdź salon</Button>
                </Flex>
            </Container>

        </FindShopSection>

    );
}

export default FindShop;