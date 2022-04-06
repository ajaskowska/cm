import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wraper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
padding: 1rem;
  display: flex;
  align-items: end;
  position: relative;
  transition: 1s;
  font-size: 24px;
 

  &:hover {
    cursor: pointer;
    transform: rotateY(360deg);
  }
`
export const MediaArea = styled.div`
  max-width: 100vw;
  font-family: 'arial', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.01em;
  color: #645F5F;
  opacity: 0.6;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 1rem
`