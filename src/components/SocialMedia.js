import React from 'react';
import {MediaArea, StyledFontAwesomeIcon, Wraper} from "./styles/SocialMedia.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Flex} from "./styles/Flex.style";
import {Container} from "./styles/Container.style";


function SocialMedia() {
    return (
        <>
           <Container>
                   <p>Obserwuj nas i bądź na bieżąco ze wszystkimi ofertami.</p>
               <Wraper>
                   <StyledFontAwesomeIcon icon={faFacebook}  />
                   <StyledFontAwesomeIcon icon={faInstagram} />
                   <StyledFontAwesomeIcon icon={faLinkedinIn} />
               </Wraper>
           </Container>

        </>

    );
}

export default SocialMedia;